import { build, transform } from 'esbuild';
import { cp, mkdir, readFile, readdir, rename, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const theme = join(root, '_theme');
const fromRoot = (path) => join(root, path);
const fromTheme = (path) => join(theme, path);

async function atomicWrite(path, contents) {
  await mkdir(dirname(path), { recursive: true });
  const temporary = `${path}.tmp`;
  await writeFile(temporary, contents);
  await rename(temporary, path);
}

async function files(path) {
  const entries = await readdir(path, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory()
    ? files(join(path, entry.name)) : [join(path, entry.name)]))).flat();
}

// Preserve Hydejack's split critical/deferred styles, without a separate toolchain.
for (const path of (await files(fromTheme('_sass'))).filter(path => path.endsWith('.pre.scss'))) {
  const text = await readFile(path, 'utf8');
  const name = path.split('/').at(-1).replace('.pre.scss', '.scss');
  const inline = text.replace(/(.*)\s*\/\/\s*inline\s*$/gimu, '$1')
    .replace(/\/\/\s*>*\s*<{3,}\s*inline([\s\S]*?)\/\/\s*>{3,}.*/gimu, '$1')
    .replace(/(.*)\s*\/\/\s*link\s*$/gimu, '// $1')
    .replace(/\/\/\s*>*\s*<{3,}\s*link([\s\S]*?)\/\/\s*>{3,}.*/gimu, '');
  const linked = text.replace(/(.*)\s*\/\/\s*link\s*$/gimu, '$1')
    .replace(/\/\/\s*>*\s*<{3,}\s*link([\s\S]*?)\/\/\s*>{3,}.*/gimu, '$1')
    .replace(/(.*)\s*\/\/\s*inline\s*$/gimu, '// $1')
    .replace(/\/\/\s*>*\s*<{3,}\s*inline([\s\S]*?)\/\/\s*>{3,}.*/gimu, '');
  await atomicWrite(join(dirname(path), '__inline__', name), `// Generated from ${name}; edit the .pre.scss source.\n${inline}`);
  await atomicWrite(join(dirname(path), '__link__', name), `// Generated from ${name}; edit the .pre.scss source.\n${linked}`);
}

const component = (name, path = 'index.ts') => fromTheme(`_js/components/${name}/${path}`);
const result = await build({
  absWorkingDir: root,
  entryPoints: { 'hydejack-9.2.2': fromTheme('_js/src/entry.js') },
  outdir: fromTheme('assets/js'),
  bundle: true,
  splitting: true,
  format: 'esm',
  target: ['es2022'],
  minify: true,
  legalComments: 'eof',
  write: false,
  metafile: true,
  chunkNames: 'chunks/[name]-[hash]',
  define: { 'process.env.DEBUG': 'false', 'process.env.NODE_ENV': '"production"' },
  alias: {
    '@hydecorp/component/lib/util': component('component', 'util.ts'),
    '@hydecorp/component/lib/creators': component('component', 'creators.ts'),
    '@hydecorp/component/lib/operators': component('component', 'operators.ts'),
    '@hydecorp/component/lib/observers': component('component', 'observers.ts'),
    '@hydecorp/component': component('component'),
    '@hydecorp/drawer': component('drawer'),
    '@hydecorp/push-state': component('push-state'),
  },
  tsconfigRaw: { compilerOptions: { experimentalDecorators: true, useDefineForClassFields: false } },
});

// Compilation must succeed before replacing the previously generated bundles.
await rm(fromTheme('assets/js'), { recursive: true, force: true });
for (const output of result.outputFiles) await atomicWrite(output.path, output.contents);
for (const name of ['load-js', 'nomodule']) {
  const source = await readFile(fromTheme(`_includes/scripts/${name}.js`), 'utf8');
  const minified = await transform(source, { minify: true, target: 'es2022', legalComments: 'eof' });
  await atomicWrite(fromTheme(`_includes/scripts/${name}.min.js`), minified.code);
}
await rm(fromTheme('assets/vendor'), { recursive: true, force: true });
for (const [packageName, outputName, paths] of [
  ['mathjax', 'mathjax', ['tex-mml-chtml.js', 'input/tex/extensions', 'a11y', 'sre']],
  ['@mathjax/mathjax-newcm-font', 'mathjax-newcm-font', ['chtml.js', 'chtml']],
]) {
  for (const path of paths) {
    const target = fromTheme(`assets/vendor/${outputName}/${path}`);
    await mkdir(dirname(target), { recursive: true });
    await cp(fromRoot(`node_modules/${packageName}/${path}`), target, { recursive: true });
  }
}
console.log(`Built ${result.outputFiles.length} JavaScript assets, stylesheet partials, and self-hosted MathJax.`);

# Maintained Hydejack fork

This directory began as the free Hydejack 9.2.1 release at upstream commit
`60dc33975f8fccb1a23f44ee553acb52f6b3cf86`, from
<https://github.com/hydecorp/hydejack>. The local gem version is 9.2.2; it is a
photocyte fork, not an upstream release. Original copyrights, GPL-3.0 license,
and third-party notices are retained.

The `_js/components` source was taken from the published npm packages
`@hydecorp/component`, `@hydecorp/drawer`, and `@hydecorp/push-state`, version
1.0.0. The base component is MIT licensed; drawer and push-state are GPL-3.0.
The base package declared MIT in its package metadata but omitted a LICENSE
file; the standard MIT text and author attribution are included here.

These components are now local source. Their Lit 2 imports and method decorators
were adapted to Lit 3. The remaining application uses current RxJS and browser
APIs. esbuild compiles the TypeScript and JavaScript; the obsolete published
component builds and their old dependency trees are not installed.

Generated JavaScript, copied math assets, and critical/deferred Sass partials
are ignored. Run `npm ci --ignore-scripts` and `npm run build` from the repository
root to regenerate them. Sources, lockfiles, attribution, and build scripts are
tracked. Browser support targets current evergreen browsers; static content
and links also work with JavaScript disabled.

Root [MAINTENANCE.md](../MAINTENANCE.md) describes supported development and
deployment. The original theme documentation retained in this directory is
historical context, not instructions for rebuilding this fork.

# Site maintenance

The site and its Hydejack-derived theme are maintained in this repository.
`_theme/UPSTREAM.md` records the source release, local changes, and component
licenses. The site's content, media, and established URLs are separate from
the theme. The legacy GitHub Pages builder and `remote_theme` are no longer
used; GitHub Actions builds, audits, tests, and publishes the site.

## Baseline adopted on 2026-11-01

| Component | Previous baseline | Maintained baseline |
| --- | --- | --- |
| Ruby | 3.3 | 4.0, initially tested on 4.0.9 |
| Node | Not part of the site build | 26 LTS, initially tested on 26.13.0 |
| Jekyll | 3.10.0 through github-pages 232 | 4.4.1 |
| Sass | EOL Ruby Sass 3.7.4 | Dart Sass 1.107.1 through sass-embedded |
| Lit | lit-element 2.5.1 / lit-html 1.4.1 | Lit 3.3.3 |
| MathJax | Vendored 3.1.2 | 4.1.3, including local font files |
| RxJS | 7.8.1 | 7.8.2 |
| scroll-into-view-if-needed | 2.2.31 | 3.1.0 |
| JavaScript tooling | Webpack 4, Babel 7, Bower | esbuild 0.28.2 |
| Browser tests | None tracked | Playwright 1.64.1 |

Jekyll plugins and their transitive gems were also updated to current compatible
releases and locked. Some packages such as tippy.js, jekyll-paginate, and
jekyll-sitemap have no newer release; retaining their latest release does not
mean they were overlooked. `Gemfile.lock` includes checksums and ARM64/amd64
platforms. `package-lock.json` records exact npm packages and integrity hashes.
Commit both lockfiles whenever dependencies change.

## Local development

Open the repository root in the devcontainer. It uses native ARM64 on Apple
silicon, Ruby 4, and the Node 26 LTS line. Gems and node_modules use Docker
volumes. Setup installs dependencies and builds the theme assets. See
`.devcontainer/README.md` for preview and LiveReload commands.

Outside the container, install the Ruby and Node series in `.ruby-version` and
`.node-version`, then run:

```sh
bundle install
npm ci --ignore-scripts
npm run build
JEKYLL_ENV=production bundle exec jekyll build
```

Regenerate assets after editing `_theme/_js`, `_theme/_sass/*.pre.scss`, or
JavaScript dependencies. The build fails before replacing JavaScript bundles
when compilation fails. Jekyll compiles the Sass using the locked Dart engine.
Source, drafts, manifests, test files, and maintenance documents are excluded
from the published site. npm package examples and documentation are not copied
into the runtime asset directories.

## Updating and verifying dependencies

Dependabot proposes weekly Bundler, npm, GitHub Actions, and container-image
updates. The workflow also runs weekly to check current advisory databases.
It uses immutable action commits. Ruby/Node version files select supported
series so new builds receive current patch releases; upgrade those series
deliberately when compatibility has been tested.

Review the release notes, update the manifests and lockfiles, and run:

```sh
npm audit --audit-level=low
bundle exec bundle-audit check --update
npm run build
JEKYLL_ENV=production bundle exec jekyll build
npx playwright install --with-deps chromium firefox webkit
npm test
```

The regression suite covers published pages and images, drawer navigation,
history, dark mode, self-hosted MathJax/font loading, mobile layout, content
without JavaScript, and excluded build/source files. Chromium, Firefox, WebKit,
and a mobile WebKit viewport are tested. The initial baseline passed all 24
checks on native ARM64 and both dependency audits reported no known advisories.
Audits are checks against known vulnerability databases, not a guarantee of
security or continuing upstream maintenance.

The retired Universal Analytics UA tag was disabled; Google ended that service.
No replacement analytics identifier was invented. Disqus and Google Fonts are
external services, not packages covered by the lockfile audits. Disqus's
existing browsingTopics console errors also occurred before this migration.
The test suite distinguishes those third-party errors from first-party failures.

Remaining maintenance debt: the Sass source uses deprecated `@import` syntax.
It works with the current Dart Sass compiler. Migrate those styles to modules
before adopting a future Sass version that removes imports. Native ARM64 is
tested locally and amd64 is tested by GitHub Actions; old IE/polyfill bundles
are retired, with static content preserved for browsers without JavaScript.

## Deployment and rollback

The Pages publishing source must be **GitHub Actions** (`build_type: workflow`).
Pushes to master deploy only after dependency audits, the site build, and all
browser tests pass. Pull requests and maintenance branches run validation
without deploying. No force-push is needed to update or roll back.

The deployment before this migration is preserved at
`rollback/pre-maintenance-20261101` (commit `b199b42f`). To undo only this
maintenance migration, revert its commit(s), push master, then restore the
previous Pages source. With an authenticated GitHub CLI:

```sh
# First revert the maintenance migration commit(s) and push master.
gh api --method PUT repos/photocyte/photocyte.github.io/pages \
  -f build_type=legacy \
  -f 'source[branch]=master' \
  -f 'source[path]=/'
gh api --method POST repos/photocyte/photocyte.github.io/pages/builds
```

This publishing-source change is part of a rollback to the old remote-theme
build. For later changes that retain this workflow, a normal `git revert` and
push are sufficient. Verify the Pages deployment and public site after either
operation. Keep unrelated local work out of rollback commits.

# Tim Fallon's website

Content for <https://photocyte.github.io/>, published by GitHub Pages from the
`master` branch using the standard (legacy) Jekyll build.

Posts live in `_posts`, pages in the root directory, author information in
`_data/authors.yml`, and personal media in `images`, `assets/img`, `misc_files`,
and `CVs`. Local unfinished writing lives in the ignored `_drafts` directory.

## Theme and maintenance

Hydejack 9.2.1 is loaded through `remote_theme`, pinned to release commit
`60dc33975f8fccb1a23f44ee553acb52f6b3cf86` in `_config.yml`.
See the [upstream installation instructions](https://hydejack.com/docs/install/).
There is no local npm build: GitHub Pages uses the release's compiled assets.
Do not copy old `_layouts`, `_includes`, `_sass`, or JavaScript bundles back into
the site; local files override the theme and can prevent upgrades from working.
Personal media, article text, author data, and permalinks were preserved during
the 2026-11-01 migration from Hydejack 8.5.2.

For local preview, use Ruby 3.3 and run:

```sh
bundle install
bundle exec jekyll serve
```

`Gemfile` matches GitHub Pages 232. Its build dependencies are managed by GitHub
in production; Dependabot proposes updates to this site's Bundler dependencies.
The local `Gemfile.lock` is ignored. Review the Pages dependency list at
<https://pages.github.com/versions/> when updating this pin.

## Security review

The old local npm build lockfile reported 34 vulnerabilities on 2026-11-01
(7 low, 9 moderate, 17 high, 1 critical). The upstream 9.2.1 build lockfile also
has advisories (1 low, 7 moderate, 20 high, 6 critical); these counts describe
the full npm build dependency tree, not proof of browser exploitability.
A separate audit of the upstream runtime npm dependencies reported zero advisories.
This does not cover every vendored asset or establish that the browser code is safe.
This site no longer installs or executes that build tree. It uses the pinned
upstream release through GitHub's managed Pages builder. This upgrade is not a
claim that all upstream code or GitHub's managed dependencies are vulnerability-free.

## Deployment and rollback

Push to `master`, then check the Pages build and <https://photocyte.github.io/>.
Verify the main pages, article URLs, images, mobile navigation, and comments.
Drafts and build artifacts must not appear in the generated site.

The last deployed commit before the upgrade was
`ef81fe9fd29a0030d371dcdb052e3012d3b18ce0`, saved on GitHub as
`rollback/pre-hydejack-9.2.1-20261101`. The local cleanup commit `ce8ab59f`
was also retained in the upgrade's history.

To undo the migration, use `git revert` on the commit titled
`Upgrade to pinned Hydejack 9.2.1 remote theme`, then push the resulting commit
to `master`. This triggers the same Pages pipeline without changing Pages
settings or rewriting branch history. Before reverting, check `git status`
and preserve any unrelated work. Reverting retains the previous cleanup commit;
the rollback tag preserves the exact earlier deployed tree.

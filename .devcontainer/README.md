# Development container

Open the **repository root** in VS Code, then run **Dev Containers: Reopen in
Container**. Docker Desktop must be running. The container uses Ruby 4 on
Debian Bookworm, with the same Ruby and Node series used by CI. Dependencies
are installed automatically and theme assets are built on first creation. Node
26 LTS is installed using the version file and the image's bundled nvm.

The default is **native Linux ARM64** on Apple silicon. The Compose platform
setting overrides a host-wide `DOCKER_DEFAULT_PLATFORM=linux/amd64`; no Rosetta
or x86 emulation is needed. Linux gems live in a Docker volume, separated by
architecture, and host Bundler configuration is ignored. The image Bundler is
used even when an existing ignored lockfile requests old Bundler 1.

In the container terminal, start the preview:

```sh
bundle exec jekyll serve --host 0.0.0.0 --livereload --force_polling
```

Open <http://localhost:4000/>. Ports 4000 and 35729 (LiveReload) are forwarded
by the editor. Polling makes rebuilds reliable on macOS bind mounts. Add
`--drafts` to preview unfinished writing; review it locally before publishing.
The server starts only when you run it, and container setup never deploys.

For a production-mode build:

```sh
npm run build
JEKYLL_ENV=production bundle exec jekyll build
```

On an Intel development host or an amd64 Codespace, set `DEVCONTAINER_ARCH=amd64`
in the environment used to launch Dev Containers. The same image supports both
architectures, with separate gem cache directories. Keep ARM64 on Apple silicon.
Use **Dev Containers: Rebuild Container** after changing the configuration;
pull the image again when you want its latest Ruby/OS patches:

```sh
docker compose -f .devcontainer/compose.yaml pull
```

Dependabot also checks the Compose image weekly for version updates.

Without a devcontainer, use Ruby 4 and run:

```sh
bundle install
npm ci --ignore-scripts
npm run build
bundle exec jekyll serve
```

Commit Gemfile.lock and package-lock.json when updating dependencies. See
MAINTENANCE.md for audits, browser tests, and deployment/rollback.

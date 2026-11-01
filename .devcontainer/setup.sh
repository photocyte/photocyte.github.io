#!/usr/bin/env bash
set -euo pipefail

# A new Docker volume is initially owned by root. Match the development user,
# including when Dev Containers adjusts its UID on a Linux host.
sudo mkdir -p "${BUNDLE_PATH:?BUNDLE_PATH must be set by compose.yaml}"
sudo chown -R "$(id -u):$(id -g)" /home/vscode/.bundle-cache
sudo chown -R "$(id -u):$(id -g)" node_modules

# The image includes nvm; install the same pinned Node LTS used by CI.
source "${NVM_DIR}/nvm.sh"
nvm install "$(cat .node-version)"
nvm alias default "$(cat .node-version)"

bundle install
npm ci --ignore-scripts
npm run build

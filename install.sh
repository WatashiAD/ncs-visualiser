#!/usr/bin/env bash
set -euo pipefail

REPO_URL="https://github.com/WatashiAD/ncs-visualiser.git"
INSTALL_DIR="${SPICETIFY_CUSTOM_APPS:-$HOME/.spicetify/CustomApps}/visualizer"
SPOTIFY_PATH="${SPOTIFY_PATH:-}"

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

info()  { echo -e "${GREEN}[INFO]${NC} $1"; }
warn()  { echo -e "${YELLOW}[WARN]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1"; }

cleanup() {
  if [ -n "${TMP_DIR:-}" ] && [ -d "$TMP_DIR" ]; then
    rm -rf "$TMP_DIR"
  fi
}
trap cleanup EXIT

if ! command -v spicetify &> /dev/null; then
  error "Spicetify not found. Install it first: https://spicetify.app"
  exit 1
fi

SPICE_PATH=$(command -v spicetify)
info "Found Spicetify at $SPICE_PATH"

SPICE_VERSION=$(spicetify --version 2>/dev/null || echo "unknown")
info "Spicetify version: $SPICE_VERSION"

if [ -d "$INSTALL_DIR" ]; then
  warn "Visualiser already installed at $INSTALL_DIR"
  read -rp "Overwrite? [y/N] " confirm
  if [[ ! "$confirm" =~ ^[Yy]$ ]]; then
    info "Installation cancelled."
    exit 0
  fi
  rm -rf "$INSTALL_DIR"
fi

info "Downloading NCS Visualiser..."
TMP_DIR=$(mktemp -d)
git clone --depth 1 "$REPO_URL" "$TMP_DIR" 2>/dev/null || {
  error "Failed to clone repository. Check your internet connection."
  exit 1
}

info "Installing to $INSTALL_DIR..."
mkdir -p "$INSTALL_DIR"
cp "$TMP_DIR/index.js" "$TMP_DIR/style.css" "$TMP_DIR/manifest.json" "$INSTALL_DIR/"

info "Configuring Spicetify..."
spicetify config custom_apps visualizer

info "Applying changes..."
if spicetify apply 2>&1; then
  info "NCS Visualiser installed successfully!"
  echo ""
  echo "  Restart Spotify and click the visualizer icon in the left sidebar."
  echo "  For fullscreen controls, click the menu button -> Enter Fullscreen."
else
  error "spicetify apply failed. Try running it manually:"
  echo "  spicetify apply"
  exit 1
fi

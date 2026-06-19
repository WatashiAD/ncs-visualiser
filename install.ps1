param(
    [switch]$Force
)

$ErrorActionPreference = "Stop"
$RepoUrl = "https://github.com/WatashiAD/ncs-visualiser.git"
$SpicetifyPath = Get-Command "spicetify" -ErrorAction SilentlyContinue
$CustomAppsDir = "$env:USERPROFILE\.spicetify\CustomApps"
$InstallDir = "$CustomAppsDir\visualizer"

function Write-Info  { Write-Host "[INFO] $args" -ForegroundColor Green }
function Write-Warn  { Write-Host "[WARN] $args" -ForegroundColor Yellow }
function Write-Error { Write-Host "[ERROR] $args" -ForegroundColor Red }

if (-not $SpicetifyPath) {
    Write-Error "Spicetify not found. Install it first: https://spicetify.app/docs/advanced-usage/installation"
    exit 1
}

Write-Info "Found Spicetify at $($SpicetifyPath.Source)"
$SpiceVersion = & spicetify --version 2>$null
if (-not $SpiceVersion) { $SpiceVersion = "unknown" }
Write-Info "Spicetify version: $SpiceVersion"

if (Test-Path $InstallDir) {
    Write-Warn "Visualiser already installed at $InstallDir"
    if (-not $Force) {
        $confirm = Read-Host "Overwrite? [y/N]"
        if ($confirm -ne "y" -and $confirm -ne "Y") {
            Write-Info "Installation cancelled."
            exit 0
        }
    }
    Remove-Item -Path $InstallDir -Recurse -Force
}

Write-Info "Downloading NCS Visualiser..."
$tmpDir = Join-Path $env:TEMP "ncs-visualiser-$(Get-Random)"
try {
    git clone --depth 1 $RepoUrl $tmpDir 2>&1 | Out-Null
    if (-not (Test-Path "$tmpDir\index.js")) {
        throw "Clone completed but files not found"
    }
} catch {
    Write-Error "Failed to download. Make sure Git is installed and you have internet access."
    if (Test-Path $tmpDir) { Remove-Item -Path $tmpDir -Recurse -Force }
    exit 1
}

Write-Info "Installing to $InstallDir..."
New-Item -ItemType Directory -Path $InstallDir -Force | Out-Null
Copy-Item "$tmpDir\index.js", "$tmpDir\style.css", "$tmpDir\manifest.json" -Destination $InstallDir

Remove-Item -Path $tmpDir -Recurse -Force

Write-Info "Configuring Spicetify..."
& spicetify config custom_apps visualizer

Write-Info "Applying changes..."
try {
    & spicetify apply
    Write-Info "NCS Visualiser installed successfully!"
    Write-Host ""
    Write-Host "  Restart Spotify and click the visualizer icon in the left sidebar."
    Write-Host "  For fullscreen controls, click the menu button -> Enter Fullscreen."
} catch {
    Write-Error "spicetify apply failed. Try running it manually:"
    Write-Host "  spicetify apply"
    exit 1
}

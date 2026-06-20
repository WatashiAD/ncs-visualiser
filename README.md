<div align="center">

# NCS Visualiser

### A Real-Time Audio Visualizer for Spicetify

A high-performance **WebGL2-powered particle visualizer** for Spotify, built using the **Spicetify Custom App API**.

Synchronize stunning particle animations with Spotify's real-time audio analysis while enjoying dynamic album color extraction, fullscreen controls, and advanced developer tools.

<p>
  <img src="https://img.shields.io/badge/Spicetify-v2.43%2B-blue?style=for-the-badge" alt="Spicetify Version">
  <img src="https://img.shields.io/badge/License-Apache_2.0-green?style=for-the-badge" alt="License">
</p>

[Preview](#preview) •
[Features](#features) •
[Installation](#installation) •
[Upgrading](#upgrading--migration) •
[Usage & Controls](#usage--controls) •
[Customization](#customization) •
[Development](#development) •
[Project Structure](#project-structure) •
[Credits](#credits) •
[License](#license)

</div>

---

# Preview

---

# Preview

## Standard Interface

![Normal View](resources/Normal.png)

## Fullscreen Experience

![Fullscreen View](resources/FullScreen.png)

---

# Features

* 🔴 **Real-Time WebGL2 Particle Sphere** — High-performance GPU-rendered particle visualization synchronized with Spotify audio analysis.

* 🎨 **Dynamic Album Color Extraction** — Automatically extracts dominant colors from album artwork and applies them throughout the interface.

* 🖥️ **Immersive Fullscreen Mode** — Beautiful fullscreen overlay displaying track information, progress controls, and playback actions.

* 🎛️ **Integrated Playback Controls** — Control Spotify directly from the visualizer with play/pause, next, previous, shuffle, and repeat controls.

* 🔊 **Smart Volume Controller** — Quick mute functionality with a smooth hover-reveal volume slider.

* 📊 **Developer Analysis Tools** — Built-in debugging overlays for beats, bars, loudness, timbre, pitches, and rhythm analysis.

* 📐 **Responsive Interface** — Fluid layouts and typography designed to scale elegantly across all screen sizes.

* 🪟 **Standalone & Picture-in-Picture Support** — Open the visualizer in a separate window or Picture-in-Picture mode.

---

# Installation

> **Prerequisites**
>
> * Spotify Desktop Client
> * Spicetify v2.43 or newer

Need help installing Spicetify?

* Official FAQ: https://spicetify.app/docs/faq
* Community Discord: https://discord.gg/VnevqPp2Rr

## Step 1 — Open Your Spicetify Configuration Directory

```bash
spicetify config-dir
```

## Step 2 — Create the Custom App Directory

Inside:

```text
<Spicetify Config>/CustomApps/
```

Create a folder named:

```text
visualizer
```

Result:

```text
CustomApps/
└── visualizer/
```

## Step 3 — Download Required Files

| File                                                                                   | Description                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------- |
| [`index.js`](https://github.com/WatashiAD/ncs-visualiser/blob/main/index.js)           | Main application logic and WebGL renderer     |
| [`style.css`](https://github.com/WatashiAD/ncs-visualiser/blob/main/style.css)         | Visual styling, animations, and responsive UI |
| [`manifest.json`](https://github.com/WatashiAD/ncs-visualiser/blob/main/manifest.json) | Spicetify app manifest                        |

Expected structure:

```text
visualizer/
├── index.js
├── style.css
└── manifest.json
```

## Step 4 — Register the App

```bash
spicetify config custom_apps visualizer
```

## Step 5 — Apply Changes

```bash
spicetify apply
```

## Step 6 — Restart Spotify

Restart Spotify.

A new **Visualizer** entry should now appear in the sidebar.

---

# Upgrading & Migration

If you previously installed the older **ncs-visualiser**, remove it before upgrading.

## Remove Old Files

```text
CustomApps/ncs-visualiser
```

## Remove Old Configuration

```bash
spicetify config custom_apps ncs-visualiser-
```

After removal, follow the installation instructions above.

---

# Usage & Controls

| Action                 | Description                                |
| ---------------------- | ------------------------------------------ |
| Enter Fullscreen       | Menu → **Enter Fullscreen** or press `F11` |
| Play / Pause           | Press `Space` or use playback controls     |
| Seek Playback          | Click anywhere on the progress bar         |
| Previous / Next        | Skip tracks from fullscreen controls       |
| Shuffle / Repeat       | Toggle playback modes directly             |
| Volume Adjustment      | Hover over the volume icon                 |
| Switch Renderer        | Menu → **Renderer**                        |
| Open Standalone Window | Menu → **Open Window**                     |
| Picture-in-Picture     | Available through standalone mode          |

---

# Customization

## UI Styling

Modify [`style.css`](https://github.com/WatashiAD/ncs-visualiser/blob/main/style.css) to customize:

* Typography
* Overlay dimensions
* Canvas positioning
* Animations
* Layout spacing

## Theme Colors

All interface elements use:

```css
var(--theme-color)
```

which is dynamically updated using album artwork.

## Particle Behaviour

Inside [`index.js`](https://github.com/WatashiAD/ncs-visualiser/blob/main/index.js), search for values such as:

```javascript
0.73
0.86
```

These parameters control particle radius, movement sensitivity, and animation intensity.

---

# Development

No build process is required.

| Resource                                                                               | Description                                                                    |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [`index.js`](https://github.com/WatashiAD/ncs-visualiser/blob/main/index.js)           | Main application logic, React components, audio processing, and WebGL renderer |
| [`style.css`](https://github.com/WatashiAD/ncs-visualiser/blob/main/style.css)         | Styling, animations, and responsive layout                                     |
| [`manifest.json`](https://github.com/WatashiAD/ncs-visualiser/blob/main/manifest.json) | Spicetify custom app manifest                                                  |

After making changes:

```bash
spicetify apply
```

Restart Spotify to see your changes instantly.

---

# Project Structure

```text
ncs-visualiser/
├── resources/
│   ├── FullScreen.png
│   └── Normal.png
├── index.js
├── style.css
├── manifest.json
├── LICENSE
└── README.md
```

---

# Credits

This project builds upon the work of several open-source projects and contributors.

* Built using the **Spicetify Custom App API**
* Audio analysis powered by the **Spotify Web API**
* Typography provided via **Google Fonts**

  * Rubik Spray Paint
  * Jua
* Icons provided by **Google Material Icons**
* WebGL rendering inspired by classic NCS-style visualizers

## Attribution

Parts of this project's architecture and implementation are based on and adapted from:

### Konsl's Spicetify Visualizer

https://github.com/Konsl/spicetify-visualizer

Special thanks to **Konsl** for the original implementation, inspiration, and contribution to the Spicetify ecosystem.

---

# License

Licensed under the **Apache License 2.0**.

See the [LICENSE](LICENSE) file for more information.

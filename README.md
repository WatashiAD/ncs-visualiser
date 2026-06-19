# NCS Visualiser

A real-time audio visualizer for **Spicetify** — renders NCS-style particle effects synced to Spotify's audio analysis, with a fullscreen overlay showing track info and playback controls.

![screenshot](https://img.shields.io/badge/Spicetify-v2.43%2B-blue)
![license](https://img.shields.io/badge/license-Apache%202.0-green)

---

## Features

- **NCS-style particle sphere** — WebGL2 particle system driven by real amplitude curves from Spotify's audio analysis
- **Auto-color extraction** — picks theme color from the current track's album art
- **Fullscreen overlay** — song title, artist, progress bar, time, all themed with extracted color
- **Interactive seek bar** — click anywhere on the progress bar to seek
- **Playback controls** — shuffle, previous, play/pause, next, repeat (appear in fullscreen)
- **Volume control** — mute button with hover-reveal slider
- **Dynamic font sizing** — text scales with viewport for readability at any screen size
- **Visualizer analysis tools** — built-in timeline viewer for beats, bars, loudness, timbre, pitches, and rhythm

---

## Installation

### Prerequisites

- [Spicetify](https://spicetify.app) v2.43 or later
- Spotify Premium (required for audio analysis API)

### Install

1. Clone or download this repo into your Spicetify `CustomApps` folder:

```bash
cd ~\.spicetify\CustomApps
git clone https://github.com/WatashiAD/ncs-visualiser.git visualizer
```

Or manually copy `index.js`, `style.css`, and `manifest.json` into `~\.spicetify\CustomApps\visualizer\`.

2. Enable the custom app:

```bash
spicetify config custom_apps visualizer
spicetify apply
```

3. Restart Spotify, then click the visualizer icon in the left sidebar.

---

## Usage

| Action | Description |
|---|---|
| **Enter fullscreen** | Click the menu button (top-right) → Enter Fullscreen, or press `F11` |
| **Seek** | Click anywhere on the progress bar |
| **Previous / Next** | Use the controls that appear in fullscreen |
| **Play / Pause** | Fullscreen play button or `Space` |
| **Shuffle / Repeat** | Toggle via fullscreen controls |
| **Volume** | Hover the volume icon to reveal the slider |
| **Switch renderer** | Menu → Renderer → choose NCS or analysis tools |
| **Open in window** | Menu → Open Window (popup or PiP) |

### Renderers

- **NCS** — particle sphere visualizer (default)
- **Beats / Bars / Position / Loudness / Confidence / Timbre / Pitches / Rhythm** — audio analysis overlays for debugging

---

## File Structure

```
ncs-visualiser/
├── index.js         # Main visualizer app (React + WebGL2)
├── style.css        # All styles, fonts, animations
├── manifest.json    # Spicetify custom app manifest
├── LICENSE
└── README.md
```

---

## Customization

Edit `style.css` to tweak:

- **Font sizes** — search for `clamp()` values using `vw` / `vh` units
- **Colors** — all themed via `var(--theme-color)` extracted from album art
- **Layout** — overlay width (`max-width: 42%`), canvas position (`right: 5%`)
- **Particle sensitivity** — sphere radius range in `index.js` (search for `.73,.86`)

---

## Building from source

No build step required — `index.js` is self-contained. Edit directly and run `spicetify apply`.

---

## Credits

- Built on [Spicetify](https://spicetify.app) custom app API
- WebGL2 particle rendering adapted from NCS visualizer concepts
- Audio analysis data from Spotify's Web API
- Fonts: [Rubik Spray Paint](https://fonts.google.com/specimen/Rubik+Spray+Paint) & [Jua](https://fonts.google.com/specimen/Jua) via Google Fonts
- Icons: [Material Icons](https://fonts.google.com/icons) by Google

---

## License

[Apache 2.0](LICENSE)

# Mobile and security pass, 14 November 2026

One Explore action opens the temple panel at every width. Search, zoom/reset, login status and the existing tour live in the panel, with no dropdowns or always-on metadata strip. Warm OpenFreeMap colors, layers and attribution are preserved. Dense temple pins are grouped into numbered 44px clusters; individual pin artwork is quieter with its original hit area retained. Celestial entries stay accessible in the catalog rather than misleadingly appearing at Null Island.

Panel and detail close controls have 44px hits, keyboard trapping, Escape and focus return. Details fit a bounded viewport and scroll. Camera and CSS animation are off by default, and Framer respects reduced motion across the app. The existing authentication-not-configured status is unchanged; this pass does not configure accounts or sync.

MapLibre 6.18.0 has an explicitly bundled module worker. Vite/Vitest updates plus a scoped minimatch override bring npm audit from 22 findings, including critical issues, to zero. Peer resolution is explicit in .npmrc. CI uses Node22 and adds audit, production build and browser regression before merge. Existing checks are retained.

Local gates pass: fresh npm ci, lint, 11 unit tests, production build, zero npm audit findings. Six browser scenarios cover 320/390/1280px normal and reduced motion, panel/search/no-results/clear/controls, representative terrestrial details, both celestial entries, focus and overflow. Four more catalog scenarios open and close every one of the 108 temple details at390px. Actual map features are checked, not only canvas presence. 320/390/1280 pixels inspected; 390 evidence committed here.

No basemap replacement, scene/audio changes, credential changes, hosting plan changes or spend. Physical iOS/Safari, OAuth login and device-native share sheets are not claimed tested. The production build retains an existing large-chunk warning.

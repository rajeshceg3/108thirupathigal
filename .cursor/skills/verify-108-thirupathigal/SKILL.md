# Verify 108thirupathigal
108 Thirupathigal - Divine Pilgrimage Tracker (vite + React + TS, leaflet, supabase).
## Launch
npm install, then npm run dev or npm run build && npm run preview.
## Doctor
`python3 .cursor/skills/verify-108-thirupathigal/verify.py`
## Drive
Runs the vitest suite (App/GuidedTour/LocationCard), builds with vite, renders the built app in headless Chromium asserting the boot marker and zero JS console errors.
## Evidence
`.cursor/skills/verify-108-thirupathigal/evidence.json`
## Cleanup
Static/production server terminated after the render.
## Known boundaries
Render smoke only; scene quality unverified.

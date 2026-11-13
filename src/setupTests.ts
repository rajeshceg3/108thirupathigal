import '@testing-library/jest-dom'
// jsdom lacks these; maplibre-gl (warm paper basemap) touches them at import time.
if (!window.URL.createObjectURL) {
  window.URL.createObjectURL = () => 'blob:mock';
  window.URL.revokeObjectURL = () => {};
}

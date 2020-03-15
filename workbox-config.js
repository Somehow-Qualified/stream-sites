module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "index.html",
    "about/*.html",
    "{blog,video}/index.html",
    "**/*.{css,js}"
  ],
  "globIgnores": [
    "admin/**/*",
    "workbox/**/*"
  ],
  "swDest": "dist/sw.js",
  "runtimeCaching": [
    {
      "urlPattern": /\.(?:html|xml)$/,
      "handler": 'StaleWhileRevalidate',
      "options": {
        "cacheName": "markup",
        "expiration": {
          "maxAgeSeconds": 1296000
        }
      }
    }
  ],
  "cleanupOutdatedCaches": true,
  "clientsClaim": true,
  "skipWaiting": true,
  "sourcemap": false,
  "mode": "production"
};

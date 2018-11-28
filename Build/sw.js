importScripts( 'https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');


workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/posts'),
    workbox.strategies.cacheFirst()
);

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);


workbox.precaching.precacheAndRoute([
  {
    "url": "css/main.css",
    "revision": "3dcd1c45129cb0e28808537aac83125b"
  },
  {
    "url": "index.html",
    "revision": "39d38251fd372d00b4129aca6bd2a876"
  },
  {
    "url": "js/app.js",
    "revision": "30eb87e0e9d29f6853d3ff1c342b8729"
  }
]);
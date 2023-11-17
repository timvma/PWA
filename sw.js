const CACHE_NAME = 'v0.0.9';
const urlsToCache = [
    '/',
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/manifest.json",
];

// sw.js
self.addEventListener('install', event => {
    event.waitUntil(
      caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
    );
});
  

self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        console.log(response)
        return response || fetch(event.request);
      })
    )
})

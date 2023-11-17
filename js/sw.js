const CACHE_NAME = 'v0.0.2';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/js/main.js'
];



self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
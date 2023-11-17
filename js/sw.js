const CACHE_NAME = 'v0.0.1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/main.js'
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
const CACHE_NAME = 'v0.0.15';
const GITHUB_REPO_PATH = "/PWA"
const urlsToCache = [

  `${GITHUB_REPO_PATH}/`,
  `${GITHUB_REPO_PATH}/index.html`,
  `${GITHUB_REPO_PATH}/css/style.css`,
  `${GITHUB_REPO_PATH}/js/app.js`,
  `${GITHUB_REPO_PATH}/manifest.json`,

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

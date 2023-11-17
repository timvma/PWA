const staticDevCoffee = "dev-v0.0.1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",

]


self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
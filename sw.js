const CACHE_NAME = "gastos-app-v1";
const FILES = [
  "/gastos-app/",
  "/gastos-app/index.html",
  "/gastos-app/manifest.json"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});

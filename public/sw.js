// Service Worker otimizado para Speed Index
const CACHE_NAME = 'baterias-cunha-v1';
const CRITICAL_RESOURCES = [
  '/',
  '/src/main.tsx',
  '/src/index.css',
  'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/27d2a0c587ec42922bd7428914b65f30.jfif'
];

// Install event - cache recursos críticos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CRITICAL_RESOURCES))
      .then(() => self.skipWaiting())
  );
});

// Activate event - limpar caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - estratégia cache-first para recursos críticos
self.addEventListener('fetch', event => {
  // Apenas para recursos críticos
  if (CRITICAL_RESOURCES.some(resource => event.request.url.includes(resource))) {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(event.request);
        })
    );
  }
});
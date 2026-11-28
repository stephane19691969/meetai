var CACHE = 'meetai-v8';
var FICHIERS = ['./', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png'];
var CDN = [
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/docx/8.5.0/docx.umd.min.js'
];
var HOTES_CDN = ['cdnjs.cloudflare.com', 'fonts.googleapis.com', 'fonts.gstatic.com', 'cdn.jsdelivr.net'];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      var taches = FICHIERS.map(function (f) { return c.add(f).catch(function () {}); });
      CDN.forEach(function (u) { taches.push(c.add(new Request(u, { mode: 'no-cors' })).catch(function () {})); });
      return Promise.all(taches);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (cles) {
      return Promise.all(cles.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  // Les autres applications du dépôt (carnet, navigation, echo) ont leur propre service worker.
  if (url.origin === self.location.origin && /\/(carnet|navigation|echo)\//.test(url.pathname)) return;

  // Fichiers de l'application : réseau d'abord (dernière version), cache si hors connexion.
  if (url.origin === self.location.origin) {
    e.respondWith(
      fetch(req).then(function (res) {
        var copie = res.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copie); });
        return res;
      }).catch(function () {
        return caches.match(req).then(function (r) { return r || caches.match('index.html'); });
      })
    );
    return;
  }

  // Bibliothèques d'export et polices : cache d'abord, pour fonctionner hors connexion.
  // Les appels aux API (Claude, OpenAI) ne sont jamais interceptés.
  if (HOTES_CDN.indexOf(url.hostname) > -1) {
    e.respondWith(
      caches.match(req).then(function (r) {
        return r || fetch(req).then(function (res) {
          if (res && (res.ok || res.type === 'opaque')) {
            var copie = res.clone();
            caches.open(CACHE).then(function (c) { c.put(req, copie); });
          }
          return res;
        });
      })
    );
  }
});

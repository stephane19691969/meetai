const V='carnet-v3';const SHELL=['./','index.html','data.js','shim.js','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png'];
const CDN=/cdnjs\.cloudflare\.com|fonts\.(googleapis|gstatic)\.com|unpkg\.com|cdn\.jsdelivr\.net/;
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(SHELL.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('carnet-')&&x!==V&&x!=='carnet-cdn').map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET')return;
 if(CDN.test(u.host)){e.respondWith(caches.open('carnet-cdn').then(async c=>{const hit=await c.match(e.request);if(hit)return hit;const r=await fetch(e.request);if(r.ok||r.type==='opaque')c.put(e.request,r.clone());return r;}));return;}
 if(u.origin!==location.origin)return;
 e.respondWith(Promise.race([fetch(e.request,{cache:'no-store'}).then(r=>{if(r.ok){const cl=r.clone();caches.open(V).then(c=>c.put(e.request.mode==='navigate'?'index.html':e.request,cl));}return r;}),new Promise((_,rj)=>setTimeout(rj,4000))])
  .catch(()=>caches.match(e.request.mode==='navigate'?'index.html':e.request,{ignoreSearch:true}).then(h=>h||caches.match('index.html'))));});

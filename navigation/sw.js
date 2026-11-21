const V='nav-v1';const SHELL=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png',
 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css','https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js','https://unpkg.com/leaflet-rotate@0.2.8/dist/leaflet-rotate-src.js'];
const TILES=/tile\.openstreetmap\.org|tiles\.openseamap\.org|server\.arcgisonline\.com|ows\.emodnet-bathymetry\.eu/;
const DATA=/open-meteo\.com|rest\.emodnet-bathymetry\.eu/;
const MAXT=6000;
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(SHELL.map(u=>c.add(new Request(u,{mode:u.startsWith('http')?'no-cors':'same-origin'})).catch(()=>{})))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V&&x!=='nav-tiles'&&x!=='nav-data').map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
async function trim(){const c=await caches.open('nav-tiles');const k=await c.keys();if(k.length>MAXT)for(const r of k.slice(0,k.length-MAXT))await c.delete(r);}
self.addEventListener('fetch',e=>{const u=e.request.url;if(e.request.method!=='GET')return;
 if(TILES.test(u)){e.respondWith(caches.open('nav-tiles').then(async c=>{const hit=await c.match(e.request);if(hit)return hit;try{const r=await fetch(e.request);if(r.ok||r.type==='opaque'){c.put(e.request,r.clone());if(Math.random()<0.02)trim();}return r;}catch(x){return hit||Response.error();}}));return;}
 if(DATA.test(u)){e.respondWith(fetch(e.request).then(r=>{if(r.ok){const cl=r.clone();caches.open('nav-data').then(c=>c.put(e.request,cl));}return r;}).catch(()=>caches.open('nav-data').then(c=>c.match(e.request)).then(r=>r||Response.error())));return;}
 e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(hit=>{const net=fetch(e.request).then(r=>{if(r.ok&&new URL(u).origin===location.origin){const cl=r.clone();caches.open(V).then(c=>c.put(e.request,cl));}return r;}).catch(()=>hit);return hit||net;}));});

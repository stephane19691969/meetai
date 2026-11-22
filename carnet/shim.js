/* Remplace les services Claude par un stockage local (IndexedDB) pour la version hébergée */
window.__HOSTED=true;
(function(){
 const open=()=>new Promise((res,rej)=>{const r=indexedDB.open('carnetdb',1);r.onupgradeneeded=()=>{r.result.createObjectStore('docs',{keyPath:'k'});};r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error);});
 let DBP=null;const idb=()=>DBP||(DBP=open());
 const tx=async(mode,fn)=>{const d=await idb();return new Promise((res,rej)=>{const t=d.transaction('docs',mode);const st=t.objectStore('docs');const out=fn(st);t.oncomplete=()=>res(out&&out.result!==undefined?out.result:out);t.onerror=()=>rej(t.error);});};
 const C={};let loaded=null;const L={};
 const load=()=>loaded||(loaded=tx('readonly',st=>st.getAll()).then(all=>{(all||[]).forEach(r=>{(C[r.col]=C[r.col]||new Map()).set(r.id,r.data);});}));
 const snap=col=>{const m=C[col]||new Map();return {docs:[...m.entries()].map(([id,data])=>({id,data:()=>JSON.parse(JSON.stringify(data))})),size:m.size,empty:!m.size,metadata:{fromCache:false}};};
 const notify=col=>(L[col]||[]).forEach(cb=>{try{cb(snap(col));}catch(e){console.error(e);}});
 const rid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,10);
 const db={collection(col){return {
   doc(id){id=id||rid();return {id,
     async set(data){await load();const d=JSON.parse(JSON.stringify(data));await tx('readwrite',st=>st.put({k:col+'/'+id,col,id,data:d}));(C[col]=C[col]||new Map()).set(id,d);notify(col);},
     async update(data){await load();const cur=(C[col]&&C[col].get(id))||{};return this.set({...cur,...data});},
     async get(){await load();const d=C[col]&&C[col].get(id);return {exists:!!d,id,data:()=>d?JSON.parse(JSON.stringify(d)):undefined};},
     async delete(){await load();await tx('readwrite',st=>st.delete(col+'/'+id));C[col]&&C[col].delete(id);notify(col);}};},
   onSnapshot(cb,err){(L[col]=L[col]||[]).push(cb);load().then(()=>cb(snap(col))).catch(e=>err&&err(e));return ()=>{L[col]=L[col].filter(x=>x!==cb);};},
   async get(){await load();return snap(col);}};}};
 const toData=b=>new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(r.result);r.onerror=()=>rej(r.error);r.readAsDataURL(b);});
 const assets={async upload(b){const url=await toData(b);return {id:rid(),url,contentType:b.type||''};},async delete(){},async list(){return [];}};
 const downloads={async save({filename,data}){const blob=data instanceof Blob?data:new Blob([data]);const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=filename||'fichier';document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},4000);return true;}};
 window.claude={async use(n){if(n==='db')return db;if(n==='assets')return assets;if(n==='downloads')return downloads;return null;}};
 if(navigator.storage&&navigator.storage.persist)navigator.storage.persist().catch(()=>{});
})();

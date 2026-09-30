/* 尋卓護照服務工作者。只快取本網站自己的檔案，不連線到第三方。
   圖卡 manifest 與圖片在有網路時會更新快取，離線時用上次成功下載的副本。
   更換 cards/ 與 images/ 不需要修改這個檔案。 */
const CACHE = 'xunzhuo-passport-v2';

function isLibrary(url) {
  return url.pathname.includes('/cards/') || url.pathname.includes('/images/');
}

function storedResponse(res, body) {
  const headers = new Headers();
  const type = res.headers.get('Content-Type');
  if (type) headers.set('Content-Type', type);
  return new Response(body, {status: res.status, statusText: res.statusText, headers});
}

async function addUrl(cache, url) {
  const res = await fetch(url, {cache: 'reload'});
  if (!res.ok) throw new Error(res.status + ' ' + url);
  await cache.put(url, storedResponse(res, await res.blob()));
}

async function pool(items, limit, fn) {
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const idx = next++;
      await fn(items[idx]);
    }
  }
  const n = Math.min(limit, items.length);
  await Promise.all(Array.from({length: n}, () => worker()));
}

async function precache() {
  const cache = await caches.open(CACHE);
  const scopeUrl = new URL('./', self.registration.scope).href;
  const listRes = await fetch(new URL('precache.json', self.registration.scope), {cache: 'reload'});
  if (!listRes.ok) throw new Error('precache.json');
  const files = await listRes.json();
  const urls = files.map(path => new URL(path, self.registration.scope).href);
  if (!urls.includes(scopeUrl)) urls.unshift(scopeUrl);
  await pool(urls, 6, url => addUrl(cache, url));
  await self.skipWaiting();
}

async function fromCache(cache, req) {
  const hit = await cache.match(req);
  if (hit) return hit;
  if (req.mode === 'navigate') {
    const home = await cache.match(new URL('index.html', self.registration.scope).href);
    if (home) return home;
    const root = await cache.match(new URL('./', self.registration.scope).href);
    if (root) return root;
  }
  return null;
}

async function networkFirst(req) {
  const cache = await caches.open(CACHE);
  try {
    const fresh = await fetch(req);
    if (fresh.ok) await cache.put(req, storedResponse(fresh, await fresh.clone().blob()));
    return fresh;
  } catch (err) {
    const cached = await fromCache(cache, req);
    if (cached) return cached;
    throw err;
  }
}

async function cacheFirst(req) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(req);
  const update = fetch(req).then(async fresh => {
    if (fresh.ok) await cache.put(req, storedResponse(fresh, await fresh.clone().blob()));
    return fresh;
  }).catch(() => null);
  if (cached) return cached;
  const fresh = await update;
  if (fresh) return fresh;
  const fallback = await fromCache(cache, req);
  if (fallback) return fallback;
  return new Response('離線時找不到這個檔案', {status: 503, headers: {'Content-Type': 'text/plain;charset=utf-8'}});
}

self.addEventListener('install', event => {
  event.waitUntil(precache());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.endsWith('/sw.js')) return;
  event.respondWith(isLibrary(url) ? networkFirst(req) : cacheFirst(req));
});

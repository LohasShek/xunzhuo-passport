const U = [
  {id: '00', t: '首頁', c: '#3d5a73', hc: '#3d5a73'},
  {id: '01', t: '現況與起點', s: 'PES Model・聯想圖卡', c: '#e0795b', hc: '#9e3b1e', f: [
    {h: 'P 現況 Present', k: 'p', cards: 1, max: 1, lead: '我搶到的 1 張聯想圖卡', hint: '我在這圖看見甚麼？甚麼地方最吸引我？它對我有甚麼意義？它怎樣代表我現在的狀態？'},
    {h: 'E1 理想終點 End', k: 'e', cards: 1, max: 1, note: '這圖啟發我可以作出甚麼改變，讓世界變得更美好？'},
    {h: 'E2 理想終點 End', k: 'e2', cards: 1, max: 1, note: '這圖令我聯想到哪些人際關係，是我最珍惜及最想改善的？'},
    {h: 'E3 理想終點 End', k: 'e3', cards: 1, max: 1, note: '這圖令我聯想到，是甚麼給了我生命的意義和召命？'},
    {h: 'S 嘗試方案 Solution', k: 's', cards: 1, max: 1},
    {h: '這圖令我想到的目標（幫我實現理想終點的改變、改善或使命）', k: 'sgoal', type: 'ta'},
    {h: '一個月內要做的 3 個行動', k: 'sacts', cards: 1, max: 3, nophoto: 1},
    {h: '預計完成日期', k: 'sdate', type: 'date'},
    {h: '誰可以提醒我', k: 'sremind', type: 'text'},
    {h: '今日帶走的一句', k: 'take', type: 'ta', hint: '一個發現、一句組員的話，或一節經文'}
  ]},
  {id: '02', t: '價值觀', s: 'My Values 價值卡', c: '#d9a441', hc: '#725217', f: [
    {h: '極速價值搜尋：我搶到的價值卡', k: 'rush', cards: 1, max: 5, hint: '（在最重要的一張的 ☆ 打勾）', star: 1, oneStar: 1},
    {h: '我的標書（價值拍賣會）', k: 'bid', cards: 1, max: 8, hint: '每人銀行戶有 100 萬（教材 p.36）\n☆ 單元 06 用：我最看重的 3 個價值', star: 1, extras: [
      {k: 'price', label: '出價（萬）', type: 'number'},
      {k: 'won', label: '得標？', type: 'toggle'}
    ]},
    {h: '放棄時最心痛的一張', type: 'subs', parts: [
      {h: '卡名', k: 'painCard', type: 'text'},
      {h: '因為', k: 'painWhy', type: 'ta'}
    ]},
    {h: '我最終要守住的價值', k: 'keep', type: 'text'},
    {h: '今日帶走的一句', k: 'take', type: 'ta'}
  ]},
  {id: '03', t: '職業興趣', s: '職業探索卡・RIASEC', c: '#6aa56b', hc: '#3a603b', f: [
    {h: '我手上感興趣的職業卡', k: 'jobs', cards: 1, max: 5, hint: '☆ 在最想帶去單元 06 的 3 張打勾。', star: 1, extras: [
      {k: 'riasec', label: 'RIASEC 類型', type: 'text'}
    ]},
    {h: '我的職業興趣類型', type: 'subs', hint: '最多的三個類型，會後網上測試可再補上', parts: [
      {h: '小組中', k: 'codeGroup', type: 'text'},
      {h: '網上測試', k: 'codeWeb', type: 'text'}
    ]},
    {h: '重新看一個職業', type: 'subs', parts: [
      {h: '我曾有偏見的職業', k: 'reframeJob', type: 'text'},
      {h: '今天我看見它的價值', k: 'reframeSee', type: 'ta'}
    ]},
    {h: '今日帶走的一句', k: 'take', type: 'ta'}
  ]},
  {id: '04', t: '個人風格', s: 'This is Me! DISC 工具卡', c: '#4f94b8', hc: '#2f5d75', f: [
    {h: '我的九宮格', k: 'nine', cards: 1, max: 9, hint: '最能形容自己的 9 個詞\n☆ 單元 06 用：最代表我的 3 張卡', star: 1},
    {h: '我較多是', k: 'disc', type: 'chips', hint: '可圈多於一個', opts: ['D', 'I', 'S', 'C'], names: ['強勢型', '影響型', '穩定型', '謹慎型']},
    {h: '最「不像我」的一個詞', k: 'unlike', type: 'text'},
    {h: '和不同風格的人相處，我想微調的一點', k: 'adjust', type: 'ta'},
    {h: '今日帶走的一句', k: 'take', type: 'ta'}
  ]},
  {id: '05', t: '優勢', s: 'All about Strengths 優勢卡', c: '#8a72b8', hc: '#634a93', f: [
    {h: '力爭上游：我保住的優勢卡', k: 'mine', cards: 1, max: 5, hint: '每張卡都用一個親身事例保住\n☆ 單元 06 用：我的 3 個優勢', star: 1},
    {h: '組員送給我的卡', k: 'given', cards: 1, max: 8, hint: '備註寫卡名，送卡人寫在下面一格。', star: 1, extras: [
      {k: 'giver', label: '送卡人', type: 'text'}
    ]},
    {h: '一句令我意外的回饋', type: 'subs', parts: [
      {h: '誰送的', k: 'surpriseWho', type: 'text'},
      {h: '他說', k: 'surpriseSaid', type: 'ta'}
    ]},
    {h: '我的優勢輪廓圖（Johari Window）', k: 'johari', type: 'johari'},
    {h: '我做得好、但做完很累的事', sub: '耗盡技能 (Burnout Skill)', k: 'drain', type: 'ta'},
    {h: '今日帶走的一句', k: 'take', type: 'ta'}
  ]},
  {id: '06', t: '整合與召命', s: '我的 CBD・CBDC 召命觀', c: '#c15a7c', hc: '#983958', f: [
    {h: 'CBD', k: 'cbd', type: 'cbd'},
    {h: '尋召命 Calling', k: 'calling', cards: 1, max: 3, lead: '聯想圖卡（1–3 張）', note: '我想在甚麼領域或對甚麼群體作出正面的影響？'},
    {h: '展關懷 Caring：回應了這個召命，我對身邊哪些人和這個世界多了一份關顧？', k: 'field', type: 'ta', hint: 'Caring 是人回應 Calling 之後，引起的對世界的關顧。'},
    {h: '五年後，我想在 Being 和 Doing 上達成甚麼目標？', type: 'subs', parts: [
      {h: 'Being', k: 'fiveBeing', type: 'ta'},
      {h: 'Doing', k: 'fiveDoing', type: 'ta'}
    ]},
    {h: '為了實現我的 Calling，我馬上要做的三件重要事情', k: 'acts', cards: 1, max: 3, nophoto: 1, extras: [
      {k: 'date', label: '日期', type: 'date'}
    ]},
    {h: '六次聚會後，我想對當時的自己說', k: 'back', type: 'ta', hint: '回看起點：單元 06 時翻回單元 01，看看當時寫的 E（理想終點）。'}
  ]}
];

const PRIVACY = '尋卓護照不會收集任何資料。你寫下的內容和相片只留在這部手機，不會上傳，也沒有分析或第三方連線。每完成一個單元，請按右上角「備份」匯出一份。若使用 iPhone，請把本程式加到主畫面；Safari 若連續約 7 日沒有開啟這個網站，可能會清除網站資料。';

const K = 'xunzhuo-passport-v1';
const BASE = new URL('./', document.baseURI);
let S = {};
try { S = JSON.parse(localStorage.getItem(K) || '{}'); } catch (e) { S = {}; }
S.u = S.u || {};
S.done = S.done || {};
S.review = S.review || {};
migrateLibraryCards();
migratePresentCard();
migratePaperFields();
migrateLegacyNotes();
migrateRushStar();
let cur = '00';
let db = null;

const appEl = document.getElementById('app');
const navEl = document.getElementById('nav');
const ttlEl = document.getElementById('ttl');
const pv = document.getElementById('pv');
const pvimg = document.getElementById('pvimg');
const cam = document.getElementById('cam');
const upl = document.getElementById('upl');
const menuBtn = document.getElementById('menuBtn');

function save() {
  try { localStorage.setItem(K, JSON.stringify(S)); }
  catch (e) { alert('這部手機的儲存空間不足，請先按「備份」匯出，再刪除一些相片。'); }
}
function migrateLibraryCards() {
  try {
    const units = S.u;
    if (!units || typeof units !== 'object') return;
    let changed = false;
    Object.keys(units).forEach(uid => {
      const unit = units[uid];
      if (!unit || typeof unit !== 'object') return;
      Object.keys(unit).forEach(key => {
        const list = unit[key];
        if (!Array.isArray(list)) return;
        for (let i = 0; i < list.length; i++) {
          const it = list[i];
          if (!it || typeof it !== 'object' || Array.isArray(it)) continue;
          if (!('cardId' in it || 'img' in it || 'set' in it || 'num' in it)) continue;
          const next = {...it};
          delete next.cardId;
          delete next.img;
          delete next.set;
          delete next.num;
          if (typeof next.n !== 'string') next.n = '';
          list[i] = next;
          changed = true;
        }
      });
    });
    if (changed) save();
  } catch (e) {}
}
function migratePresentCard() {
  try {
    const unit = S.u && S.u['01'];
    if (!unit || !Array.isArray(unit.p) || unit.p.length <= 1) return;
    const first = unit.p[0];
    unit.p = [first && typeof first === 'object' ? first : {n: ''}];
    save();
  } catch (e) {}
}
function joinLines(s) {
  return String(s).split(/\r?\n/).map(x => x.trim()).filter(Boolean).join('／');
}
function isSingleLine(unitId, key) {
  const u = U.find(x => x.id === unitId);
  if (!u) return false;
  for (const f of u.f || []) {
    if (f.parts) {
      const p = f.parts.find(x => x.k === key);
      if (p) return p.type !== 'ta';
    }
    if (f.k === key) {
      if (f.cards || f.type === 'ta' || f.type === 'chips' || f.type === 'johari' || f.type === 'cbd' || f.type === 'subs') return false;
      return true;
    }
  }
  return false;
}
function fillFrom(unitId, from, to) {
  const unit = S.u && S.u[unitId];
  if (!unit || typeof unit[from] !== 'string' || !unit[from]) return false;
  if (typeof unit[to] === 'string' && unit[to]) return false;
  unit[to] = isSingleLine(unitId, to) ? joinLines(unit[from]) : unit[from];
  return true;
}
function emptyField(v) { return v == null || String(v).trim() === ''; }
function stripEmptyBrackets(s) {
  return String(s).replace(/[（(]\s*[）)]/g, '');
}
function takeBid(text) {
  const src = String(text);
  const paren = src.match(/[（(]\s*(\d+)\s*萬?\s*[）)]/);
  if (paren) return {num: paren[1], rest: src.slice(0, paren.index) + src.slice(paren.index + paren[0].length)};
  const wan = src.match(/(\d+)\s*萬/);
  if (wan) return {num: wan[1], rest: stripEmptyBrackets(src.slice(0, wan.index) + src.slice(wan.index + wan[0].length))};
  const bare = src.match(/(?:^|\s)(\d+)\s*$/);
  if (!bare) return null;
  return {num: bare[1], rest: src.slice(0, bare.index)};
}
function takeRiasec(text) {
  const re = /[（(]\s*([RIASECriasec](?:[\s,、，/／]*[RIASECriasec])*)\s*[）)]/g;
  let letters = '';
  let rest = '';
  let last = 0;
  let found = false;
  for (const m of String(text).matchAll(re)) {
    found = true;
    letters += m[1].replace(/[^RIASECriasec]/g, '').toUpperCase();
    rest += text.slice(last, m.index);
    last = m.index + m[0].length;
  }
  if (!found || !letters) return null;
  rest += text.slice(last);
  return {letters, rest};
}
function takeGiver(text) {
  const matches = [...String(text).matchAll(/[（(]\s*([^（()）)]*?)\s*[）)]/g)];
  for (let i = matches.length - 1; i >= 0; i--) {
    const inner = matches[i][1].trim();
    if (!inner || /^[RIASECriasec](?:[\s,、，/／]*[RIASECriasec])*$/.test(inner)) continue;
    return {name: joinLines(inner), rest: text.slice(0, matches[i].index) + text.slice(matches[i].index + matches[i][0].length)};
  }
  return null;
}
function splitCard(it, kind) {
  if (!it || typeof it !== 'object' || Array.isArray(it)) return false;
  if (typeof it.original === 'string') return false;
  const raw = typeof it.n === 'string' ? it.n : '';
  if (!raw) return false;
  const photo = it.p;
  let text = raw;
  let changed = false;
  if (kind === 'bid') {
    const bid = takeBid(text);
    if (bid && emptyField(it.price)) { it.price = bid.num; text = bid.rest; changed = true; }
  } else if (kind === 'jobs') {
    const got = takeRiasec(text);
    if (got && emptyField(it.riasec)) { it.riasec = got.letters; text = got.rest; changed = true; }
  } else if (kind === 'given') {
    const got = takeGiver(text);
    if (got && emptyField(it.giver)) { it.giver = got.name; text = got.rest; changed = true; }
  }
  const flat = stripEmptyBrackets(joinLines(text)).trim();
  if (!(changed || (/\r?\n/.test(raw) && flat !== raw) || (changed && flat !== raw))) return false;
  it.original = raw;
  it.n = flat;
  if (photo) it.p = photo;
  return true;
}
function rebuildFromOriginal(it, kind) {
  if (!it || typeof it !== 'object' || typeof it.original !== 'string') return false;
  if (!/[（(]\s*[）)]/.test(String(it.n || ''))) return false;
  const photo = it.p;
  let text = it.original;
  if (kind === 'bid') {
    const bid = takeBid(text);
    if (bid) {
      if (emptyField(it.price)) it.price = bid.num;
      text = bid.rest;
    }
  } else if (kind === 'jobs') {
    const got = takeRiasec(text);
    if (got) {
      if (emptyField(it.riasec)) it.riasec = got.letters;
      text = got.rest;
    }
  } else if (kind === 'given') {
    const got = takeGiver(text);
    if (got) {
      if (emptyField(it.giver)) it.giver = got.name;
      text = got.rest;
    }
  }
  const flat = stripEmptyBrackets(joinLines(text)).trim();
  if (it.n === flat) return false;
  it.n = flat;
  if (photo) it.p = photo;
  return true;
}
function migrateLegacyNotes() {
  try {
    const units = S.u;
    let changed = false;
    const kindOf = { '02': {bid: 'bid'}, '03': {jobs: 'jobs'}, '05': {given: 'given'} };
    if (!(S.mig && S.mig.notes)) {
      if (units && typeof units === 'object') {
        Object.keys(units).forEach(uid => {
          const unit = units[uid];
          if (!unit || typeof unit !== 'object') return;
          Object.keys(unit).forEach(key => {
            const val = unit[key];
            if (typeof val === 'string' && /\r?\n/.test(val) && isSingleLine(uid, key)) {
              const next = joinLines(val);
              if (next !== val) unit[key] = next;
            }
            if (!Array.isArray(val)) return;
            const kind = ((kindOf[uid] || {})[key]) || '';
            val.forEach(it => { splitCard(it, kind); });
          });
        });
      }
      S.mig = {...(S.mig || {}), notes: 1};
      changed = true;
    }
    if (units && typeof units === 'object') {
      Object.keys(units).forEach(uid => {
        const unit = units[uid];
        if (!unit || typeof unit !== 'object') return;
        Object.keys(unit).forEach(key => {
          const val = unit[key];
          if (!Array.isArray(val)) return;
          const kind = ((kindOf[uid] || {})[key]) || '';
          val.forEach(it => { if (rebuildFromOriginal(it, kind)) changed = true; });
        });
      });
    }
    if (changed) save();
  } catch (e) {}
}
function migrateRushStar() {
  try {
    const list = S.u && S.u['02'] && S.u['02'].rush;
    if (!Array.isArray(list)) return;
    let seen = false;
    let changed = false;
    list.forEach(it => {
      if (!it || typeof it !== 'object' || !it.st) return;
      if (seen) { it.st = false; changed = true; }
      else seen = true;
    });
    if (changed) save();
  } catch (e) {}
}
function migratePaperFields() {
  try {
    let changed = false;
    if (fillFrom('02', 'pain', 'painCard')) changed = true;
    if (fillFrom('03', 'code', 'codeGroup')) changed = true;
    if (fillFrom('03', 'reframe', 'reframeJob')) changed = true;
    if (fillFrom('06', 'five', 'fiveBeing')) changed = true;
    if (changed) save();
  } catch (e) {}
}
const uv = (u, k) => (S.u[u] = S.u[u] || {}, S.u[u][k]);
const setv = (u, k, v) => { S.u[u] = S.u[u] || {}; S.u[u][k] = v; save(); };
const esc = s => String(s ?? '').replace(/[&<>"]/g, m => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[m]));

const dbp = new Promise(resolve => {
  try {
    const q = indexedDB.open('xunzhuo-photos', 1);
    q.onupgradeneeded = () => q.result.createObjectStore('p');
    q.onsuccess = () => { db = q.result; resolve(); };
    q.onerror = () => resolve();
  } catch (e) { resolve(); }
});
function putP(id, blob) {
  if (!db) return Promise.resolve();
  return new Promise(resolve => {
    const t = db.transaction('p', 'readwrite');
    t.objectStore('p').put(blob, id);
    t.oncomplete = resolve;
    t.onerror = resolve;
  });
}
function getP(id) {
  if (!db) return Promise.resolve(null);
  return new Promise(resolve => {
    const q = db.transaction('p').objectStore('p').get(id);
    q.onsuccess = () => resolve(q.result || null);
    q.onerror = () => resolve(null);
  });
}
function allPhotoKeys() {
  if (!db) return Promise.resolve([]);
  return new Promise(resolve => {
    const q = db.transaction('p').objectStore('p').getAllKeys();
    q.onsuccess = () => resolve(q.result || []);
    q.onerror = () => resolve([]);
  });
}
const urls = {};
async function purl(id) {
  if (!id) return null;
  if (urls[id]) return urls[id];
  const b = await getP(id);
  if (!b) return null;
  return urls[id] = URL.createObjectURL(b);
}
function clearPhotoUrls() {
  Object.keys(urls).forEach(id => { URL.revokeObjectURL(urls[id]); delete urls[id]; });
}
function shrink(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const m = 900;
      const sc = Math.min(1, m / Math.max(img.width, img.height));
      const cv = document.createElement('canvas');
      cv.width = Math.max(1, Math.round(img.width * sc));
      cv.height = Math.max(1, Math.round(img.height * sc));
      cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height);
      URL.revokeObjectURL(url);
      cv.toBlob(b => b ? resolve(b) : reject(new Error('blob')), 'image/jpeg', 0.8);
    };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('image')); };
    img.src = url;
  });
}
let photoCb = null;
async function takePhoto(input) {
  const f = input.files && input.files[0];
  input.value = '';
  const cb = photoCb;
  photoCb = null;
  if (!f || !cb) return;
  try {
    const b = await shrink(f);
    const id = 'p' + Date.now() + Math.random().toString(36).slice(2, 6);
    await putP(id, b);
    cb(id);
  } catch (e) { alert('這張相片讀不到，請再試一次，或只寫下文字備註。'); }
}
cam.onchange = () => takePhoto(cam);
upl.onchange = () => takePhoto(upl);

function blobToDataURL(blob) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(fr.result);
    fr.onerror = reject;
    fr.readAsDataURL(blob);
  });
}
function dataURLToBlob(dataUrl) {
  const comma = String(dataUrl).indexOf(',');
  const head = String(dataUrl).slice(0, comma);
  const body = String(dataUrl).slice(comma + 1);
  const mime = (head.match(/^data:(.*?)(;|$)/) || [])[1] || 'application/octet-stream';
  const bin = atob(body);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return new Blob([arr], {type: mime});
}

function navR() {
  navEl.innerHTML = U.map(u => `<button type="button" class="${u.id === cur ? 'on' : ''}" data-u="${u.id}"><b>${u.id === '00' ? '⌂' : u.id}</b><span>${esc(u.t)}</span></button>`).join('');
  navEl.querySelectorAll('button').forEach(b => b.onclick = () => go(b.dataset.u));
  const on = navEl.querySelector('button.on');
  if (on) {
    const left = on.offsetLeft - (navEl.clientWidth - on.offsetWidth) / 2;
    navEl.scrollTo({left: Math.max(0, left)});
  }
  navHint();
}
function navHint() {
  const wrap = document.getElementById('navWrap');
  if (!wrap || !navEl) return;
  const max = navEl.scrollWidth - navEl.clientWidth;
  wrap.classList.toggle('scrolled', navEl.scrollLeft > 2);
  wrap.classList.toggle('at-end', max <= 2 || navEl.scrollLeft >= max - 2);
}
function go(id) {
  cur = id;
  const u = U.find(x => x.id === id);
  document.documentElement.style.setProperty('--c', u.c);
  document.documentElement.style.setProperty('--hc', u.hc || u.c);
  const theme = document.querySelector('meta[name="theme-color"]');
  if (theme) theme.setAttribute('content', u.hc || u.c);
  ttlEl.textContent = id === '00' ? '尋卓護照' : `${id} ${u.t}`;
  navR();
  if (id === '00') home();
  else unit(u);
  scrollTo(0, 0);
}

function home() {
  appEl.innerHTML = `<div class="card"><h2>我的護照</h2>
    <label for="nm">姓名</label><input type="text" id="nm" value="${esc(S.name)}" placeholder="你的名字">
    <label for="gp">小組</label><input type="text" id="gp" value="${esc(S.group)}">
    <label for="st">開始日期</label><input type="date" id="st" value="${esc(S.start)}"></div>
  <div class="card"><h2>六個單元</h2><p class="hint">完成一個單元，就會蓋上印章。</p><div class="stamps">
    ${U.slice(1).map(u => `<div class="stamp ${S.done[u.id] ? 'done' : ''}" style="--uc:${u.c}" data-u="${u.id}"><b>${u.id}</b>${esc(u.t)}</div>`).join('')}
  </div></div>
  <div class="card"><h2>行動回顧與同行</h2><p class="hint">每次聚會開始時，每人用一句話回顧上次的小行動。</p>
    ${['02', '03', '04', '05', '06'].map(n => `<label>第 ${n} 次聚會</label><label>上次定的小行動</label><input type="text" data-ra="${n}" value="${esc(S.review[n]?.a)}">
    <label>上次的小行動做了沒有？</label><div class="chips" data-r="${n}">${['做了', '部分', '未做'].map(o => `<button type="button" class="chip ${S.review[n]?.s === o ? 'on' : ''}" style="font-size:15px">${o}</button>`).join('')}</div>
    <input type="text" data-rt="${n}" placeholder="我的發現" value="${esc(S.review[n]?.t)}" style="margin-top:6px">`).join('')}
  </div>
  <div class="card"><h2>我們的小組協議</h2><p class="hint">單元 01 一起訂立</p><textarea id="pact">${esc(S.pact)}</textarea></div>
  <div class="card"><h2>同行的人</h2><p class="hint">請組員在這裏留一句祝福。</p><textarea id="with">${esc(S.with)}</textarea></div>
  <div class="card"><h2>私隱</h2><p class="privacy">${esc(PRIVACY)}</p></div>`;
  document.getElementById('nm').oninput = e => { S.name = e.target.value; save(); };
  document.getElementById('gp').oninput = e => { S.group = e.target.value; save(); };
  document.getElementById('st').oninput = e => { S.start = e.target.value; save(); };
  document.getElementById('pact').oninput = e => { S.pact = e.target.value; save(); };
  document.getElementById('with').oninput = e => { S.with = e.target.value; save(); };
  appEl.querySelectorAll('.stamp').forEach(s => s.onclick = () => go(s.dataset.u));
  appEl.querySelectorAll('[data-r]').forEach(g => g.querySelectorAll('button').forEach(b => b.onclick = () => {
    const n = g.dataset.r;
    S.review[n] = {...S.review[n], s: b.textContent};
    save();
    home();
  }));
  appEl.querySelectorAll('[data-ra]').forEach(i => i.oninput = () => {
    const n = i.dataset.ra;
    S.review[n] = {...S.review[n], a: i.value};
    save();
  });
  appEl.querySelectorAll('[data-rt]').forEach(i => i.oninput = () => {
    const n = i.dataset.rt;
    S.review[n] = {...S.review[n], t: i.value};
    save();
  });
}

function listOf(u, k) {
  const v = uv(u, k);
  return Array.isArray(v) ? v : [];
}
function noted(it) { return !!(it && ((it.n && String(it.n).trim()) || it.p)); }
const starred = (u, k) => listOf(u, k).filter(x => x && x.st && noted(x));

function showPhoto(src) {
  if (!src) return;
  pvimg.src = src;
  pv.classList.add('show');
}

function cardList(u, f, box) {
  let list = listOf(u.id, f.k);
  if (!list.length) list.push({n: ''});
  let token = 0;
  const draw = async () => {
    const my = ++token;
    box.innerHTML = '';
    for (let i = 0; i < list.length; i++) {
      if (my !== token) return;
      const it = list[i];
      const d = document.createElement('div');
      d.className = 'item' + (Array.isArray(f.extras) && f.extras.length ? ' has-extra' : '');
      const head = document.createElement('div');
      head.className = 'item-head';
      const photoUrl = !f.nophoto && it.p ? await purl(it.p) : null;
      if (my !== token) return;
      if (photoUrl) {
        const img = document.createElement('img');
        img.className = 'thumb';
        img.src = photoUrl;
        img.alt = it.n || '圖卡相片';
        img.onclick = () => showPhoto(photoUrl);
        head.appendChild(img);
      }
      const inp = document.createElement('input');
      inp.type = 'text';
      inp.className = 'card-input';
      inp.placeholder = f.nophoto ? '行動' : '卡名或想法（選填）';
      inp.value = it.n || '';
      inp.oninput = () => { it.n = inp.value; setv(u.id, f.k, list); maybeRefreshCbd(); };
      head.appendChild(inp);
      const del = document.createElement('button');
      del.type = 'button';
      del.className = 'ibtn del-btn';
      del.title = '刪除';
      del.textContent = '✕';
      del.onclick = () => {
        if (it.p && !confirm('刪除這張紀錄和相片？')) return;
        list.splice(i, 1);
        if (!list.length) list.push({n: ''});
        setv(u.id, f.k, list);
        draw();
        maybeRefreshCbd();
      };
      if (!f.nophoto) {
        const tools = document.createElement('div');
        tools.className = 'item-tools';
        const shoot = document.createElement('button');
        shoot.type = 'button';
        shoot.className = 'ibtn txt cam-btn';
        shoot.textContent = '拍照';
        shoot.title = '拍照';
        const upload = document.createElement('button');
        upload.type = 'button';
        upload.className = 'ibtn txt upl-btn';
        upload.textContent = '上載相片';
        upload.title = '上載相片';
        const use = input => {
          if (!db) { alert('這部瀏覽器未能儲存相片，可以先寫下文字備註。'); return; }
          photoCb = id => { it.p = id; setv(u.id, f.k, list); draw(); maybeRefreshCbd(); };
          input.click();
        };
        shoot.onclick = () => use(cam);
        upload.onclick = () => use(upl);
        tools.append(shoot, upload);
        if (f.star) {
          const star = document.createElement('button');
          star.type = 'button';
          star.className = 'ibtn star-btn' + (it.st ? ' on' : '');
          star.title = '帶去單元 06';
          star.textContent = '☆';
          star.setAttribute('aria-pressed', it.st ? 'true' : 'false');
          star.onclick = () => {
            if (f.oneStar) {
              const on = !it.st;
              list.forEach(x => { if (x) x.st = false; });
              it.st = on;
            } else it.st = !it.st;
            setv(u.id, f.k, list);
            draw();
            maybeRefreshCbd();
          };
          tools.appendChild(star);
        }
        tools.appendChild(del);
        d.append(head, tools);
      } else {
        head.appendChild(del);
        d.appendChild(head);
      }
      if (Array.isArray(f.extras)) {
        f.extras.forEach(ex => {
          const wrap = document.createElement('div');
          wrap.className = 'extra';
          if (ex.type === 'toggle') {
            const b = document.createElement('button');
            b.type = 'button';
            b.className = 'won-btn' + (it[ex.k] ? ' on' : '');
            b.textContent = it[ex.k] ? '✓ 得標' : ex.label;
            b.setAttribute('aria-pressed', it[ex.k] ? 'true' : 'false');
            b.onclick = () => { it[ex.k] = !it[ex.k]; setv(u.id, f.k, list); draw(); };
            wrap.appendChild(b);
          } else {
            const lab = document.createElement('label');
            lab.textContent = ex.label;
            const inp = document.createElement('input');
            inp.type = ex.type === 'number' ? 'number' : ex.type === 'date' ? 'date' : 'text';
            if (ex.type === 'number') { inp.min = '0'; inp.inputMode = 'numeric'; }
            inp.value = it[ex.k] == null ? '' : it[ex.k];
            inp.oninput = () => { it[ex.k] = inp.value; setv(u.id, f.k, list); };
            wrap.append(lab, inp);
          }
          d.appendChild(wrap);
        });
      }
      box.appendChild(d);
    }
    if (my !== token) return;
    if (list.length < f.max) {
      const actions = document.createElement('div');
      actions.className = 'actions';
      const add = document.createElement('button');
      add.type = 'button';
      add.className = 'btn ghost add-row';
      add.textContent = f.nophoto ? '＋ 加一項' : '＋ 加一張';
      add.onclick = () => {
        if (list.length >= f.max) return;
        list.push({n: ''});
        draw();
      };
      actions.appendChild(add);
      box.appendChild(actions);
    }
    if (f.note) {
      const l = document.createElement('label');
      l.className = 'ask';
      l.textContent = f.note;
      const t = document.createElement('textarea');
      t.value = uv(u.id, f.k + '_note') || '';
      t.oninput = () => { setv(u.id, f.k + '_note', t.value); maybeRefreshCbd(); };
      box.append(l, t);
    }
  };
  draw();
}

function cbdName(raw) {
  let name = String(raw || '').replace(/\s+/g, ' ').trim();
  let prev;
  do {
    prev = name;
    name = name.replace(/\s*[（(][^（()）)]*[）)]\s*$/, '').trim();
    name = name.replace(/\s*\d+\s*萬\s*$/, '').trim();
    name = name.replace(/\s*\d+\s*$/, '').trim();
  } while (name && name !== prev);
  return name;
}
function cbdKey(it) {
  const name = cbdName(it && it.n);
  if (name) return 'n:' + name;
  if (it && it.p) return 'p:' + it.p;
  return '';
}
function cbdTake(items) {
  const seen = new Set();
  const unique = [];
  for (const it of items) {
    const key = cbdKey(it);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    unique.push(it);
  }
  return {shown: unique.slice(0, 3), more: unique.length > 3};
}
let cbdToken = 0;
function maybeRefreshCbd() { if (document.getElementById('cbd')) renderCbd(); }
async function renderCbd() {
  const el = document.getElementById('cbd');
  if (!el) return;
  const my = ++cbdToken;
  const bv = cbdTake([...starred('02', 'rush'), ...starred('02', 'bid')]);
  const bm = cbdTake(starred('04', 'nine'));
  const dj = cbdTake(starred('03', 'jobs'));
  const ds = cbdTake([...starred('05', 'mine'), ...starred('05', 'given')]);
  const disc = (Array.isArray(uv('04', 'disc')) ? uv('04', 'disc') : []).join('');
  const code = uv('03', 'codeGroup') || uv('03', 'code') || '';
  const calling = listOf('06', 'calling').filter(noted);
  const field = uv('06', 'field') || '';
  const note = uv('06', 'calling_note') || '';
  const cap = more => more ? '<div class="src">只顯示首 3 張</div>' : '';
  const html = `
    <svg class="tri-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <polygon points="50,1.2 1.2,98.8 98.8,98.8"></polygon>
    </svg>
    <div class="edges"><div class="edge edge-drive">驅動 →</div><div class="edge edge-show">← 呈現</div></div>
    <div class="zone tri-call" data-zone="calling" style="border-color:#c15a7c;background:#fbf1f5"><h3>尋召命 Calling</h3><div class="src">聯想圖卡（1–3 張）</div><div class="pills">${await pills(calling, '尚未拍下或寫下')}</div>${note ? `<div class="src call-note">${esc(note)}</div>` : ''}</div>
    <div class="zone tri-care" data-zone="caring" style="border-color:#6aa56b;background:#f2f8f2"><h3>展關懷 Caring</h3>${field ? `<div class="care-text">${esc(field)}</div>` : '<div class="src">在下面寫下回應召命之後的關顧</div>'}</div>
    <div class="zone tri-being" data-zone="being" style="border-color:#d9a441;background:#fdf8ee"><h3>活真我 Being<span class="role">做人</span></h3><div class="src">價值卡首 3 張（02）</div><div class="pills">${await pills(bv.shown)}</div>${cap(bv.more)}<div class="src">This is Me! 卡首 3 張（04）${disc ? '・' + esc(disc) : ''}</div><div class="pills">${await pills(bm.shown)}</div>${cap(bm.more)}</div>
    <div class="zone tri-doing" data-zone="doing" style="border-color:#4f94b8;background:#f1f7fb"><h3>行使命 Doing<span class="role">處事</span></h3><div class="src">職業探索卡首 3 張（03）${code ? '・' + esc(code) : ''}</div><div class="pills">${await pills(dj.shown)}</div>${cap(dj.more)}<div class="src">優勢卡首 3 張（05）</div><div class="pills">${await pills(ds.shown)}</div>${cap(ds.more)}</div>`;
  if (my !== cbdToken || !document.body.contains(el)) return;
  el.innerHTML = html;
  bindPillPhotos(el);
}

async function pills(items, empty) {
  if (!items.length) return `<span class="empty">${esc(empty || '未有 ☆ 的卡')}</span>`;
  let h = '';
  for (const it of items) {
    const src = await purl(it.p);
    const nm = String(it.n || '').trim();
    h += `<span class="pill ${src ? '' : 'noimg'}">${src ? `<img src="${esc(src)}" alt="">` : ''}${esc(nm)}</span>`;
  }
  return h;
}
function bindPillPhotos(root) {
  root.querySelectorAll('.pill img').forEach(img => { img.onclick = () => showPhoto(img.src); });
}

function hintBlock(hint) {
  if (!hint) return '';
  const lines = String(hint).split('\n').map(s => s.trim()).filter(Boolean);
  if (lines.length <= 1) return `<p class="hint">${esc(hint)}</p>`;
  return `<ol class="qlist">${lines.map(line => `<li>${esc(line)}</li>`).join('')}</ol>`;
}
function unit(u) {
  appEl.innerHTML = `<div class="card" style="border-top:5px solid ${u.c}"><div style="font-size:22px;font-weight:700;color:${u.c}">${u.id} ${esc(u.t)}</div><div class="hint" style="margin:0">${esc(u.s)}</div></div>`;
  u.f.forEach(f => {
    const c = document.createElement('div');
    c.className = 'card';
    c.innerHTML = `<h2>${esc(f.h)}</h2>${f.sub ? `<p class="sub">${esc(f.sub)}</p>` : ''}${f.lead ? `<p class="hint">${esc(f.lead)}</p>` : ''}${f.type === 'chips' ? '' : hintBlock(f.hint)}`;
    const box = document.createElement('div');
    c.appendChild(box);
    appEl.appendChild(c);
    if (f.cards) cardList(u, f, box);
    else if (f.type === 'ta' || f.type === 'text' || f.type === 'date') {
      const t = document.createElement(f.type === 'ta' ? 'textarea' : 'input');
      if (f.type !== 'ta') t.type = f.type;
      t.value = uv(u.id, f.k) || '';
      t.oninput = () => { setv(u.id, f.k, t.value); maybeRefreshCbd(); };
      box.appendChild(t);
    } else if (f.type === 'chips') {
      const stored = uv(u.id, f.k);
      const v = Array.isArray(stored) ? stored : [];
      box.innerHTML = `<div class="chips">${f.opts.map((o, i) => `<button type="button" class="chip ${v.includes(o) ? 'on' : ''}" data-o="${o}">${o}${f.names ? `<div style="font-size:12px;font-weight:400">${esc(f.names[i])}</div>` : ''}</button>`).join('')}</div><p class="hint" style="margin-top:6px">${esc(f.hint || '可選多於一個。')}</p>`;
      box.querySelectorAll('button').forEach(b => b.onclick = () => {
        const o = b.dataset.o;
        const i = v.indexOf(o);
        if (i < 0) v.push(o); else v.splice(i, 1);
        setv(u.id, f.k, v);
        b.classList.toggle('on');
      });
    } else if (f.type === 'johari') {
      const q = [['open', 'Open 區', '自己和別人都知道的強項'], ['blind', 'Blind 區', '別人知道而自己不知道的強項'], ['hidden', 'Hidden 區', '自己知道而別人不知道的強項'], ['unknown', 'Unknown 區', '我和別人都未發現的強項']];
      const v = uv(u.id, f.k) || {};
      box.innerHTML = `<p class="hint">看着相片，把卡名寫進 Open、Blind、Hidden 三區；Unknown 區沒有卡。</p><div class="johari">${q.map(x => `<div class="q"><b>${esc(x[1])}</b><small>${esc(x[2])}</small><textarea data-q="${x[0]}">${esc(v[x[0]])}</textarea></div>`).join('')}</div>`;
      box.querySelectorAll('textarea').forEach(t => t.oninput = () => { v[t.dataset.q] = t.value; setv(u.id, f.k, v); });
    } else if (f.type === 'subs') {
      f.parts.forEach(part => {
        const lab = document.createElement('label');
        lab.textContent = part.h;
        const t = document.createElement(part.type === 'ta' ? 'textarea' : 'input');
        if (part.type !== 'ta') t.type = part.type === 'date' ? 'date' : 'text';
        t.value = uv(u.id, part.k) || '';
        t.oninput = () => setv(u.id, part.k, t.value);
        box.append(lab, t);
      });
    } else if (f.type === 'cbd') {
      c.querySelector('h2').textContent = '我的 CBD';
      box.innerHTML = '<p class="hint">依楊錫鏘牧師提出的 CBDC 召命觀整合。尋召命用 1–3 張聯想圖卡。星號卡放在三角形的三個角，展關懷在中間。</p><div class="cbd-tri" id="cbd"></div>';
      renderCbd();
    }
  });
  const d = document.createElement('div');
  d.className = 'card noprint';
  d.innerHTML = `<button type="button" class="btn done-toggle ${S.done[u.id] ? 'ghost' : ''}">${S.done[u.id] ? '已蓋章（按此取消）' : '完成這個單元，蓋章'}</button>
    <p class="note">資料只留在這部手機。每個單元後請備份。</p>`;
  d.querySelector('button').onclick = () => { S.done[u.id] = !S.done[u.id]; save(); unit(u); };
  appEl.appendChild(d);
}

pv.onclick = () => pv.classList.remove('show');

menuBtn.onclick = async () => {
  const c = prompt('輸入數字：\n1 匯出備份檔\n2 匯入備份檔\n3 列印／存成 PDF');
  if (c === '1') {
    const ph = {};
    const keys = await allPhotoKeys();
    for (const key of keys) {
      const b = await getP(key);
      if (b) ph[key] = await blobToDataURL(b);
    }
    const blob = new Blob([JSON.stringify({S, ph})], {type: 'application/json'});
    const a = document.createElement('a');
    const safeName = String(S.name || '').replace(/[\\/:*?"<>|]/g, '').slice(0, 40);
    a.href = URL.createObjectURL(blob);
    a.download = '尋卓護照備份_' + safeName + '.json';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }
  if (c === '2') {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json,application/json';
    input.onchange = async () => {
      try {
        const file = input.files && input.files[0];
        if (!file) return;
        const d = JSON.parse(await file.text());
        if (!d || !d.S || typeof d.S !== 'object') { alert('這不是尋卓護照的備份檔。'); return; }
        const photos = d.ph && typeof d.ph === 'object' ? d.ph : {};
        for (const key of Object.keys(photos)) await putP(key, dataURLToBlob(photos[key]));
        clearPhotoUrls();
        S = d.S;
        S.u = S.u || {};
        S.done = S.done || {};
        S.review = S.review || {};
        migrateLibraryCards();
        migratePresentCard();
        migratePaperFields();
        migrateLegacyNotes();
        migrateRushStar();
        save();
        go('00');
      } catch (e) { alert('匯入失敗，請確認檔案是尋卓護照匯出的備份。'); }
    };
    input.click();
  }
  if (c === '3') print();
};

function showUpdate() {
  const el = document.getElementById('upd');
  if (el) el.hidden = false;
}
const updBtn = document.getElementById('updBtn');
if (updBtn) updBtn.onclick = () => location.reload();
if (navEl) {
  navEl.addEventListener('scroll', navHint, {passive: true});
  window.addEventListener('resize', navHint);
}
if ('serviceWorker' in navigator) {
  let hadController = !!navigator.serviceWorker.controller;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!hadController) { hadController = true; return; }
    showUpdate();
  });
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(new URL('sw.js', BASE).href, {scope: new URL('./', BASE).href, updateViaCache: 'none'}).then(reg => {
      if (reg.waiting && navigator.serviceWorker.controller) showUpdate();
      reg.addEventListener('updatefound', () => {
        const nw = reg.installing;
        if (!nw) return;
        nw.addEventListener('statechange', () => {
          if (nw.state === 'installed' && navigator.serviceWorker.controller) showUpdate();
        });
      });
    }).catch(() => {});
  });
}

dbp.then(() => go('00'));

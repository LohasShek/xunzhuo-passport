const U = [
  {id: '00', t: '首頁', c: '#3d5a73'},
  {id: '01', t: '現況與起點', s: 'PES Model・聯想圖卡', c: '#e0795b', f: [
    {h: 'P 現況 Present', k: 'p', cards: 1, max: 1, set: 'association', note: '它反映我現在的工作或生活狀態'},
    {h: 'E 期待終點 End', k: 'e', cards: 1, max: 1, set: 'association', note: '我渴望看見的改變'},
    {h: 'S 嘗試方案 Solution', k: 's', cards: 1, max: 1, set: 'association', note: '一個月內可以試做的一件小事'},
    {h: '預計完成日期', k: 'sdate', type: 'date'},
    {h: '今日帶走的一句', k: 'take', type: 'ta', hint: '可以是一個發現、一句組員的話，或一節經文。'}
  ]},
  {id: '02', t: '價值觀', s: 'My Values 價值卡', c: '#d9a441', f: [
    {h: '我的標書', k: 'bid', cards: 1, max: 8, set: 'values', hint: '每行寫一張價值卡和出價，例如「家庭 30 萬」。在最看重的 3 張按 ☆。', star: 1},
    {h: '放棄時最心痛的一張', k: 'pain', type: 'ta'},
    {h: '我最終要守住的價值', k: 'keep', type: 'text'},
    {h: '今日帶走的一句', k: 'take', type: 'ta'}
  ]},
  {id: '03', t: '職業興趣', s: '職業探索卡・RIASEC', c: '#6aa56b', f: [
    {h: '我手上感興趣的職業卡', k: 'jobs', cards: 1, max: 6, set: 'careers', hint: '可以在卡名後寫類型，例如「社工（S）」。最想帶去單元 06 的 3 張按 ☆。', star: 1},
    {h: '我的興趣碼', k: 'code', type: 'text', hint: '最多的三個類型，例如 SAE；會後網上測試結果可再補上。'},
    {h: '重新看一個職業', k: 'reframe', type: 'ta', hint: '我曾有偏見的職業，今天我看見它的價值。'},
    {h: '今日帶走的一句', k: 'take', type: 'ta'}
  ]},
  {id: '04', t: '個人風格', s: 'This is Me! DISC 工具卡', c: '#4f94b8', f: [
    {h: '我的九宮格', k: 'nine', cards: 1, max: 9, set: 'disc', hint: '最能形容自己的 9 個詞。最代表我的 3 張按 ☆。', star: 1},
    {h: '我較多是', k: 'disc', type: 'chips', opts: ['D', 'I', 'S', 'C'], names: ['強勢型', '影響型', '穩定型', '謹慎型']},
    {h: '和不同風格的人相處，我想微調的一點', k: 'adjust', type: 'ta'},
    {h: '今日帶走的一句', k: 'take', type: 'ta'}
  ]},
  {id: '05', t: '優勢', s: 'All about Strengths 優勢卡', c: '#8a72b8', f: [
    {h: '我自選的 5 張優勢卡', k: 'mine', cards: 1, max: 5, set: 'strengths', hint: '最想帶去單元 06 的 3 張按 ☆（可以包括組員送的）。', star: 1},
    {h: '組員送給我的卡', k: 'given', cards: 1, max: 8, set: 'strengths', hint: '卡名後可以寫是誰送的。', star: 1},
    {h: '我的優勢輪廓圖（周哈里窗）', k: 'johari', type: 'johari'},
    {h: '我做得好、但做完很累的事（耗盡型技能）', k: 'drain', type: 'ta'},
    {h: '今日帶走的一句', k: 'take', type: 'ta'}
  ]},
  {id: '06', t: '整合與召命', s: '我的 CBDC', c: '#c15a7c', f: [
    {h: 'CBD', k: 'cbd', type: 'cbd'},
    {h: '尋召命 Calling：聯想圖卡', k: 'calling', cards: 1, max: 3, set: 'association', note: '我感到被呼召的方向'},
    {h: '展關懷 Caring：我想關心和貢獻的群體或人', k: 'field', type: 'ta'},
    {h: '下個月的 3 項行動', k: 'acts', cards: 1, max: 3, nophoto: 1},
    {h: '六次聚會後，我想對起點的自己說', k: 'back', type: 'ta', hint: '先看看單元 01 寫的 E（期待終點）。'}
  ]}
];

const SET_FILES = {
  association: 'cards/association.json',
  values: 'cards/values.json',
  careers: 'cards/careers.json',
  disc: 'cards/disc.json',
  strengths: 'cards/strengths.json'
};
const SET_LABEL = {
  association: '聯想圖卡',
  values: '價值卡',
  careers: '職業卡',
  disc: '風格卡',
  strengths: '優勢卡'
};
const PRIVACY = '尋卓護照不會收集任何資料。你寫下的內容和相片只留在這部手機，不會上傳，也沒有分析或第三方連線。每完成一個單元，請按右上角「備份」匯出一份。若使用 iPhone，請把本程式加到主畫面；Safari 若連續約 7 日沒有開啟這個網站，可能會清除網站資料。';

const K = 'xunzhuo-passport-v1';
const BASE = new URL('./', document.baseURI);
let S = {};
try { S = JSON.parse(localStorage.getItem(K) || '{}'); } catch (e) { S = {}; }
S.u = S.u || {};
S.done = S.done || {};
S.review = S.review || {};
let cur = '00';
const LIB = {};
let libError = null;
let db = null;

const appEl = document.getElementById('app');
const navEl = document.getElementById('nav');
const ttlEl = document.getElementById('ttl');
const pv = document.getElementById('pv');
const pvimg = document.getElementById('pvimg');
const cam = document.getElementById('cam');
const menuBtn = document.getElementById('menuBtn');

function save() {
  try { localStorage.setItem(K, JSON.stringify(S)); }
  catch (e) { alert('這部手機的儲存空間不足，請先按「備份」匯出，再刪除一些相片。'); }
}
const uv = (u, k) => (S.u[u] = S.u[u] || {}, S.u[u][k]);
const setv = (u, k, v) => { S.u[u] = S.u[u] || {}; S.u[u][k] = v; save(); };
const esc = s => String(s ?? '').replace(/[&<>"]/g, m => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[m]));

function assetUrl(path) {
  if (!path || typeof path !== 'string') return '';
  if (path.startsWith('/') || path.startsWith('//') || /^[a-z]+:/i.test(path)) return '';
  try {
    const u = new URL(path, BASE);
    if (u.origin !== location.origin) return '';
    return u.href;
  } catch (e) { return ''; }
}

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
let camCb = null;
cam.onchange = async () => {
  const f = cam.files && cam.files[0];
  cam.value = '';
  if (!f || !camCb) return;
  try {
    const b = await shrink(f);
    const id = 'p' + Date.now() + Math.random().toString(36).slice(2, 6);
    await putP(id, b);
    camCb(id);
  } catch (e) { alert('這張相片讀不到，請再試一次，或改為手動輸入卡名。'); }
};

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

function validCard(c) {
  return !!(c && typeof c.id === 'string' && c.id && typeof c.name === 'string' && c.name
    && typeof c.set === 'string' && c.set && typeof c.image === 'string' && c.image
    && (typeof c.number === 'number' || typeof c.number === 'string') && String(c.number) !== '');
}
async function loadLib() {
  if (location.protocol === 'file:') throw new Error('file');
  await Promise.all(Object.entries(SET_FILES).map(async ([id, file]) => {
    const res = await fetch(assetUrl(file));
    if (!res.ok) throw new Error(file);
    const data = await res.json();
    if (!Array.isArray(data)) throw new Error(file);
    LIB[id] = data.filter(validCard);
  }));
}

function navR() {
  navEl.innerHTML = U.map(u => `<button type="button" class="${u.id === cur ? 'on' : ''}" data-u="${u.id}"><b>${u.id === '00' ? '⌂' : u.id}</b>${u.id === '00' ? '首頁' : esc(u.t.slice(0, 4))}</button>`).join('');
  navEl.querySelectorAll('button').forEach(b => b.onclick = () => go(b.dataset.u));
}
function go(id) {
  closePicker();
  cur = id;
  const u = U.find(x => x.id === id);
  document.documentElement.style.setProperty('--c', u.c);
  ttlEl.textContent = id === '00' ? '尋卓護照' : `${id} ${u.t}`;
  navR();
  if (id === '00') home();
  else unit(u);
  scrollTo(0, 0);
}

function home() {
  appEl.innerHTML = `<div class="card"><h2>我的護照</h2>
    <label for="nm">姓名</label><input type="text" id="nm" value="${esc(S.name)}" placeholder="你的名字">
    <label for="gp">小組</label><input type="text" id="gp" value="${esc(S.group)}"></div>
  <div class="card"><h2>六個單元</h2><p class="hint">完成一個單元，就會蓋上印章。</p><div class="stamps">
    ${U.slice(1).map(u => `<div class="stamp ${S.done[u.id] ? 'done' : ''}" style="--uc:${u.c}" data-u="${u.id}"><b>${u.id}</b>${esc(u.t)}</div>`).join('')}
  </div></div>
  <div class="card"><h2>行動回顧</h2><p class="hint">每次聚會開始時，每人用一句話回顧上次的小行動。</p>
    ${['02', '03', '04', '05', '06'].map(n => `<label>第 ${n} 次聚會：上次的小行動做了沒有？</label><div class="chips" data-r="${n}">${['做了', '部分', '未做'].map(o => `<button type="button" class="chip ${S.review[n]?.s === o ? 'on' : ''}" style="font-size:15px">${o}</button>`).join('')}</div>
    <input type="text" data-rt="${n}" placeholder="一句發現" value="${esc(S.review[n]?.t)}" style="margin-top:6px">`).join('')}
  </div>
  <div class="card"><h2>私隱</h2><p class="privacy">${esc(PRIVACY)}</p></div>`;
  document.getElementById('nm').oninput = e => { S.name = e.target.value; save(); };
  document.getElementById('gp').oninput = e => { S.group = e.target.value; save(); };
  appEl.querySelectorAll('.stamp').forEach(s => s.onclick = () => go(s.dataset.u));
  appEl.querySelectorAll('[data-r]').forEach(g => g.querySelectorAll('button').forEach(b => b.onclick = () => {
    const n = g.dataset.r;
    S.review[n] = {...S.review[n], s: b.textContent};
    save();
    home();
  }));
  appEl.querySelectorAll('[data-rt]').forEach(i => i.oninput = () => {
    const n = i.dataset.rt;
    S.review[n] = {...S.review[n], t: i.value};
    save();
  });
}

function normName(n) {
  return String(n || '').replace(/[（(].*?[）)]/g, '').replace(/\s*\d+\s*萬\s*$/, '').trim();
}
function sameCard(a, b) {
  if (a.cardId && b.cardId) return a.cardId === b.cardId;
  const na = normName(a.n), nb = normName(b.n);
  return !!na && na === nb;
}
function labelOf(x) { return normName(x.n) || String(x.n || '').trim(); }
function listOf(u, k) {
  const v = uv(u, k);
  return Array.isArray(v) ? v : [];
}
function filled(it) { return !!(it && ((it.n && String(it.n).trim()) || it.cardId || it.p)); }
const starred = (u, k) => listOf(u, k).filter(x => x && x.st && x.n);

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
      d.className = 'item';
      const photoUrl = it.p ? await purl(it.p) : null;
      if (my !== token) return;
      const libUrl = it.img ? assetUrl(it.img) : '';
      const thumbUrl = photoUrl || libUrl;
      if (!f.nophoto && thumbUrl) {
        const img = document.createElement('img');
        img.className = 'thumb';
        img.src = thumbUrl;
        img.alt = it.n || '圖卡';
        img.onclick = () => showPhoto(thumbUrl);
        d.appendChild(img);
      }
      const inp = document.createElement('input');
      inp.type = 'text';
      inp.className = 'card-input';
      inp.placeholder = f.nophoto ? '行動' : '卡名';
      inp.value = it.n || '';
      inp.oninput = () => { it.n = inp.value; setv(u.id, f.k, list); maybeRefreshCbd(); };
      d.appendChild(inp);
      if (!f.nophoto) {
        const camBtn = document.createElement('button');
        camBtn.type = 'button';
        camBtn.className = 'ibtn cam-btn';
        camBtn.title = '拍下圖卡';
        camBtn.textContent = '📷';
        camBtn.onclick = () => {
          if (!db) { alert('這部瀏覽器未能儲存相片，請改為手動輸入卡名。'); return; }
          camCb = id => { it.p = id; setv(u.id, f.k, list); draw(); };
          cam.click();
        };
        d.appendChild(camBtn);
      }
      if (f.star) {
        const star = document.createElement('button');
        star.type = 'button';
        star.className = 'ibtn star-btn' + (it.st ? ' on' : '');
        star.title = '帶去單元 06';
        star.textContent = '☆';
        star.setAttribute('aria-pressed', it.st ? 'true' : 'false');
        star.onclick = () => { it.st = !it.st; setv(u.id, f.k, list); draw(); maybeRefreshCbd(); };
        d.appendChild(star);
      }
      const del = document.createElement('button');
      del.type = 'button';
      del.className = 'ibtn del-btn';
      del.title = '刪除';
      del.textContent = '✕';
      del.onclick = () => {
        if (it.p && !confirm('刪除這張卡和相片？')) return;
        list.splice(i, 1);
        if (!list.length) list.push({n: ''});
        setv(u.id, f.k, list);
        draw();
        maybeRefreshCbd();
      };
      d.appendChild(del);
      box.appendChild(d);
    }
    if (my !== token) return;
    const actions = document.createElement('div');
    actions.className = 'actions';
    const used = list.filter(filled).length;
    if (f.set && used < f.max) {
      const pick = document.createElement('button');
      pick.type = 'button';
      pick.className = 'btn pick-open';
      pick.textContent = '從圖卡庫選擇';
      pick.onclick = () => openPicker(f.set, f.max - used, new Set(list.map(x => x.cardId).filter(Boolean)), chosen => {
        chosen.forEach(card => {
          const item = {n: card.name, cardId: card.id, img: card.image, num: card.number, set: card.set, st: false};
          const idx = list.findIndex(x => !filled(x));
          if (idx >= 0) list[idx] = item;
          else if (list.length < f.max) list.push(item);
        });
        if (!list.length) list.push({n: ''});
        setv(u.id, f.k, list);
        draw();
        maybeRefreshCbd();
      });
      actions.appendChild(pick);
    }
    if (list.length < f.max) {
      const add = document.createElement('button');
      add.type = 'button';
      add.className = 'btn ghost add-row';
      add.textContent = '＋ 加一張';
      add.onclick = () => { list.push({n: ''}); draw(); };
      actions.appendChild(add);
    }
    if (actions.childNodes.length) box.appendChild(actions);
    if (f.note) {
      const l = document.createElement('label');
      l.textContent = f.note;
      const t = document.createElement('textarea');
      t.value = uv(u.id, f.k + '_note') || '';
      t.oninput = () => { setv(u.id, f.k + '_note', t.value); maybeRefreshCbd(); };
      box.append(l, t);
    }
  };
  draw();
}

function fmtNum(n) {
  const s = String(n);
  return /^\d+$/.test(s) ? s.padStart(2, '0') : s;
}
function cardMatches(card, q) {
  const s = q.trim().toLowerCase();
  if (!s) return true;
  const num = String(card.number);
  const pad2 = num.padStart(2, '0');
  const pad3 = num.padStart(3, '0');
  if (card.name.toLowerCase().includes(s)) return true;
  return num === s || pad2 === s || pad3 === s || num.includes(s) || pad2.includes(s) || pad3.includes(s);
}

let pickerKey = null;
function closePicker() {
  document.body.classList.remove('noscroll');
  const el = document.getElementById('picker');
  if (el) el.remove();
  if (pickerKey) {
    document.removeEventListener('keydown', pickerKey);
    pickerKey = null;
  }
}
function openPicker(setId, remain, taken, onDone) {
  closePicker();
  if (remain <= 0) { alert('已達上限，請先刪除一張再選。'); return; }
  const cards = LIB[setId] || [];
  const selected = new Set();
  const root = document.createElement('div');
  root.id = 'picker';
  root.className = 'picker';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  const label = SET_LABEL[setId] || setId;
  root.innerHTML = `<div class="picker-top"><h2>選擇${esc(label)}</h2><p class="hint" id="pickHint"></p></div>
    <div class="psearch" style="padding:0 12px"><input type="search" id="pickSearch" placeholder="搜尋卡號或卡名" aria-label="搜尋卡號或卡名" enterkeyhint="search"></div>
    <p class="limit-note hint" id="pickLimit" hidden>已選滿，可先取消再改選。</p>
    <div class="pick-scroll"><div class="pgrid" id="pickGrid"></div></div>
    <div class="pick-bar"><button type="button" class="btn ghost" id="pickCancel">取消</button><button type="button" class="btn" id="pickOk" disabled>加入所選</button></div>`;
  document.body.appendChild(root);
  document.body.classList.add('noscroll');
  const search = root.querySelector('#pickSearch');
  const grid = root.querySelector('#pickGrid');
  const hint = root.querySelector('#pickHint');
  const limitNote = root.querySelector('#pickLimit');
  const ok = root.querySelector('#pickOk');
  function updateOk() {
    ok.disabled = selected.size === 0;
    ok.textContent = selected.size ? `加入所選（${selected.size}）` : '加入所選';
    limitNote.hidden = selected.size < remain;
  }
  function renderGrid() {
    const q = search.value;
    const matched = cards.filter(c => cardMatches(c, q));
    if (libError) {
      hint.textContent = location.protocol === 'file:'
        ? '請用本機伺服器或 GitHub Pages 開啟，不要直接打開檔案。仍可手動輸入卡名。'
        : '圖卡庫暫時讀不到，請改用手動輸入。';
      grid.innerHTML = '<p class="empty">圖卡庫暫時讀不到。可關閉這個畫面，改用手動輸入。</p>';
      return;
    }
    hint.textContent = `共 ${cards.length} 張。可搜尋卡號或卡名，可多選，尚可加入 ${remain} 張。`;
    if (!matched.length) {
      grid.innerHTML = '<p class="empty">找不到符合的圖卡。可改用手動輸入。</p>';
      return;
    }
    grid.innerHTML = matched.map(c => {
      const on = selected.has(c.id);
      const dis = taken.has(c.id);
      const src = assetUrl(c.image);
      const badge = dis ? '<span class="badge">已加入</span>' : on ? '<span class="badge">已選</span>' : '';
      return `<button type="button" class="pcard${on ? ' on' : ''}" data-id="${esc(c.id)}" ${dis ? 'disabled' : ''}>
        ${src ? `<img src="${esc(src)}" alt="" loading="lazy">` : ''}
        <span class="num">${esc(fmtNum(c.number))}</span>
        <span class="nm">${esc(c.name)}</span>${badge}</button>`;
    }).join('');
  }
  grid.onclick = e => {
    const btn = e.target.closest('.pcard');
    if (!btn || btn.disabled) return;
    const id = btn.dataset.id;
    if (selected.has(id)) selected.delete(id);
    else if (selected.size >= remain) { limitNote.hidden = false; return; }
    else selected.add(id);
    updateOk();
    const top = grid.parentElement.scrollTop;
    renderGrid();
    grid.parentElement.scrollTop = top;
  };
  search.oninput = () => { renderGrid(); grid.parentElement.scrollTop = 0; };
  root.querySelector('#pickCancel').onclick = closePicker;
  ok.onclick = () => {
    const chosen = cards.filter(c => selected.has(c.id));
    closePicker();
    onDone(chosen);
  };
  pickerKey = e => { if (e.key === 'Escape') closePicker(); };
  document.addEventListener('keydown', pickerKey);
  renderGrid();
  updateOk();
  search.focus();
}

let cbdToken = 0;
function maybeRefreshCbd() { if (document.getElementById('cbd')) renderCbd(); }
async function renderCbd() {
  const el = document.getElementById('cbd');
  if (!el) return;
  const my = ++cbdToken;
  const bv = starred('02', 'bid');
  const bm = starred('04', 'nine');
  const dj = starred('03', 'jobs');
  const ds = [...starred('05', 'mine'), ...starred('05', 'given')];
  const disc = (Array.isArray(uv('04', 'disc')) ? uv('04', 'disc') : []).join('');
  const code = uv('03', 'code') || '';
  const calling = listOf('06', 'calling').filter(x => x.n);
  const field = uv('06', 'field') || '';
  const note = uv('06', 'calling_note') || '';
  const html = `
    <div class="zone" data-zone="being" style="border-color:#d9a441;background:#fdf8ee"><h3>活真我 Being</h3><div class="src">價值（02）</div><div class="pills">${await pills(bv)}</div><div class="src">This is Me（04）${disc ? '・' + esc(disc) : ''}</div><div class="pills">${await pills(bm)}</div></div>
    <div class="zone" data-zone="doing" style="border-color:#4f94b8;background:#f1f7fb"><h3>行使命 Doing</h3><div class="src">職業（03）${code ? '・' + esc(code) : ''}</div><div class="pills">${await pills(dj)}</div><div class="src">優勢（05）</div><div class="pills">${await pills(ds)}</div></div>
    <div class="zone" data-zone="calling" style="border-color:#c15a7c;background:#fbf1f5"><h3>尋召命 Calling</h3><div class="src">在下面加入 1–3 張聯想圖卡</div><div class="pills">${await pills(calling, '尚未選擇聯想圖卡')}</div>${note ? `<div class="src" style="color:var(--ink)">${esc(note)}</div>` : ''}</div>
    <div class="zone" data-zone="caring" style="border-color:#6aa56b;background:#f2f8f2"><h3>展關懷 Caring</h3>${field ? `<div class="care-text" style="font-size:14px">${esc(field)}</div>` : '<div class="src">在下面寫下想關心和貢獻的群體或人</div>'}</div>`;
  if (my !== cbdToken || !document.body.contains(el)) return;
  el.innerHTML = html;
  bindPillPhotos(el);
}

async function pills(items, empty) {
  if (!items.length) return `<span class="empty">${esc(empty || '未有 ☆ 的卡')}</span>`;
  let h = '';
  for (const it of items) {
    const src = it.img ? assetUrl(it.img) : await purl(it.p);
    const nm = labelOf(it);
    h += `<span class="pill ${src ? '' : 'noimg'}">${src ? `<img src="${esc(src)}" alt="">` : ''}${esc(nm)}</span>`;
  }
  return h;
}
function bindPillPhotos(root) {
  root.querySelectorAll('.pill img').forEach(img => { img.onclick = () => showPhoto(img.src); });
}

function unit(u) {
  appEl.innerHTML = `<div class="card" style="border-top:5px solid ${u.c}"><div style="font-size:22px;font-weight:700;color:${u.c}">${u.id} ${esc(u.t)}</div><div class="hint" style="margin:0">${esc(u.s)}</div></div>`;
  u.f.forEach(f => {
    const c = document.createElement('div');
    c.className = 'card';
    c.innerHTML = `<h2>${esc(f.h)}</h2>${f.hint ? `<p class="hint">${esc(f.hint)}</p>` : ''}`;
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
      box.innerHTML = `<div class="chips">${f.opts.map((o, i) => `<button type="button" class="chip ${v.includes(o) ? 'on' : ''}" data-o="${o}">${o}${f.names ? `<div style="font-size:12px;font-weight:400">${esc(f.names[i])}</div>` : ''}</button>`).join('')}</div><p class="hint" style="margin-top:6px">可選多於一個。</p>`;
      box.querySelectorAll('button').forEach(b => b.onclick = () => {
        const o = b.dataset.o;
        const i = v.indexOf(o);
        if (i < 0) v.push(o); else v.splice(i, 1);
        setv(u.id, f.k, v);
        b.classList.toggle('on');
      });
    } else if (f.type === 'johari') {
      const q = [['open', '公開區', '我選了，也有人送給我'], ['blind', '盲點區', '我沒選，但有人送給我'], ['hidden', '隱藏區', '我選了，但沒有人送'], ['unknown', '未知區・待發展', '還未看見、我想發展的']];
      const v = uv(u.id, f.k) || {};
      box.innerHTML = `<div class="johari">${q.map(x => `<div class="q"><b>${x[1]}</b><small>${x[2]}</small><textarea data-q="${x[0]}">${esc(v[x[0]])}</textarea></div>`).join('')}</div>
        <button type="button" class="btn ghost johari-fill" style="margin-top:8px">按上面的卡自動分區</button>`;
      box.querySelectorAll('textarea').forEach(t => t.oninput = () => { v[t.dataset.q] = t.value; setv(u.id, f.k, v); });
      box.querySelector('.johari-fill').onclick = () => {
        const mine = listOf('05', 'mine').filter(x => x.n && String(x.n).trim());
        const given = listOf('05', 'given').filter(x => x.n && String(x.n).trim());
        v.open = mine.filter(x => given.some(g => sameCard(x, g))).map(labelOf).join('、');
        v.hidden = mine.filter(x => !given.some(g => sameCard(x, g))).map(labelOf).join('、');
        const blind = [];
        given.forEach(g => {
          if (!mine.some(m => sameCard(m, g))) {
            const lab = labelOf(g);
            if (lab && !blind.includes(lab)) blind.push(lab);
          }
        });
        v.blind = blind.join('、');
        setv(u.id, f.k, v);
        unit(u);
      };
    } else if (f.type === 'cbd') {
      c.querySelector('h2').textContent = '我的 CBDC';
      box.innerHTML = '<p class="hint">自動帶入單元 02–05 按了 ☆ 的卡。</p><div class="cbd" id="cbd"></div>';
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
        save();
        go('00');
      } catch (e) { alert('匯入失敗，請確認檔案是尋卓護照匯出的備份。'); }
    };
    input.click();
  }
  if (c === '3') print();
};

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(new URL('sw.js', BASE).href, {scope: new URL('./', BASE).href, updateViaCache: 'none'}).catch(() => {});
  });
}

Promise.all([
  dbp,
  loadLib().catch(err => { libError = err; })
]).then(() => go('00'));

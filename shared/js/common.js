// Shared helpers for all students' lesson sites: storage, DOM, Chinese text, voice, speech check, reports.

// Per-student settings come from <student>/config.js (loaded first).
const APP = window.STUDENT_CONFIG;

// ---------- storage (local to this browser only) ----------
const Store = {
  get(k, d) {
    try { const v = localStorage.getItem(APP.key + '.' + k); return v == null ? d : JSON.parse(v); }
    catch (e) { return d; }
  },
  set(k, v) { try { localStorage.setItem(APP.key + '.' + k, JSON.stringify(v)); } catch (e) {} },
};

// ---------- DOM ----------
function h(tag, attrs, ...kids) {
  const el = document.createElement(tag);
  if (attrs) for (const [k, v] of Object.entries(attrs)) {
    if (v === false || v == null) continue;
    if (k === 'class') el.className = v;
    else if (k === 'html') el.innerHTML = v;
    else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
    else el.setAttribute(k, v === true ? '' : v);
  }
  for (const c of kids.flat()) {
    if (c == null || c === false) continue;
    el.append(c.nodeType ? c : document.createTextNode(c));
  }
  return el;
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

const wait = ms => new Promise(r => setTimeout(r, ms));

// ---------- Chinese text ----------
// Format: tokens separated by spaces. "汉字|pinyin" or bare punctuation. Use _ for a space inside pinyin.
// e.g. "我|wǒ 叫|jiào 海马|Hǎimǎ 。"
function parseZh(str) {
  return str.trim().split(/\s+/).map(t => {
    const i = t.indexOf('|');
    return i < 0 ? { h: t, p: '' } : { h: t.slice(0, i), p: t.slice(i + 1).replace(/_/g, ' ') };
  });
}
const zhText = str => parseZh(str).map(t => t.h).join('');
const zhPinyin = str => parseZh(str).filter(t => t.p).map(t => t.p).join(' ');
const cjkOnly = s => String(s).replace(/[^一-鿿]/g, '');

function renderZh(str, { speak = true, cls = '' } = {}) {
  const wrap = h('span', { class: 'zh ' + cls });
  for (const t of parseZh(str)) {
    if (!t.p) { wrap.append(h('span', { class: 'punct' }, t.h)); continue; }
    const r = h('ruby', { class: 'tok' + (speak ? ' tappable' : '') }, t.h, h('rt', null, t.p));
    if (speak) r.addEventListener('click', e => {
      e.stopPropagation();
      Voice.speak(t.h);
      r.classList.add('flash'); setTimeout(() => r.classList.remove('flash'), 500);
    });
    wrap.append(r);
  }
  return wrap;
}

// ---------- voice ----------
// Prefers pre-recorded clips (<student>/audio/manifest.js, built by scripts/build_audio.py).
// Falls back to the browser's Chinese voice, skipping robotic ones (eSpeak, macOS novelty voices).
const BAD_VOICES = /eSpeak|Eddy|Flo|Grandma|Grandpa|Reed|Rocko|Sandy|Shelley/i;
const Voice = {
  voice: null,
  player: new Audio(),
  init() {
    if (!('speechSynthesis' in window)) return;
    const pick = () => {
      const zh = speechSynthesis.getVoices().filter(v =>
        (/^zh[-_]CN/i.test(v.lang) || /普通话|Mandarin/i.test(v.name)) && !BAD_VOICES.test(v.name));
      this.voice = zh.find(v => /Google/.test(v.name)) || zh.find(v => /Tingting|Ting-Ting|Lili|Yu-shu/i.test(v.name)) || zh[0] || null;
    };
    pick();
    speechSynthesis.onvoiceschanged = pick;
  },
  name() {
    const clips = Object.keys(window.AUDIO || {}).length;
    return (clips ? `recorded clips (${clips})` : 'no recorded clips') + ' · backup: ' + (this.voice ? this.voice.name : 'none');
  },
  clip(text, who) {
    const A = window.AUDIO || {};
    const f = (who && A[who + ':' + text]) || A[text];
    return f ? 'audio/' + f : null;
  },
  // rate: 0.85 = normal, ~0.6 = slow, ~0.45 = very slow. who: optional voice ('grandpa').
  speak(text, rate = 0.85, who) {
    this.player.pause();
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    const src = this.clip(text, who);
    if (src) {
      return new Promise(res => {
        const p = this.player;
        p.src = src;
        p.playbackRate = rate >= 0.8 ? 1 : rate >= 0.55 ? 0.8 : 0.65;
        p.onended = () => res(true);
        p.onerror = () => this.tts(text, rate).then(res);
        p.play().catch(() => this.tts(text, rate).then(res));
      });
    }
    return this.tts(text, rate);
  },
  tts(text, rate) {
    return new Promise(res => {
      if (!('speechSynthesis' in window)) return res(false);
      speechSynthesis.cancel();
      setTimeout(() => {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'zh-CN';
        if (this.voice) u.voice = this.voice;
        u.rate = rate;
        u.onend = () => res(true);
        u.onerror = () => res(false);
        speechSynthesis.speak(u);
      }, 60);
    });
  },
  stop() { this.player.pause(); if ('speechSynthesis' in window) speechSynthesis.cancel(); },
};
Voice.init();

function speakBtns(text, { slow = true, who, onplay } = {}) {
  const play = rate => { if (onplay) onplay(); return Voice.speak(text, rate, who); };
  return h('span', { class: 'speakbtns' },
    h('button', { class: 'btn icon', title: 'Listen', onclick: () => play(0.85) }, '🔊'),
    slow && h('button', { class: 'btn icon', title: 'Listen slowly', onclick: () => play(0.55) }, '🐢'));
}

// ---------- ear (speech recognition + recording) ----------
const Ear = {
  SR: window.SpeechRecognition || window.webkitSpeechRecognition,
  get supported() { return !!this.SR; },
  current: null,
  stream: null,
  async getStream() {
    if (this.stream) return this.stream;
    try { this.stream = await navigator.mediaDevices.getUserMedia({ audio: true }); } catch (e) { this.stream = null; }
    return this.stream;
  },
  // Resolves {alts: [transcripts], error, audioUrl}
  async listen(maxMs = 10000) {
    if (!this.supported) return { alts: [], error: 'unsupported' };
    const stream = await this.getStream();
    let rec = null, chunks = [];
    if (stream && window.MediaRecorder) {
      try { rec = new MediaRecorder(stream); rec.ondataavailable = e => chunks.push(e.data); rec.start(); } catch (e) { rec = null; }
    }
    return new Promise(resolve => {
      const r = new this.SR();
      r.lang = 'zh-CN'; r.interimResults = false; r.maxAlternatives = 5; r.continuous = false;
      const alts = []; let error = null;
      r.onresult = e => { for (const res of e.results) for (let i = 0; i < res.length; i++) alts.push(res[i].transcript); };
      r.onerror = e => { error = e.error; };
      r.onend = () => {
        clearTimeout(t); this.current = null;
        const done = audioUrl => resolve({ alts, error: alts.length ? null : (error || 'no-speech'), audioUrl });
        if (rec && rec.state !== 'inactive') {
          rec.onstop = () => done(chunks.length ? URL.createObjectURL(new Blob(chunks, { type: rec.mimeType })) : null);
          rec.stop();
        } else done(null);
      };
      const t = setTimeout(() => { try { r.stop(); } catch (e) {} }, maxMs);
      this.current = r;
      try { r.start(); } catch (e) { resolve({ alts: [], error: 'start-failed' }); }
    });
  },
  stop() { if (this.current) try { this.current.stop(); } catch (e) {} },
};

const EAR_ERRORS = {
  'no-speech': "I didn't hear anything. Click the mic, then speak clearly.",
  'not-allowed': 'The microphone is blocked. Click the 🔒 icon left of the web address → Microphone → Allow, then reload.',
  'service-not-allowed': 'The microphone is blocked. Click the 🔒 icon left of the web address → Microphone → Allow, then reload.',
  'audio-capture': 'No microphone found. Check that your mic is on.',
  'network': 'Speech checking needs the internet. Check your Wi-Fi and try again.',
  'unsupported': 'Speech checking only works in Google Chrome.',
};

// ---------- comparing what he said with the target ----------
const EQUIV = { '她': '他', '它': '他', '两': '二', '得': '的', '地': '的', '嘛': '吗', '哪': '那', '妳': '你' };
function num2zh(n) {
  const d = '零一二三四五六七八九';
  if (n < 10) return d[n];
  if (n < 20) return '十' + (n % 10 ? d[n % 10] : '');
  if (n < 100) return d[Math.floor(n / 10)] + '十' + (n % 10 ? d[n % 10] : '');
  return String(n).split('').map(x => d[+x]).join('');
}
function normZh(s) {
  return [...cjkOnly(String(s).replace(/\d+/g, m => num2zh(parseInt(m, 10))))].map(c => EQUIV[c] || c).join('');
}
// Edit distance with a per-target-character "matched" flag.
function align(target, heard) {
  const a = [...target], b = [...heard], n = a.length, m = b.length;
  const D = Array.from({ length: n + 1 }, (_, i) => { const row = Array(m + 1).fill(0); row[0] = i; return row; });
  for (let j = 0; j <= m; j++) D[0][j] = j;
  for (let i = 1; i <= n; i++) for (let j = 1; j <= m; j++)
    D[i][j] = Math.min(D[i - 1][j] + 1, D[i][j - 1] + 1, D[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  const marks = Array(n).fill(false);
  let i = n, j = m;
  while (i > 0 && j > 0) {
    if (a[i - 1] === b[j - 1] && D[i][j] === D[i - 1][j - 1]) { marks[i - 1] = true; i--; j--; }
    else if (D[i][j] === D[i - 1][j - 1] + 1) { i--; j--; }
    else if (D[i][j] === D[i - 1][j] + 1) i--;
    else j--;
  }
  return { dist: D[n][m], marks };
}
function gradeSpeech(targetStr, alts) {
  const tgt = normZh(targetStr);
  let best = null;
  for (const alt of alts) {
    const hd = normZh(alt), al = align(tgt, hd);
    const sim = tgt.length ? 1 - al.dist / Math.max(tgt.length, hd.length || 1) : 0;
    if (!best || sim > best.sim) best = { sim, heard: alt, marks: al.marks, dist: al.dist };
  }
  if (!best) best = { sim: 0, heard: '', marks: [...tgt].map(() => false), dist: tgt.length };
  // Short sentences must be exact; longer ones forgive about 1 slip in 8 (recognizer noise).
  const allowed = tgt.length <= 5 ? 0 : Math.max(1, Math.floor(tgt.length / 8));
  best.pass = best.dist <= allowed;
  return best;
}
function renderMarks(targetStr, marks) {
  const chars = [...cjkOnly(targetStr)];
  return h('span', { class: 'marks' }, chars.map((c, i) => h('span', { class: marks[i] ? 'ok' : 'bad' }, c)));
}

// ---------- reports ----------
async function sendForm(text) {
  try {
    const body = new URLSearchParams();
    body.append(APP.FORM_FIELD, text);
    await fetch(APP.FORM_URL, { method: 'POST', mode: 'no-cors', body });
    return true;
  } catch (e) { return false; }
}
const Outbox = {
  async add(text) { const q = Store.get('outbox', []); q.push(text); Store.set('outbox', q); return this.flush(); },
  async flush() {
    const q = Store.get('outbox', []), left = [];
    for (const t of q) if (!(await sendForm(t))) left.push(t);
    Store.set('outbox', left);
    return left.length === 0;
  },
  count() { return Store.get('outbox', []).length; },
};

function emailMom(subject, body) {
  let to = Store.get('momEmail', '');
  if (!to) {
    to = (prompt("Type Mom's email address:") || '').trim();
    if (!to) return;
    Store.set('momEmail', to);
  }
  const url = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(to) +
    '&su=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body.slice(0, 6000));
  window.open(url, '_blank');
}

// ---------- farm & progress ----------
const Farm = {
  items() { return Store.get('farm', []); },
  add(list) { const f = this.items(); f.push(...list); Store.set('farm', f); },
};
function todayStr(d = new Date()) {
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function streak() {
  const days = new Set(Object.values(Store.get('results', {})).map(r => r.day));
  let n = 0; const d = new Date();
  if (!days.has(todayStr(d))) d.setDate(d.getDate() - 1);
  // Weekends don't break the streak.
  while (true) {
    const dow = d.getDay();
    if (days.has(todayStr(d))) n++;
    else if (dow !== 0 && dow !== 6) break;
    d.setDate(d.getDate() - 1);
    if (n > 1000) break;
  }
  return n;
}

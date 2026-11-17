// Lesson runner. A lesson file sets window.LESSON = {id, week, day, title, steps:[...], reward:[...]}.
// Each step type renders into #stage and resolves with a report section {name, score:[right,total], lines:[]} or null.

const stage = document.getElementById('stage');
let pinyinOn = Store.get('pinyinOn', true);

function setPinyin(on) {
  pinyinOn = on; Store.set('pinyinOn', on);
  document.body.classList.toggle('hide-py', !on);
  const b = document.getElementById('pyToggle');
  if (b) b.textContent = on ? '拼音 ON' : '拼音 OFF';
}

function card(title, intro) {
  stage.innerHTML = '';
  const c = h('section', { class: 'card' }, h('h2', null, title), intro && h('p', { class: 'intro', html: intro }));
  stage.append(c);
  return c;
}

function counter(i, n) { return h('div', { class: 'counter' }, `${i + 1} / ${n}`); }

function nextBtn(parent, label = 'Next ▶') {
  return new Promise(res => {
    const b = h('button', { class: 'btn primary big', onclick: () => res() }, label);
    parent.append(h('div', { class: 'actions' }, b));
    b.focus();
  });
}

// Multiple choice. Resolves {correct, idk, chosen}.
function askChoice(parent, labels, correctIdx, { idk = true, grid = false, onReveal } = {}) {
  return new Promise(res => {
    const box = h('div', { class: 'choices' + (grid ? ' grid' : '') });
    const btns = labels.map((l, i) => h('button', { class: 'btn choice', onclick: () => pick(i) }, l));
    box.append(...btns);
    const fb = h('div', { class: 'feedback' });
    parent.append(box);
    let idkBtn = null;
    if (idk) { idkBtn = h('button', { class: 'btn ghost', onclick: () => pick(-1) }, "🤷 I don't know"); parent.append(h('div', { class: 'actions left' }, idkBtn)); }
    parent.append(fb);
    function pick(i) {
      btns.forEach(b => b.disabled = true); if (idkBtn) idkBtn.disabled = true;
      btns[correctIdx].classList.add('right');
      if (i >= 0 && i !== correctIdx) btns[i].classList.add('wrong');
      const correct = i === correctIdx;
      fb.append(h('div', { class: correct ? 'good' : 'oops' }, correct ? '✅ Correct!' : (i < 0 ? 'No problem — here it is:' : '❌ Not quite. Here it is:')));
      if (onReveal) fb.append(onReveal());
      const out = { correct, idk: i < 0, chosen: i };
      // Answer stays on screen until he clicks Next (or presses Enter), so he can study it.
      nextBtn(fb).then(() => res(out));
    }
  });
}

// Mic button + result area. Resolves with grade object when he has a result (or skip).
function micButton(parent, { label = '🎤 Click and speak', onResult }) {
  const status = h('div', { class: 'micstatus' });
  const btn = h('button', { class: 'btn mic big' }, label);
  let listening = false;
  btn.onclick = async () => {
    if (listening) { Ear.stop(); return; }
    listening = true; btn.classList.add('on'); btn.textContent = '⏺ Listening… (click when done)';
    status.textContent = '';
    Voice.stop();
    const r = await Ear.listen();
    listening = false; btn.classList.remove('on'); btn.textContent = '🎤 Try again';
    onResult(r, status);
  };
  parent.append(h('div', { class: 'microw' }, btn), status);
  return btn;
}

function playbackBtn(url) {
  if (!url) return null;
  const a = new Audio(url);
  return h('button', { class: 'btn small', onclick: () => a.play() }, '🎧 Hear myself');
}

const STEPS = {};

// ---------- story / intro ----------
STEPS.story = async (st) => {
  const c = card(st.title, st.intro);
  if (st.art) c.append(h('div', { class: 'art' }, st.art));
  for (const line of st.lines || []) {
    c.append(h('div', { class: 'line' }, speakBtns(zhText(line.zh), { who: line.v }), renderZh(line.zh), h('div', { class: 'en' }, line.en)));
  }
  if (st.outro) c.append(h('p', { class: 'intro', html: st.outro }));
  await nextBtn(c, st.next || "Let's go ▶");
  return null;
};

// ---------- read after me: listen, then read each line aloud N times (recorded + checked) ----------
STEPS['read-after'] = async (st) => {
  const need = st.times || 2;
  const c = card(st.title, (st.intro ? st.intro + '<br>' : '') +
    `<b>For each line:</b> 1) click 🔊 and listen &nbsp; 2) click 🎤 and read it aloud. ` +
    `Read every line <b>${need} times</b> to unlock Next. Red characters were not clear — try again.`);
  if (st.art) c.append(h('div', { class: 'art' }, st.art));
  const rows = [];
  let busy = false;
  const next = h('button', { class: 'btn primary big', disabled: true }, 'Next ▶');
  const nextNote = h('div', { class: 'muted' });
  const refresh = () => {
    const left = rows.filter(r => r.reads < need).length;
    next.disabled = left > 0;
    nextNote.textContent = left ? `${left} line${left > 1 ? 's' : ''} left to read.` : '';
  };
  for (const line of st.lines) {
    const text = zhText(line.zh);
    const row = { text, reads: 0, tries: 0, log: [], struggled: false };
    rows.push(row);
    const badge = h('span', { class: 'readcount' }, `Read 0/${need}`);
    const mic = h('button', { class: 'btn mic', disabled: true, title: 'Listen first' }, '🎤 Read');
    const status = h('div', { class: 'micstatus' });
    const speak = speakBtns(text, { who: line.v, onplay: () => { mic.disabled = false; mic.title = ''; } });
    if (!Ear.supported) { mic.hidden = true; status.append(h('div', { class: 'tip' }, EAR_ERRORS.unsupported)); row.reads = need; }
    mic.onclick = async () => {
      if (busy) { Ear.stop(); return; }
      busy = true; mic.classList.add('on'); mic.textContent = '⏺ Listening… (click when done)';
      Voice.stop();
      const r = await Ear.listen();
      busy = false; mic.classList.remove('on'); mic.textContent = '🎤 Read';
      status.innerHTML = '';
      if (r.error) { status.append(h('div', { class: 'oops' }, EAR_ERRORS[r.error] || ('Problem: ' + r.error))); return; }
      row.tries++;
      const g = gradeSpeech(line.zh, r.alts);
      // A real attempt counts; after 4 tries we let him move on but note it.
      const counts = g.pass || g.sim >= 0.6 || row.tries >= 4;
      if (counts && row.reads < need) row.reads++;
      if (!g.pass && g.sim < 0.6 && row.tries >= 4) row.struggled = true;
      row.log.push(`"${g.heard}"${g.pass ? ' ✅' : ` 🟠${Math.round(g.sim * 100)}%`}`);
      status.append(h('div', { class: 'heardrow' }, renderMarks(line.zh, g.marks), ' ', playbackBtn(r.audioUrl)),
        h('div', { class: g.pass ? 'good' : 'oops' }, g.pass ? '✅ Clear!' : counts ? '🟠 Counted — but listen again and fix the red ones.' : '❌ Not clear enough — listen and try again.'));
      badge.textContent = row.reads >= need ? `✅ ${need}/${need}` : `Read ${row.reads}/${need}`;
      badge.classList.toggle('done', row.reads >= need);
      refresh();
    };
    c.append(h('div', { class: 'line readrow' }, speak, renderZh(line.zh), h('div', { class: 'en' }, line.en),
      h('div', { class: 'rowctl' }, mic, badge), status));
  }
  if (st.outro) c.append(h('p', { class: 'intro', html: st.outro }));
  c.append(h('div', { class: 'actions' }, nextNote, next));
  refresh();
  await new Promise(res => next.onclick = res);
  const clear = rows.filter(r => r.log.some(x => x.includes('✅'))).length;
  return {
    name: st.title, score: [clear, rows.length],
    lines: ['(score = lines read clearly at least once)', ...rows.map(r => `${r.text} → ${r.log.join(' / ') || '(no mic)'}${r.struggled ? ' ⚠️ struggled' : ''}`)],
  };
};

// ---------- reading check: Chinese only, no pinyin, no sound until answered ----------
STEPS['read-check'] = async (st) => {
  let right = 0; const lines = [];
  for (let i = 0; i < st.items.length; i++) {
    const it = st.items[i], text = zhText(it.zh);
    const c = card(st.title, st.intro);
    c.append(counter(i, st.items.length), h('div', { class: 'line big nopy' }, renderZh(it.zh, { speak: false })));
    const opts = shuffle(it.opts.map((o, k) => ({ o, k })));
    const r = await askChoice(c, opts.map(x => x.o), opts.findIndex(x => x.k === 0), {
      onReveal: () => { Voice.speak(text); return h('div', { class: 'reveal' }, renderZh(it.zh), h('div', { class: 'en' }, it.opts[0])); },
    });
    if (r.correct) right++;
    lines.push(`${r.correct ? '✅' : r.idk ? '🤷' : '❌'} ${text}${r.correct || r.idk ? '' : ' → picked "' + opts[r.chosen].o + '"'}`);
  }
  return { name: st.title, score: [right, st.items.length], lines };
};

// ---------- setup: Mom's email (saved only on this computer) ----------
STEPS['email-setup'] = async (st) => {
  const c = card(st.title, "After each lesson, your farm report goes to Mom automatically. There's also a backup <b>Email Mom</b> button. Type Mom's email address once — it's saved only on this computer.");
  const inp = h('input', { type: 'email', class: 'text', placeholder: "Mom's email", value: Store.get('momEmail', '') });
  const msg = h('div', { class: 'feedback' });
  c.append(inp, msg);
  await new Promise(res => {
    const save = () => {
      const v = inp.value.trim();
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) { msg.innerHTML = '<div class="oops">That doesn\'t look like an email address. Ask Mom if you\'re not sure.</div>'; return; }
      Store.set('momEmail', v); res();
    };
    c.append(h('div', { class: 'actions' },
      h('button', { class: 'btn ghost', onclick: res }, 'Skip for now'),
      h('button', { class: 'btn primary big', onclick: save }, 'Save ▶')));
  });
  return { name: 'Setup: Mom email', lines: [Store.get('momEmail', '') ? 'Saved' : 'Skipped'] };
};

// ---------- setup: sound ----------
STEPS['sound-test'] = async (st) => {
  const c = card(st.title, 'Turn your volume up. Click the speaker to hear Chinese.');
  c.append(h('div', { class: 'line' }, speakBtns('你好，海马！'), renderZh('你好|nǐ_hǎo ， 海马|Hǎimǎ ！')));
  const ans = await new Promise(res => {
    c.append(h('p', null, 'Did you hear a voice say “nǐ hǎo, Hǎimǎ”?'),
      h('div', { class: 'actions' },
        h('button', { class: 'btn', onclick: () => res('no') }, "❌ No, I didn't"),
        h('button', { class: 'btn primary big', onclick: () => res('yes') }, '✅ Yes, I heard it')));
  });
  if (ans === 'no') {
    c.append(h('div', { class: 'tip', html: 'Try this: (1) Turn volume up. (2) Make sure you are using <b>Google Chrome</b> and you are online. (3) Close Chrome and open it again. If it still does not work, tell Mom — but keep going for now.' }));
    await nextBtn(c, 'Continue anyway ▶');
  }
  return { name: 'Setup: sound', lines: [`Heard voice: ${ans} · voice: ${Voice.name()}`] };
};

// ---------- setup: microphone ----------
STEPS['mic-test'] = async (st) => {
  const c = card(st.title, 'Speaking practice uses the microphone. Click the mic and say <b>你好 nǐ hǎo</b>. If Chrome asks to use the microphone, click <b>Allow</b>.');
  c.append(h('div', { class: 'line big' }, renderZh('你好|nǐ_hǎo ！')));
  if (!Ear.supported) {
    c.append(h('div', { class: 'tip' }, EAR_ERRORS.unsupported));
    await nextBtn(c, 'Continue ▶');
    return { name: 'Setup: microphone', lines: ['Speech recognition NOT supported in this browser'] };
  }
  let tries = 0;
  const result = await new Promise(res => {
    micButton(c, {
      onResult(r, status) {
        tries++;
        status.innerHTML = '';
        if (r.error) {
          status.append(h('div', { class: 'oops' }, EAR_ERRORS[r.error] || ('Problem: ' + r.error)));
          if (tries >= 3) status.append(h('div', { class: 'actions' }, h('button', { class: 'btn', onclick: () => res('failed: ' + r.error) }, 'Skip — tell Mom later')));
          return;
        }
        const g = gradeSpeech('你好', r.alts);
        status.append(h('div', null, 'I heard: ', h('b', { class: 'heard' }, g.heard)), playbackBtn(r.audioUrl));
        status.append(h('div', { class: 'good' }, g.pass ? '✅ The microphone works, and I understood you!' : '👍 The microphone works! (It heard something a little different — that\'s OK for now.)'));
        status.append(h('div', { class: 'actions' }, h('button', { class: 'btn primary big', onclick: () => res('ok, heard: ' + g.heard) }, 'Next ▶')));
      },
    });
  });
  return { name: 'Setup: microphone', lines: [result + ` (tries: ${tries})`] };
};

// ---------- setup: pinyin keyboard ----------
STEPS['keyboard-setup'] = async (st) => {
  const c = card(st.title, 'On the STAMP test you <b>type</b> Chinese using pinyin. Let’s add the Chinese keyboard. Pick your computer:');
  const guides = {
    'Chromebook': `<ol>
      <li>Click the <b>clock</b> in the bottom-right corner → click the <b>⚙️ Settings</b> gear.</li>
      <li>Search for <b>Inputs</b> at the top → open <b>Inputs and keyboards</b> (or Languages and inputs → Inputs).</li>
      <li>Click <b>Add input methods</b> → search <b>Pinyin</b> → check <b>Chinese — Pinyin</b> → <b>Add</b>.</li>
      <li>Now press <b>Ctrl + Space</b> to switch between English and Pinyin. You'll see “中” or “拼” near the clock.</li>
      <li>In the box below, switch to Pinyin, type <b>nihao</b>, then press <b>Space</b> (or 1) to choose <b>你好</b>.</li></ol>`,
    'Mac': `<ol>
      <li> → <b>System Settings</b> → <b>Keyboard</b> → Text Input → <b>Input Sources: Edit…</b></li>
      <li>Click <b>+</b> → <b>Chinese, Simplified</b> → <b>Pinyin – Simplified</b> → Add.</li>
      <li>Switch keyboards with <b>Ctrl + Space</b> (or the 🌐 key).</li>
      <li>Type <b>nihao</b> in the box below, then press <b>Space</b> to choose <b>你好</b>.</li></ol>`,
    'Windows': `<ol>
      <li>Settings → <b>Time & language</b> → <b>Language & region</b> → Add a language → <b>中文(中华人民共和国)</b>.</li>
      <li>Switch with <b>Windows key + Space</b>.</li>
      <li>Type <b>nihao</b> below and press <b>Space</b> to choose <b>你好</b>.</li></ol>`,
  };
  const guide = h('div', { class: 'guide' });
  const tabs = h('div', { class: 'tabs' });
  const isCros = /CrOS/.test(navigator.userAgent), isMac = /Mac/.test(navigator.userAgent);
  const show = k => { guide.innerHTML = guides[k]; [...tabs.children].forEach(b => b.classList.toggle('on', b.textContent === k)); };
  Object.keys(guides).forEach(k => tabs.append(h('button', { class: 'btn tab', onclick: () => show(k) }, k)));
  c.append(tabs, guide);
  show(isCros ? 'Chromebook' : isMac ? 'Mac' : 'Windows');
  const inp = h('input', { class: 'text zhinput', lang: 'zh-CN', placeholder: 'Type 你好 here' });
  const msg = h('div', { class: 'feedback' });
  c.append(h('p', null, 'Type 你好 here:'), inp, msg);
  const result = await new Promise(res => {
    const check = () => {
      if (cjkOnly(inp.value).includes('你好')) { msg.innerHTML = '<div class="good">🎉 You typed Chinese! That is exactly how the test works.</div>'; setTimeout(() => res('ok'), 1200); }
      else if (/nihao/i.test(inp.value)) msg.innerHTML = '<div class="oops">That is still English letters. Press Ctrl + Space to switch to Pinyin, then type nihao and press Space.</div>';
      else msg.innerHTML = '<div class="oops">Not 你好 yet — try again.</div>';
    };
    inp.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.isComposing) check(); });
    c.append(h('div', { class: 'actions' },
      h('button', { class: 'btn ghost', onclick: () => res('could NOT add keyboard') }, "I can't add the keyboard"),
      h('button', { class: 'btn primary big', onclick: check }, 'Check ✔')));
  });
  if (result !== 'ok') {
    c.append(h('div', { class: 'tip' }, "That's OK — tell Mom. (If this is a school Chromebook, the school may block it.) Typing practice will wait until it works."));
    await nextBtn(c, 'Continue ▶');
  }
  return { name: 'Setup: pinyin keyboard', lines: [result] };
};

// ---------- check: character recognition ----------
STEPS['char-check'] = async (st) => {
  const items = st.items.map(([hz, p, m, g]) => ({ hz, p, m, g: g || 'c' }));
  let right = 0; const known = [], wrong = [], idk = [];
  for (let i = 0; i < items.length; i++) {
    const it = items[i];
    const opts = shuffle([it, ...shuffle(items.filter(x => x !== it && x.g === it.g)).slice(0, 3)]);
    const c = card(st.title, st.intro);
    c.append(counter(i, items.length), h('div', { class: 'bigchar' }, it.hz));
    const r = await askChoice(c, opts.map(o => `${o.p} · ${o.m}`), opts.indexOf(it), {
      grid: true,
      onReveal: () => { Voice.speak(it.hz); return h('div', { class: 'reveal' }, h('span', { class: 'bigish' }, it.hz), ` ${it.p} · ${it.m}`); },
    });
    if (r.correct) { right++; known.push(it.hz); }
    else if (r.idk) idk.push(it.hz);
    else wrong.push(`${it.hz}(picked ${opts[r.chosen].hz})`);
  }
  return {
    name: st.title, score: [right, items.length],
    lines: ['Knew: ' + (known.join(' ') || '-'), 'Wrong guess: ' + (wrong.join(' ') || '-'), "Didn't know: " + (idk.join(' ') || '-')],
  };
};

// ---------- check: listening comprehension (audio only) ----------
STEPS['listen-check'] = async (st) => {
  let right = 0; const lines = [];
  for (let i = 0; i < st.items.length; i++) {
    const it = st.items[i];
    const text = zhText(it.zh);
    const c = card(st.title, st.intro);
    let plays = 0;
    const play = rate => { plays++; Voice.speak(text, rate, it.v); };
    c.append(counter(i, st.items.length),
      h('div', { class: 'actions center' },
        h('button', { class: 'btn primary big', onclick: () => play(0.85) }, '🔊 Play'),
        h('button', { class: 'btn', onclick: () => play(0.6) }, '🐢 Slow')));
    play(0.85);
    const opts = shuffle(it.opts.map((o, k) => ({ o, k })));
    const r = await askChoice(c, opts.map(x => x.o), opts.findIndex(x => x.k === 0), {
      onReveal: () => h('div', { class: 'reveal' }, speakBtns(text), renderZh(it.zh), h('div', { class: 'en' }, it.opts[0])),
    });
    if (r.correct) right++;
    lines.push(`${r.correct ? '✅' : r.idk ? '🤷' : '❌'} ${text}${r.correct || r.idk ? '' : ' → picked "' + opts[r.chosen].o + '"'} (plays: ${plays})`);
  }
  return { name: st.title, score: [right, st.items.length], lines };
};

// ---------- check: pinyin spelling by ear ----------
STEPS['pinyin-check'] = async (st) => {
  let right = 0; const lines = [];
  for (let i = 0; i < st.items.length; i++) {
    const it = st.items[i];
    const c = card(st.title, st.intro);
    c.append(counter(i, st.items.length),
      h('div', { class: 'actions center' },
        h('button', { class: 'btn primary big', onclick: () => Voice.speak(it.say) }, '🔊 Play'),
        h('button', { class: 'btn', onclick: () => Voice.speak(it.say, 0.55) }, '🐢 Slow')));
    Voice.speak(it.say);
    const opts = shuffle(it.opts.map((o, k) => ({ o, k })));
    const r = await askChoice(c, opts.map(x => x.o), opts.findIndex(x => x.k === 0), {
      grid: true,
      onReveal: () => h('div', { class: 'reveal' }, h('span', { class: 'bigish' }, it.say), ' ' + it.opts[0]),
    });
    if (r.correct) right++;
    lines.push(`${r.correct ? '✅' : r.idk ? '🤷' : '❌'} ${it.say} ${it.opts[0]}${r.correct || r.idk ? '' : ' → picked ' + opts[r.chosen].o}`);
  }
  return { name: st.title, score: [right, st.items.length], lines };
};

// ---------- check: tones ----------
STEPS['tone-check'] = async (st) => {
  // Mini lesson first.
  const t = card(st.title, 'Chinese has 4 tones. The same sound with a different tone is a different word! Click each one and listen.');
  const demo = [['妈', 'mā', '1 · high & flat  ˉ', 'mom'], ['麻', 'má', '2 · rising  ˊ', 'hemp'], ['马', 'mǎ', '3 · dips down & up  ˇ', 'horse — like in 海马!'], ['骂', 'mà', '4 · falling  ˋ', 'scold']];
  t.append(h('div', { class: 'tonedemo' }, demo.map(([hz, p, d, m]) =>
    h('button', { class: 'btn tonebtn', onclick: () => Voice.speak(hz, 0.7) }, h('div', { class: 'bigish' }, hz), h('div', null, p), h('small', null, d), h('small', { class: 'muted' }, m)))));
  await nextBtn(t, 'Start the tone check ▶');
  let right = 0; const lines = [], confusions = {};
  const labels = ['1  ˉ  flat', '2  ˊ  rising', '3  ˇ  dip', '4  ˋ  falling'];
  for (let i = 0; i < st.items.length; i++) {
    const [hz, p, tone] = st.items[i];
    const c = card(st.title, 'Listen. Which tone is it?');
    c.append(counter(i, st.items.length),
      h('div', { class: 'actions center' },
        h('button', { class: 'btn primary big', onclick: () => Voice.speak(hz, 0.7) }, '🔊 Play'),
        h('button', { class: 'btn', onclick: () => Voice.speak(hz, 0.45) }, '🐢 Slow')));
    Voice.speak(hz, 0.7);
    const r = await askChoice(c, labels, tone - 1, {
      idk: false, grid: true,
      onReveal: () => h('div', { class: 'reveal' }, h('span', { class: 'bigish' }, hz), ` ${p} — tone ${tone}`),
    });
    if (r.correct) right++;
    else { const k = `heard ${tone}→picked ${r.chosen + 1}`; confusions[k] = (confusions[k] || 0) + 1; }
    lines.push(`${r.correct ? '✅' : '❌'} ${hz} ${p}${r.correct ? '' : ' (picked tone ' + (r.chosen + 1) + ')'}`);
  }
  const conf = Object.entries(confusions).map(([k, v]) => `${k} ×${v}`).join(', ');
  return { name: st.title, score: [right, st.items.length], lines: [...lines, 'Tone confusions: ' + (conf || 'none')] };
};

// ---------- check / practice: read aloud ----------
// Diagnostic mode: first attempt without hearing the model, then may listen and try once more.
STEPS['read-aloud'] = async (st) => {
  let right = 0; const lines = [];
  for (let i = 0; i < st.items.length; i++) {
    const zh = st.items[i], text = zhText(zh);
    const c = card(st.title, st.intro);
    c.append(counter(i, st.items.length));
    const line = h('div', { class: 'line big' }, renderZh(zh, { speak: false }));
    c.append(line);
    if (!Ear.supported) {
      c.append(h('div', { class: 'tip' }, EAR_ERRORS.unsupported));
      await nextBtn(c);
      lines.push(`⏭ ${text} (no speech recognition)`);
      continue;
    }
    const attempts = [];
    let heardModel = false;
    const outcome = await new Promise(res => {
      const after = h('div', { class: 'actions' });
      micButton(c, {
        label: '🎤 Click and read it aloud',
        onResult(r, status) {
          status.innerHTML = '';
          if (r.error) { status.append(h('div', { class: 'oops' }, EAR_ERRORS[r.error] || ('Problem: ' + r.error))); if (r.error !== 'no-speech') after.hidden = false; return; }
          const g = gradeSpeech(zh, r.alts);
          attempts.push({ g, heardModel });
          status.append(h('div', { class: 'heardrow' }, 'Target: ', renderMarks(zh, g.marks)),
            h('div', { class: 'heardrow' }, 'I heard: ', h('b', { class: 'heard' }, g.heard || '—'), ' ', playbackBtn(r.audioUrl)),
            h('div', { class: g.pass ? 'good' : 'oops' }, g.pass ? '✅ Great reading!' : '🟠 Close — red characters were not clear.'));
          if (g.pass || attempts.length >= 2) { after.innerHTML = ''; after.append(h('button', { class: 'btn primary big', onclick: () => res('done') }, 'Next ▶')); }
          else {
            after.innerHTML = '';
            after.append(h('button', { class: 'btn', onclick: () => { heardModel = true; Voice.speak(text, 0.75); } }, '🔊 Hear how it sounds'),
              h('button', { class: 'btn ghost', onclick: () => res('done') }, 'Next ▶'));
            status.append(h('div', { class: 'muted' }, 'Listen to the model, then click the mic to try once more.'));
          }
          after.hidden = false;
        },
      });
      c.append(after);
      after.hidden = true;
      after.append(h('button', { class: 'btn ghost', onclick: () => res('skipped') }, 'Skip ▶'));
    });
    const best = attempts.reduce((b, a) => (!b || a.g.sim > b.g.sim ? a : b), null);
    if (attempts[0] && attempts[0].g.pass) right++;
    if (!attempts.length) lines.push(`⏭ ${text} (${outcome})`);
    else lines.push(attempts.map((a, k) => `${k === 0 ? '' : '   retry' + (a.heardModel ? ' after model' : '') + ': '}${a.g.pass ? '✅' : '❌'} ${k === 0 ? text + ' → ' : ''}heard "${a.g.heard}" (${Math.round(a.g.sim * 100)}%)`).join('\n'));
  }
  return { name: st.title, score: [right, st.items.length], lines: ['(score = correct on 1st try, before hearing the model)', ...lines] };
};

// ---------- free speaking: answer a question ----------
STEPS['free-speak'] = async (st) => {
  let answered = 0; const lines = [];
  for (let i = 0; i < st.items.length; i++) {
    const it = st.items[i], q = zhText(it.q);
    const c = card(st.title, st.intro);
    c.append(counter(i, st.items.length),
      h('div', { class: 'line big' }, speakBtns(q), renderZh(it.q)), h('div', { class: 'en' }, it.en));
    if (it.hint) c.append(h('div', { class: 'hint' }, '💡 You can start with: ', renderZh(it.hint)));
    Voice.speak(q);
    if (!Ear.supported) { c.append(h('div', { class: 'tip' }, EAR_ERRORS.unsupported)); await nextBtn(c); lines.push(`⏭ ${q}`); continue; }
    const heard = [];
    await new Promise(res => {
      const after = h('div', { class: 'actions' }, h('button', { class: 'btn ghost', onclick: () => res() }, 'Skip ▶'));
      micButton(c, {
        label: '🎤 Click and answer in Chinese',
        onResult(r, status) {
          status.innerHTML = '';
          if (r.error) { status.append(h('div', { class: 'oops' }, EAR_ERRORS[r.error] || ('Problem: ' + r.error))); return; }
          const best = r.alts.slice().sort((a, b) => cjkOnly(b).length - cjkOnly(a).length)[0] || '';
          heard.push(best);
          const ok = cjkOnly(best).length >= 2;
          status.append(h('div', { class: 'heardrow' }, 'I heard: ', h('b', { class: 'heard' }, best || '—'), ' ', playbackBtn(r.audioUrl)),
            h('div', { class: ok ? 'good' : 'oops' }, ok ? '✅ Nice — you answered in Chinese!' : 'Try to answer with a full Chinese sentence.'));
          after.innerHTML = '';
          after.append(h('button', { class: ok ? 'btn primary big' : 'btn ghost', onclick: () => res() }, 'Next ▶'));
        },
      });
      c.append(after);
    });
    const best = heard.sort((a, b) => cjkOnly(b).length - cjkOnly(a).length)[0];
    if (best && cjkOnly(best).length >= 2) answered++;
    lines.push(`Q: ${q} → ${heard.length ? heard.map(x => '"' + x + '"').join(' / ') : '(no answer)'}`);
  }
  return { name: st.title, score: [answered, st.items.length], lines };
};

// ---------- typing with the pinyin keyboard ----------
STEPS['type-check'] = async (st) => {
  if (Store.get('keyboardOk', null) === false) { /* still try: maybe it was fixed */ }
  let right = 0; const lines = [];
  for (let i = 0; i < st.items.length; i++) {
    const it = st.items[i];
    const c = card(st.title, st.intro);
    c.append(counter(i, st.items.length));
    if (it.en) c.append(h('div', { class: 'prompt' }, h('div', { class: 'en big' }, it.en), it.py && h('div', { class: 'py' }, it.py)));
    if (it.see) c.append(h('div', { class: 'prompt' }, h('div', { class: 'muted' }, 'Type these characters:'), h('div', { class: 'bigish' }, it.see)));
    const inp = h('input', { class: 'text zhinput', lang: 'zh-CN', placeholder: 'Type in Chinese (Ctrl + Space to switch)' });
    const msg = h('div', { class: 'feedback' });
    c.append(inp, msg);
    inp.focus();
    const typed = [];
    const ok = await new Promise(res => {
      const check = () => {
        const v = cjkOnly(inp.value);
        if (!v) { msg.innerHTML = '<div class="oops">Type the Chinese characters first (switch with Ctrl + Space).</div>'; return; }
        typed.push(v);
        const good = it.ans.some(a => cjkOnly(a) === v);
        msg.innerHTML = '';
        if (good) { msg.append(h('div', { class: 'good' }, '✅ Correct!')); setTimeout(() => res(true), 800); return; }
        if (typed.length < 2) { msg.append(h('div', { class: 'oops' }, '❌ Not quite — check each character and try once more.')); return; }
        msg.append(h('div', { class: 'oops' }, 'The answer is: '), h('div', { class: 'reveal' }, h('span', { class: 'bigish' }, it.ans[0]), ' ', it.py || ''));
        nextBtn(msg).then(() => res(false));
      };
      inp.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.isComposing) check(); });
      c.append(h('div', { class: 'actions' },
        h('button', { class: 'btn ghost', onclick: () => res(null) }, "Skip ▶"),
        h('button', { class: 'btn primary big', onclick: check }, 'Check ✔')));
    });
    if (ok) right++;
    lines.push(`${ok ? '✅' : ok === null ? '⏭' : '❌'} ${it.ans[0]}${typed.length ? ' typed: ' + typed.join(' / ') : ''}`);
  }
  return { name: st.title, score: [right, st.items.length], lines };
};

// ---------- paper writing (always the last step) ----------
// Stroke-order animation via Hanzi Writer (loaded only when needed); falls back to a static character offline.
let hanziWriterLoading = null;
function loadHanziWriter() {
  if (window.HanziWriter) return Promise.resolve(true);
  if (!hanziWriterLoading) hanziWriterLoading = new Promise(res => {
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.2/dist/hanzi-writer.min.js';
    s.onload = () => res(true);
    s.onerror = () => res(false);
    document.head.append(s);
  });
  return hanziWriterLoading;
}

STEPS['paper-writing'] = async (st) => {
  const times = st.times || 5;
  const c = card(st.title || '✏️ Paper writing',
    `Get a pencil and paper. For each character: watch the stroke order, then <b>write it ${times} times</b> on your paper. Say it out loud each time you write it. Keep your paper so Mom can see it.`);
  const ok = await loadHanziWriter();
  const grid = h('div', { class: 'writegrid' });
  c.append(grid);
  for (const [hz, p, m] of st.chars) {
    const box = h('div', { class: 'tianzige' });
    const cell = h('div', { class: 'writecell' }, box,
      h('div', { class: 'wpy' }, p, ' ', h('button', { class: 'btn icon', onclick: () => Voice.speak(hz) }, '🔊')),
      h('div', { class: 'muted' }, m));
    grid.append(cell);
    if (ok) {
      const w = HanziWriter.create(box, hz, { width: 150, height: 150, padding: 8, strokeAnimationSpeed: 0.8, delayBetweenStrokes: 250, showOutline: true, onLoadCharDataError: () => { box.textContent = hz; box.classList.add('static'); } });
      cell.append(h('button', { class: 'btn small', onclick: () => w.animateCharacter() }, '▶ Show strokes'));
      w.animateCharacter();
    } else { box.textContent = hz; box.classList.add('static'); }
  }
  // Button unlocks after enough time to actually write (about 15 seconds per character).
  const minMs = st.chars.length * 15000, t0 = Date.now();
  const done = h('button', { class: 'btn primary big', disabled: true }, `✅ I wrote each one ${times} times`);
  const note = h('div', { class: 'muted' }, 'Take your time — write neatly.');
  c.append(h('div', { class: 'actions' }, done), note);
  setTimeout(() => { done.disabled = false; note.textContent = ''; }, minMs);
  await new Promise(res => done.onclick = res);
  const mins = ((Date.now() - t0) / 60000).toFixed(1);
  return { name: 'Paper writing', lines: [`${st.chars.map(x => x[0]).join(' ')} ×${times} — confirmed done after ${mins} min`] };
};

// ---------- finish: report + reward ----------
function buildReport(L, sections, t0) {
  const mins = Math.round((Date.now() - t0) / 60000);
  const ua = navigator.userAgent;
  const dev = /CrOS/.test(ua) ? 'Chromebook' : /Android/.test(ua) ? 'Android' : /iPad|iPhone/.test(ua) ? 'iPad/iPhone' : /Mac/.test(ua) ? 'Mac' : /Windows/.test(ua) ? 'Windows' : /Linux/.test(ua) ? 'Linux' : 'other';
  const out = [`🐴 ${APP.name} · ${L.id} · ${L.title}`, `${new Date().toLocaleString()} · ${mins} min · ${dev}`];
  const scored = sections.filter(s => s.score);
  if (scored.length) out.push('SCORES: ' + scored.map(s => `${s.name} ${s.score[0]}/${s.score[1]}`).join(' · '));
  for (const s of sections) {
    out.push('', `--- ${s.name}${s.score ? ` ${s.score[0]}/${s.score[1]}` : ''}${s.min != null ? ` [${s.min.toFixed(1)} min]` : ''}`);
    out.push(...(s.lines || []));
  }
  return out.join('\n');
}

async function finish(L, sections, t0) {
  const report = buildReport(L, sections, t0);
  const results = Store.get('results', {});
  const scored = sections.filter(s => s.score);
  const r = scored.reduce((a, s) => a + s.score[0], 0), n = scored.reduce((a, s) => a + s.score[1], 0);
  const first = !results[L.id];
  results[L.id] = { day: todayStr(), score: n ? Math.round(100 * r / n) : null, report };
  Store.set('results', results);
  if (first && L.reward) Farm.add(L.reward);
  const sent = await Outbox.add(report);

  const c = card('🎉 Lesson complete!', L.finishText || 'Great work today.');
  if (first && L.reward) c.append(h('div', { class: 'reward' }, h('div', null, 'New on your farm:'), h('div', { class: 'art' }, L.reward.map(x => x.e).join(' ')), h('div', { class: 'muted' }, L.reward.map(x => x.label).join(' · '))));
  c.append(h('table', { class: 'scores' }, scored.map(s => h('tr', null, h('td', null, s.name), h('td', null, `${s.score[0]} / ${s.score[1]}`)))));
  c.append(h('div', { class: sent ? 'good' : 'oops' }, sent ? '📨 Your report was sent to Mom.' : '⚠️ Report could not be sent (no internet?). It will send next time — or use Email Mom below.'));
  c.append(h('div', { class: 'actions' },
    h('button', { class: 'btn', onclick: () => emailMom(`Chinese lesson report: ${L.id} ${L.title}`, report) }, '📧 Email Mom'),
    h('a', { class: 'btn primary big', href: 'index.html' }, '🏠 Back to my farm')));
  c.append(h('details', null, h('summary', null, 'See full report'), h('pre', { class: 'report' }, report)));
}

// ---------- boot ----------
async function runLesson() {
  const L = window.LESSON;
  document.title = `${L.title} · ${APP.name}`;
  document.getElementById('ltitle').textContent = L.title;
  setPinyin(pinyinOn);
  document.getElementById('pyToggle').onclick = () => setPinyin(!pinyinOn);
  const bar = document.getElementById('bar');
  const sections = [], t0 = Date.now();
  for (let i = 0; i < L.steps.length; i++) {
    bar.style.width = (100 * i / L.steps.length) + '%';
    const st = L.steps[i], ts = Date.now();
    const sec = await STEPS[st.type](st);
    if (sec) { sec.min = (Date.now() - ts) / 60000; sections.push(sec); }
    window.scrollTo(0, 0);
  }
  bar.style.width = '100%';
  await finish(L, sections, t0);
}

(function boot() {
  const id = new URLSearchParams(location.search).get('id');
  if (!id || !/^[a-z0-9-]+$/.test(id)) { location.href = 'index.html'; return; }
  const s = document.createElement('script');
  s.src = `lessons/${id}.js`;
  s.onload = runLesson;
  s.onerror = () => { stage.innerHTML = '<section class="card"><h2>Lesson not found</h2><p><a href="index.html">Back to the farm</a></p></section>'; };
  document.body.append(s);
})();

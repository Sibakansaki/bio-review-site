// ═══════════════════════════════════════
// app.js — 生物複習站 主程式邏輯
// ═══════════════════════════════════════

// ── STATE ──────────────────────────────
let ALL_CHAPTERS = [];
let currentFilter = 'all';

// Quiz state
let quizCards = [];
let quizIndex = 0;
let quizCorrect = 0;
let quizWrong = 0;
let quizAnswered = false;
let quizSelectedChapter = 'all';
let quizSelectedCount = 5;
let missedCards = [];
let lastQuizConfig = {};

// ── INIT ────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  spawnFloatingDots();
  await loadAllChapters();
  ALL_CHAPTERS = collectChapters();
  hideLoading();
  renderHome();
});

function hideLoading() {
  const el = document.getElementById('loadingScreen');
  if (el) { el.style.opacity = '0'; setTimeout(() => el.remove(), 400); }
}

// ── FLOATING DOTS ───────────────────────
function spawnFloatingDots() {
  const colors = ['#FF6B6B','#FFD93D','#6BCB77','#4D96FF','#C77DFF'];
  const container = document.getElementById('floatingDots');
  for (let i = 0; i < 15; i++) {
    const d = document.createElement('div');
    d.className = 'dot';
    const size = Math.random() * 40 + 10;
    d.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random() * 100}%;
      background:${colors[i % colors.length]};
      animation-duration:${Math.random() * 20 + 15}s;
      animation-delay:-${Math.random() * 20}s;
    `;
    container.appendChild(d);
  }
}

// ── PAGE NAVIGATION ─────────────────────
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.getElementById('nav-' + name).classList.add('active');

  if (name === 'home')   renderHome();
  if (name === 'browse') renderBrowse();
  if (name === 'quiz')   renderQuizSetup();
}

// ══════════════════════════════════════
// HOME
// ══════════════════════════════════════
function renderHome() {
  const allCards = ALL_CHAPTERS.flatMap(c => c.cards);
  document.getElementById('statsRow').innerHTML = `
    <div class="stat-pill blue">📚 ${allCards.length} 張卡片</div>
    <div class="stat-pill red">🧠 ${ALL_CHAPTERS.length} 個章節</div>
    <div class="stat-pill yellow">⭐ 全部待複習</div>
  `;

  document.getElementById('chapterGrid').innerHTML = ALL_CHAPTERS.length
    ? ALL_CHAPTERS.map(ch => `
        <div class="chapter-card" style="border-top-color:${ch.color};"
             onclick="filterByChapter('${ch.id}')">
          <div class="chapter-emoji">${ch.emoji}</div>
          <div class="chapter-name">${ch.title}</div>
          <div class="chapter-count">${ch.cards.length} 張卡片</div>
          <div class="chapter-badge" style="background:${ch.color}">${ch.id.toUpperCase()}</div>
          <div class="chapter-progress">
            <div class="chapter-progress-bar" style="width:100%;background:${ch.color}"></div>
          </div>
        </div>`)
      .join('')
    : `<div class="empty-state" style="grid-column:1/-1">
         <div class="big">📂</div>
         <p>尚未載入任何章節資料</p>
       </div>`;
}

function filterByChapter(chId) {
  currentFilter = chId;
  showPage('browse');
}

// ══════════════════════════════════════
// BROWSE
// ══════════════════════════════════════
function renderBrowse() {
  // Chips
  const chips = document.getElementById('filterChips');
  chips.innerHTML =
    `<button class="chip ${currentFilter === 'all' ? 'active' : ''}" onclick="setFilter('all')">全部</button>` +
    ALL_CHAPTERS.map(ch =>
      `<button class="chip ${currentFilter === ch.id ? 'active' : ''}"
               style="${currentFilter === ch.id ? `background:${ch.color};border-color:${ch.color};` : ''}"
               onclick="setFilter('${ch.id}')">
         ${ch.emoji} ${ch.title}
       </button>`
    ).join('');
  filterCards();
}

function setFilter(f) {
  currentFilter = f;
  renderBrowse();
}

function filterCards() {
  const q = (document.getElementById('searchInput').value || '').toLowerCase();
  let cards = currentFilter === 'all'
    ? ALL_CHAPTERS.flatMap(c => c.cards)
    : (ALL_CHAPTERS.find(c => c.id === currentFilter)?.cards || []);

  if (q) cards = cards.filter(c =>
    c.concept.toLowerCase().includes(q) ||
    c.tags.some(t => t.toLowerCase().includes(q)) ||
    c.summary.toLowerCase().includes(q)
  );

  // Build a chapter lookup map
  const chMap = {};
  ALL_CHAPTERS.forEach(ch => ch.cards.forEach(c => { chMap[c.id] = ch; }));

  const grid = document.getElementById('cardsGrid');
  if (!cards.length) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="big">🔍</div><p>找不到符合的卡片</p></div>`;
    return;
  }

  grid.innerHTML = cards.map(card => {
    const ch = chMap[card.id] || {};
    const optHtml = Object.entries(card.sourceQuestion.options).map(([k, v]) => {
      const cls = card.sourceQuestion.correct.includes(k) ? 'correct'
                : k === card.sourceQuestion.wrong ? 'wrong' : '';
      return `<div class="opt ${cls}">${k}. ${v}</div>`;
    }).join('');
    const qNumBadge = card.qNum ? `<span class="q-num-badge">Q${card.qNum}</span>` : '';

    return `
    <div class="review-card" id="card-${card.id}" onclick="toggleCard(this)">
      <div class="card-header">
        <div style="display:flex;align-items:center;gap:8px;flex:1;">
          ${qNumBadge}
          <div class="card-concept">${card.concept}</div>
        </div>
        <div class="card-school" style="background:${ch.color || '#888'}">${card.sourceQuestion.school}</div>
      </div>
      <div class="card-tags">${card.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>

      <!-- 顯示模式 -->
      <div class="card-view-mode">
        <div class="card-summary">${renderContent(card.summary)}</div>
        <div class="card-logic">💡 ${card.logic}</div>
      </div>

      <!-- 編輯模式 -->
      <div class="card-edit-mode" style="display:none;">
        <div class="edit-label">📝 觀念說明</div>
        <textarea class="edit-textarea" id="edit-summary-${card.id}" rows="8"
          onclick="event.stopPropagation()"
          onfocus="setActiveTextarea('edit-summary-${card.id}')"
        >${card.summary}</textarea>
        <div class="edit-label" style="margin-top:10px;">💡 口訣</div>
        <textarea class="edit-textarea" id="edit-logic-${card.id}" rows="2"
          onclick="event.stopPropagation()"
          onfocus="setActiveTextarea('edit-logic-${card.id}')"
        >${card.logic}</textarea>
        <div class="edit-actions">
          <button class="edit-cancel-btn" onclick="cancelEdit(event, '${card.id}')">取消</button>
          <div style="display:flex;gap:8px;align-items:center;">
            <label class="attach-btn" title="在游標處插入圖片" onclick="event.stopPropagation()">
              📎
              <input type="file" accept="image/*" style="display:none;"
                onchange="attachImage(event, '${card.id}')">
            </label>
            <button class="edit-save-btn" onclick="saveCard(event, '${card.id}')">
              <span class="save-text">儲存到 GitHub</span>
              <span class="save-loading" style="display:none;">儲存中…</span>
            </button>
          </div>
        </div>
        <div class="edit-status" id="edit-status-${card.id}"></div>
      </div>

      <div class="card-detail">
        <div class="pitfall-box">
          <h4>⚠️ 常見陷阱</h4>
          <p>${card.pitfall}</p>
        </div>
        <div class="source-box">
          <h4>📋 原始題目</h4>
          <div class="source-question">${card.sourceQuestion.question}</div>
          <div class="source-options">${optHtml}</div>
        </div>
        <div style="text-align:right;margin-top:12px;">
          <button class="edit-btn" onclick="startEdit(event, '${card.id}')">✏️ 編輯</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function toggleCard(el) {
  // 如果點到 textarea 或按鈕，不要收合卡片
  if (el.tagName === 'TEXTAREA' || el.tagName === 'BUTTON') return;
  const card = el.closest('.review-card');
  if (card) card.classList.toggle('expanded');
}

// ── 編輯功能 ─────────────────────────
function startEdit(event, cardId) {
  event.stopPropagation();
  const card = document.getElementById(`card-${cardId}`);
  card.querySelector('.card-view-mode').style.display = 'none';
  card.querySelector('.card-edit-mode').style.display = 'block';
  card.classList.add('expanded'); // 確保展開
}

function cancelEdit(event, cardId) {
  event.stopPropagation();
  const card = document.getElementById(`card-${cardId}`);
  card.querySelector('.card-view-mode').style.display = 'block';
  card.querySelector('.card-edit-mode').style.display = 'none';
  document.getElementById(`edit-status-${cardId}`).textContent = '';
}

async function saveCard(event, cardId) {
  event.stopPropagation();

  const saveBtn    = event.currentTarget;
  const saveText   = saveBtn.querySelector('.save-text');
  const saveLoader = saveBtn.querySelector('.save-loading');
  const statusEl   = document.getElementById(`edit-status-${cardId}`);

  const newSummary = document.getElementById(`edit-summary-${cardId}`).value.trim();
  const newLogic   = document.getElementById(`edit-logic-${cardId}`).value.trim();

  if (!newSummary || !newLogic) {
    statusEl.textContent = '⚠️ 內容不能為空';
    statusEl.className = 'edit-status error';
    return;
  }

  // 找到卡片資料物件並更新記憶體中的值
  let targetCard = null;
  for (const ch of ALL_CHAPTERS) {
    const found = ch.cards.find(c => c.id === cardId);
    if (found) { targetCard = found; break; }
  }
  if (!targetCard) return;

  // 更新記憶體
  targetCard.summary = newSummary;
  targetCard.logic   = newLogic;

  // UI 進入 loading 狀態
  saveBtn.disabled  = true;
  saveText.style.display  = 'none';
  saveLoader.style.display = 'inline';
  statusEl.textContent = '';

  try {
    const result = await saveCardToGitHub(targetCard);

    if (result.status === 'unchanged') {
      statusEl.textContent = '內容沒有變化';
      statusEl.className = 'edit-status info';
    } else {
      statusEl.textContent = '✅ 已儲存到 GitHub！';
      statusEl.className = 'edit-status success';
      // 同步更新顯示模式的內容
      const cardEl = document.getElementById(`card-${cardId}`);
      cardEl.querySelector('.card-summary').innerHTML = renderContent(newSummary);
      cardEl.querySelector('.card-logic').textContent   = '💡 ' + newLogic;
      // 2 秒後自動關閉編輯模式
      setTimeout(() => cancelEdit({ stopPropagation: () => {} }, cardId), 2000);
    }
  } catch (err) {
    statusEl.textContent = `❌ 儲存失敗：${err.message}`;
    statusEl.className = 'edit-status error';
  } finally {
    saveBtn.disabled        = false;
    saveText.style.display  = 'inline';
    saveLoader.style.display = 'none';
  }
}

// ── 渲染含圖片的內容 ────────────────────
// summary 裡的 ![圖片](url) 會被渲染成 <img>
function renderContent(text) {
  if (!text) return '';
  return text
    .replace(/\n/g, '<br>')
    .replace(/!\[.*?\]\((https?:\/\/[^\)]+)\)/g,
      (_, url) => `<img src="${url}" class="inline-card-img" onclick="viewImage('${url}')" alt="補充圖片">`
    );
}

// ── 記錄目前焦點在哪個 textarea ──────────
let _activeTextareaId = null;
function setActiveTextarea(id) {
  _activeTextareaId = id;
}

// ── 附件按鈕：上傳圖片並插入游標位置 ──────
const CLOUDINARY = {
  cloudName: 'dyfdvchdd',
  uploadPreset: 'bio-review-upload',
};

async function attachImage(event, cardId) {
  const file = event.target.files[0];
  if (!file) return;
  event.stopPropagation();

  // 找出目前焦點的 textarea（預設用 summary）
  const textareaId = _activeTextareaId || `edit-summary-${cardId}`;
  const textarea = document.getElementById(textareaId);
  const statusEl = document.getElementById(`edit-status-${cardId}`);

  statusEl.textContent = '⏳ 上傳圖片中…';
  statusEl.className = 'edit-status info';

  try {
    // 1. 上傳到 Cloudinary
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY.uploadPreset);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY.cloudName}/image/upload`,
      { method: 'POST', body: formData }
    );
    if (!res.ok) throw new Error('Cloudinary 上傳失敗');
    const data = await res.json();
    const url = data.secure_url;

    // 2. 在游標位置插入佔位符
    const placeholder = `\n![圖片](${url})\n`;
    const start = textarea.selectionStart;
    const end   = textarea.selectionEnd;
    const before = textarea.value.substring(0, start);
    const after  = textarea.value.substring(end);
    textarea.value = before + placeholder + after;

    // 3. 移動游標到插入點之後
    const newPos = start + placeholder.length;
    textarea.selectionStart = textarea.selectionEnd = newPos;
    textarea.focus();

    statusEl.textContent = '✅ 圖片已插入！儲存後生效。';
    statusEl.className = 'edit-status success';
    setTimeout(() => { statusEl.textContent = ''; }, 3000);

  } catch (err) {
    statusEl.textContent = `❌ 上傳失敗：${err.message}`;
    statusEl.className = 'edit-status error';
  }

  event.target.value = '';
}

// ── 全螢幕查看圖片 ───────────────────────
function viewImage(url) {
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:9999;display:flex;align-items:center;justify-content:center;cursor:zoom-out;';
  overlay.innerHTML = `<img src="${url}" style="max-width:95%;max-height:95%;border-radius:8px;object-fit:contain;">`;
  overlay.onclick = () => overlay.remove();
  document.body.appendChild(overlay);
}

// ══════════════════════════════════════
// QUIZ — SETUP
// ══════════════════════════════════════
function renderQuizSetup() {
  document.getElementById('quizSetup').style.display  = 'block';
  document.getElementById('quizActive').style.display = 'none';
  document.getElementById('quizResult').style.display = 'none';

  document.getElementById('quizChapterOptions').innerHTML =
    `<div class="quiz-option-card ${quizSelectedChapter === 'all' ? 'selected' : ''}"
          onclick="selectChapter('all', this)">
       <h4>🎲 全部章節</h4><p>所有卡片混合出題</p>
     </div>` +
    ALL_CHAPTERS.map(ch =>
      `<div class="quiz-option-card ${quizSelectedChapter === ch.id ? 'selected' : ''}"
            onclick="selectChapter('${ch.id}', this)">
         <h4>${ch.emoji} ${ch.title}</h4><p>${ch.cards.length} 張卡片</p>
       </div>`
    ).join('');
}

function selectChapter(id, el) {
  quizSelectedChapter = id;
  document.querySelectorAll('#quizChapterOptions .quiz-option-card').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
}

function selectCount(n, el) {
  quizSelectedCount = n;
  document.querySelectorAll('.count-card').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
}

function startQuiz(chId) {
  quizSelectedChapter = chId || 'all';
  showPage('quiz');
  setTimeout(beginQuiz, 80);
}

function beginQuiz() {
  let pool = quizSelectedChapter === 'all'
    ? ALL_CHAPTERS.flatMap(c => c.cards)
    : (ALL_CHAPTERS.find(c => c.id === quizSelectedChapter)?.cards || []);

  if (!pool.length) { alert('此章節尚無卡片！'); return; }

  pool = shuffle([...pool]);
  quizCards  = pool.slice(0, Math.min(quizSelectedCount, pool.length));
  quizIndex  = 0; quizCorrect = 0; quizWrong = 0; missedCards = [];
  lastQuizConfig = { ch: quizSelectedChapter, count: quizSelectedCount };

  document.getElementById('quizSetup').style.display  = 'none';
  document.getElementById('quizActive').style.display = 'block';
  document.getElementById('quizResult').style.display = 'none';
  renderQuestion();
}

// ── QUIZ — ACTIVE ───────────────────────
function renderQuestion() {
  const card  = quizCards[quizIndex];
  const total = quizCards.length;
  quizAnswered = false;

  document.getElementById('quizProgressFill').style.width = `${(quizIndex / total) * 100}%`;
  document.getElementById('quizQNum').textContent = `第 ${quizIndex + 1} / ${total} 題`;
  document.getElementById('quizScoreLabel').textContent = `✅ ${quizCorrect}  ❌ ${quizWrong}`;

  const ch = ALL_CHAPTERS.find(c => c.cards.some(cc => cc.id === card.id)) || {};
  const schoolEl = document.getElementById('quizSchool');
  schoolEl.textContent = card.sourceQuestion.school;
  schoolEl.style.background = ch.color || '#888';

  document.getElementById('quizQuestionText').textContent = card.sourceQuestion.question;
  document.getElementById('quizOptions').innerHTML = Object.entries(card.sourceQuestion.options)
    .map(([k, v]) => `<button class="quiz-opt-btn" onclick="selectAnswer('${k}', this)">${k}. ${v}</button>`)
    .join('');

  const fb = document.getElementById('quizFeedback');
  fb.className = 'quiz-feedback';
  document.getElementById('quizNextBtn').style.display = 'none';
}

function selectAnswer(key, btn) {
  if (quizAnswered) return;
  quizAnswered = true;

  const card    = quizCards[quizIndex];
  const correct = card.sourceQuestion.correct;
  const isRight = correct.includes(key);

  document.querySelectorAll('.quiz-opt-btn').forEach(b => {
    b.disabled = true;
    const k = b.textContent.trim()[0];
    if (correct.includes(k)) b.classList.add('correct');
    else if (k === key && !isRight) b.classList.add('wrong');
  });

  if (isRight) { quizCorrect++; } else { quizWrong++; missedCards.push(card); }

  const fb = document.getElementById('quizFeedback');
  fb.className = `quiz-feedback show${isRight ? '' : ' wrong-fb'}`;

  const resEl = document.getElementById('feedbackResult');
  resEl.className = `feedback-result ${isRight ? 'correct' : 'wrong'}`;
  resEl.textContent = isRight ? '✅ 答對了！' : '❌ 答錯了';

  document.getElementById('feedbackConcept').textContent = '📌 ' + card.concept;
  document.getElementById('feedbackLogic').textContent   = '💡 ' + card.logic;
  document.getElementById('feedbackPitfall').textContent = '⚠️ 陷阱：' + card.pitfall;
  document.getElementById('quizScoreLabel').textContent  = `✅ ${quizCorrect}  ❌ ${quizWrong}`;

  const nextBtn = document.getElementById('quizNextBtn');
  nextBtn.style.display = 'inline-block';
  nextBtn.textContent = quizIndex + 1 >= quizCards.length ? '看結果 →' : '下一題 →';
}

function nextQuestion() {
  quizIndex++;
  if (quizIndex >= quizCards.length) { showResult(); return; }
  renderQuestion();
}

function exitQuiz() { renderQuizSetup(); }

// ── QUIZ — RESULT ───────────────────────
function showResult() {
  document.getElementById('quizActive').style.display = 'none';
  document.getElementById('quizResult').style.display = 'block';

  const total = quizCards.length;
  const pct   = Math.round((quizCorrect / total) * 100);

  let emoji, title, subtitle, bg;
  if      (pct >= 90) { emoji='🎉'; title='太厲害了！';   subtitle='這些觀念你已完全掌握，繼續保持！'; bg='#E8F8EA'; }
  else if (pct >= 70) { emoji='💪'; title='不錯喔！';     subtitle=`還有 ${quizWrong} 題需要加強，再複習一下陷阱！`; bg='#FFF8DC'; }
  else if (pct >= 50) { emoji='🤔'; title='再加油！';     subtitle='有些觀念還需要多練習，看看下面的錯題！'; bg='#FFE8E8'; }
  else                { emoji='😅'; title='需要多複習！'; subtitle='別灰心，多刷幾次一定會進步！'; bg='#F3E8FF'; }

  document.getElementById('resultEmoji').textContent    = emoji;
  document.getElementById('resultCircle').style.background = bg;
  document.getElementById('resultScore').textContent    = quizCorrect;
  document.getElementById('resultTotal').textContent    = `/ ${total}`;
  document.getElementById('resultTitle').textContent    = title;
  document.getElementById('resultSubtitle').textContent = subtitle;

  const missedSection = document.getElementById('missedSection');
  missedSection.innerHTML = missedCards.length
    ? `<div class="missed-title">❌ 答錯的題目（${missedCards.length} 題）</div>
       <div class="missed-list">
         ${missedCards.map(c => `
           <div class="missed-item">
             <div class="missed-item-concept">${c.concept}</div>
             <div class="missed-item-pitfall">⚠️ ${c.pitfall}</div>
           </div>`).join('')}
       </div>`
    : '';
}

function retryQuiz() {
  quizSelectedChapter = lastQuizConfig.ch;
  quizSelectedCount   = lastQuizConfig.count;
  beginQuiz();
}

// ── UTILS ───────────────────────────────
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ── SETTINGS / TOKEN ────────────────────
function openSettings() {
  const modal = document.getElementById('settingsModal');
  modal.style.display = 'flex';
  const existing = localStorage.getItem('github_token');
  const input = document.getElementById('tokenInput');
  input.value = existing ? '••••••••••••••••' : '';
  const status = document.getElementById('tokenStatus');
  status.textContent = existing ? '✅ 已設定 Token' : '尚未設定 Token';
  status.style.color = existing ? '#6BCB77' : '#6B7280';
}

function closeSettings() {
  document.getElementById('settingsModal').style.display = 'none';
}

function saveToken() {
  const input = document.getElementById('tokenInput');
  const status = document.getElementById('tokenStatus');
  const val = input.value.trim();

  if (!val || val.startsWith('•')) {
    status.textContent = '⚠️ 請輸入新的 Token';
    status.style.color = '#FF6B6B';
    return;
  }
  if (!val.startsWith('ghp_') && !val.startsWith('github_pat_')) {
    status.textContent = '⚠️ Token 格式不正確（應以 ghp_ 開頭）';
    status.style.color = '#FF6B6B';
    return;
  }

  localStorage.setItem('github_token', val);
  status.textContent = '✅ 已儲存！';
  status.style.color = '#6BCB77';
  setTimeout(() => closeSettings(), 1000);
}

// 點 modal 背景關閉
document.getElementById('settingsModal').addEventListener('click', function(e) {
  if (e.target === this) closeSettings();
});

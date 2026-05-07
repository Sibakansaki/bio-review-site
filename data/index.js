// ═══════════════════════════════════════════════════════
// data/index.js
//
// 章節收集器。使用 fetch 動態載入，確保每次都抓最新版本。
// ═══════════════════════════════════════════════════════

// 要載入的章節檔案清單（新增章節在這裡加）
const CHAPTER_FILES = [
  'data/ch48.js',
  // 'data/ch01.js',
];

// 動態載入所有章節，加上時間戳避免快取
async function loadAllChapters() {
  const timestamp = Date.now();
  for (const file of CHAPTER_FILES) {
    await loadScript(`${file}?v=${timestamp}`);
  }
}

function loadScript(src) {
  return new Promise((resolve) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload  = resolve;
    s.onerror = () => { console.warn(`⚠️ 無法載入 ${src}`); resolve(); };
    document.head.appendChild(s);
  });
}

function collectChapters() {
  const chapters = [];
  for (const key of Object.keys(window)) {
    if (/^CH\d+$/.test(key) && window[key]?.cards) {
      chapters.push(window[key]);
    }
  }
  chapters.sort((a, b) => a.id.localeCompare(b.id));
  return chapters;
}

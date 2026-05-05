// ═══════════════════════════════════════════════════════
// data/index.js  ← 新增章節只需改這裡！
//
// 步驟：
//   1. 把新的 ch__.js 放進 data/ 資料夾
//   2. 在下方 CHAPTER_FILES 加一行路徑
//   3. 完成 ✅
// ═══════════════════════════════════════════════════════

const CHAPTER_FILES = [
  "./data/ch48.js",
  // "./data/ch01.js",   ← 未來新增章節在這裡加
  // "./data/ch12.js",
];

// ── 動態載入所有章節（app.js 會呼叫這個）──────────────
async function loadAllChapters() {
  const results = [];
  for (const file of CHAPTER_FILES) {
    await loadScript(file);
  }
  // 載入後從 window 上收集所有章節物件
  // 每個 ch__.js 會定義一個全域變數（如 CH48、CH01…）
  return results;
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    // 避免重複載入
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve(); return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = () => { console.warn(`⚠️ 無法載入 ${src}`); resolve(); };
    document.head.appendChild(s);
  });
}

// 從載入的 chapter 檔案中自動收集所有章節資料
// 慣例：每個 ch__.js 最後要 export 一個全域變數，名稱格式為 CH + 數字（如 CH48）
function collectChapters() {
  const chapters = [];
  // 掃描 window 上所有 CH__ 開頭的變數
  for (const key of Object.keys(window)) {
    if (/^CH\d+$/.test(key) && window[key]?.cards) {
      chapters.push(window[key]);
    }
  }
  // 依 id 排序
  chapters.sort((a, b) => a.id.localeCompare(b.id));
  return chapters;
}

// ═══════════════════════════════════════════════════════
// data/index.js
//
// ✅ GitHub Pages 版本：章節由 index.html 的 <script> 直接載入
// 這個檔案只負責「收集」已載入的章節物件，不需要手動改這裡。
//
// 要新增章節，只需：
//   1. 把 ch__.js 放進 data/ 資料夾
//   2. 在 index.html 加一行 <script src="data/ch__.js"></script>
//   3. 完成 ✅
// ═══════════════════════════════════════════════════════

// 從 window 上自動收集所有 CH__ 開頭的章節物件
// （每個 ch__.js 會定義一個全域變數，如 CH48、CH01…）
function collectChapters() {
  const chapters = [];
  for (const key of Object.keys(window)) {
    if (/^CH\d+$/.test(key) && window[key]?.cards) {
      chapters.push(window[key]);
    }
  }
  // 依 id 排序（ch01 → ch12 → ch48…）
  chapters.sort((a, b) => a.id.localeCompare(b.id));
  return chapters;
}

// app.js 初始化時會呼叫這個，保持介面一致
async function loadAllChapters() {
  // GitHub Pages 版本：章節已由 <script> 靜態載入，這裡不需要做任何事
  return;
}


// ═══════════════════════════════════════════════════════
// data/index.js — 章節收集器（不需要動）
// 新增章節：
//   1. 把 ch__.js 放進 data/ 資料夾
//   2. 在 index.html 的 CHAPTERS:START 區塊加一行 <script>
// ═══════════════════════════════════════════════════════

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

async function loadAllChapters() {
  return;
}

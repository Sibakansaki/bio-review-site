// ═══════════════════════════════════════
// github-api.js — 存回 GitHub 的邏輯
// ═══════════════════════════════════════

// 取得某個檔案在 GitHub 上的內容與 SHA
async function githubGetFile(path) {
  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${path}?ref=${GITHUB_CONFIG.branch}`,
    { headers: { Authorization: `token ${GITHUB_CONFIG.token}` } }
  );
  if (!res.ok) throw new Error(`無法取得檔案：${path}（${res.status}）`);
  return res.json(); // { sha, content, ... }
}

// 把更新後的卡片資料存回 GitHub
async function saveCardToGitHub(card) {
  // 找出這張卡屬於哪個章節檔案
  const chapterId = card.id.split('-')[0]; // 例如 ch48-001 → ch48
  const filePath  = `data/${chapterId}.js`;

  // 1. 取得目前的檔案（需要 SHA 才能更新）
  const fileInfo = await githubGetFile(filePath);
  const currentContent = atob(fileInfo.content.replace(/\n/g, ''));

  // 2. 在記憶體中更新 summary 和 logic
  const updatedContent = patchCardContent(currentContent, card);

  if (updatedContent === currentContent) {
    return { status: 'unchanged' };
  }

  // 3. 用 GitHub API 寫回
  const body = {
    message: `update: ${card.id} summary/logic`,
    content: btoa(unescape(encodeURIComponent(updatedContent))),
    sha:     fileInfo.sha,
    branch:  GITHUB_CONFIG.branch,
  };

  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${filePath}`,
    {
      method:  'PUT',
      headers: {
        Authorization:  `token ${GITHUB_CONFIG.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  );

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || `儲存失敗（${res.status}）`);
  }

  return { status: 'saved' };
}

// 用字串替換的方式更新 JS 檔案中特定卡片的 summary 和 logic
// （因為 JS 不是 JSON，直接用 regex 定位替換最穩）
function patchCardContent(content, card) {
  let updated = content;

  // 找到這張卡片的區塊（從 id 開始到下一張卡片或結尾）
  // 用 summary 和 logic 的精確值替換
  updated = replaceField(updated, card.id, 'summary', card.summary);
  updated = replaceField(updated, card.id, 'logic',   card.logic);

  return updated;
}

// 替換指定 card id 區塊內的指定欄位值
function replaceField(content, cardId, field, newValue) {
  // 找到卡片 id 的位置
  const idPattern = new RegExp(`id:\\s*["']${escapeRegex(cardId)}["']`);
  const idMatch   = content.match(idPattern);
  if (!idMatch) return content;

  const idIndex = content.indexOf(idMatch[0]);

  // 找到下一個 id: 的位置（下一張卡）或字串結尾
  const nextIdMatch = content.slice(idIndex + 1).match(/\bid:\s*["']ch\d+-\d+["']/);
  const blockEnd    = nextIdMatch
    ? idIndex + 1 + content.slice(idIndex + 1).indexOf(nextIdMatch[0])
    : content.length;

  const block    = content.slice(idIndex, blockEnd);
  const newBlock = replaceFieldInBlock(block, field, newValue);

  return content.slice(0, idIndex) + newBlock + content.slice(blockEnd);
}

function replaceFieldInBlock(block, field, newValue) {
  // 匹配：  field: "...", 或 field: '...',（單行或多行）
  // 先試單行
  const singleLine = new RegExp(
    `(${escapeRegex(field)}:\\s*)(['"\`])([\\s\\S]*?)\\2(,?)`,
    'm'
  );

  // 把新值中的特殊字元跳脫
  const safeValue = newValue
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"');

  return block.replace(singleLine, `$1"${safeValue}"$4`);
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

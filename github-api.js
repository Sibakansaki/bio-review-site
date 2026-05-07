// ═══════════════════════════════════════
// github-api.js — 存回 GitHub 的邏輯
// ═══════════════════════════════════════

// UTF-8 安全的 base64 編碼（支援中文）
function toBase64(str) {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      (_, p1) => String.fromCharCode(parseInt(p1, 16))
    )
  );
}

// UTF-8 安全的 base64 解碼（支援中文）
function fromBase64(b64) {
  return decodeURIComponent(
    atob(b64).split('').map(
      c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    ).join('')
  );
}

// 取得某個檔案在 GitHub 上的內容與 SHA
async function githubGetFile(path) {
  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${path}?ref=${GITHUB_CONFIG.branch}`,
    { headers: { Authorization: `token ${GITHUB_CONFIG.token}` } }
  );
  if (!res.ok) throw new Error(`無法取得檔案：${path}（${res.status}）`);
  return res.json();
}

// 把更新後的卡片資料存回 GitHub
async function saveCardToGitHub(card) {
  const chapterId = card.id.split('-')[0];
  const filePath  = `data/${chapterId}.js`;

  // 1. 取得目前的檔案（需要 SHA 才能更新）
  const fileInfo = await githubGetFile(filePath);

  // 用 UTF-8 安全解碼
  const currentContent = fromBase64(fileInfo.content.replace(/\n/g, ''));

  // 2. 替換 summary 和 logic
  const updatedContent = patchCardContent(currentContent, card);

  if (updatedContent === currentContent) {
    return { status: 'unchanged' };
  }

  // 3. 用 UTF-8 安全編碼後寫回 GitHub
  const body = {
    message: `update: ${card.id} summary/logic`,
    content: toBase64(updatedContent),
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

// 替換 JS 檔案中特定卡片的 summary 和 logic
function patchCardContent(content, card) {
  let updated = content;
  updated = replaceField(updated, card.id, 'summary', card.summary);
  updated = replaceField(updated, card.id, 'logic',   card.logic);
  return updated;
}

function replaceField(content, cardId, field, newValue) {
  const idPattern = new RegExp(`id:\\s*["']${escapeRegex(cardId)}["']`);
  const idMatch   = content.match(idPattern);
  if (!idMatch) return content;

  const idIndex = content.indexOf(idMatch[0]);

  const nextIdMatch = content.slice(idIndex + 1).match(/\bid:\s*["']ch\d+-\d+["']/);
  const blockEnd    = nextIdMatch
    ? idIndex + 1 + content.slice(idIndex + 1).indexOf(nextIdMatch[0])
    : content.length;

  const block    = content.slice(idIndex, blockEnd);
  const newBlock = replaceFieldInBlock(block, field, newValue);

  return content.slice(0, idIndex) + newBlock + content.slice(blockEnd);
}

function replaceFieldInBlock(block, field, newValue) {
  const pattern = new RegExp(
    `(${escapeRegex(field)}:\\s*)(['"\`])([\\s\\S]*?)\\2(,?)`,
    'm'
  );
  const safeValue = newValue
    .replace(/\\/g, '\\\\')
    .replace(/"/g,  '\\"');

  return block.replace(pattern, `$1"${safeValue}"$4`);
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

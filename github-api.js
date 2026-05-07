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

// 取得某個檔案在 GitHub 上的內容與 SHA（加時間戳避免快取）
async function githubGetFile(path) {
  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${path}?ref=${GITHUB_CONFIG.branch}&t=${Date.now()}`,
    { headers: { Authorization: `token ${GITHUB_CONFIG.token}` } }
  );
  if (!res.ok) throw new Error(`無法取得檔案：${path}（${res.status}）`);
  return res.json();
}

// 寫入檔案到 GitHub
async function githubPutFile(path, content, sha, message) {
  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${path}`,
    {
      method:  'PUT',
      headers: {
        Authorization:  `token ${GITHUB_CONFIG.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        content: toBase64(content),
        sha,
        branch: GITHUB_CONFIG.branch,
      }),
    }
  );
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || `寫入失敗（${res.status}）`);
  }
  return res.json();
}

// 把更新後的卡片資料存回 GitHub
async function saveCardToGitHub(card) {
  const chapterId = card.id.split('-')[0];
  const filePath  = `data/${chapterId}.js`;

  // 1. 取得目前的章節檔案
  const fileInfo = await githubGetFile(filePath);
  const currentContent = fromBase64(fileInfo.content.replace(/\n/g, ''));

  // 2. 替換 summary 和 logic
  const updatedContent = patchCardContent(currentContent, card);
  if (updatedContent === currentContent) {
    return { status: 'unchanged' };
  }

  // 3. 存回章節檔案
  await githubPutFile(
    filePath,
    updatedContent,
    fileInfo.sha,
    `update: ${card.id} summary/logic`
  );

  // 4. 更新 index.html 版本號，讓瀏覽器強制重新抓新版章節檔
  try {
    const indexInfo = await githubGetFile('index.html');
    const indexContent = fromBase64(indexInfo.content.replace(/\n/g, ''));
    const newVersion = Date.now();
    const updatedIndex = indexContent.replace(
      new RegExp(`(data/${chapterId}\\.js)(\\?v=\\d+)?`),
      `data/${chapterId}.js?v=${newVersion}`
    );
    if (updatedIndex !== indexContent) {
      await githubPutFile(
        'index.html',
        updatedIndex,
        indexInfo.sha,
        `chore: bump ${chapterId} version`
      );
    }
  } catch (e) {
    console.warn('版本號更新失敗（不影響內容儲存）:', e);
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

// ═══════════════════════════════════════
// config.js — GitHub 設定
// ⚠️ token 不放在這裡，改從網頁設定輸入
// ═══════════════════════════════════════

const GITHUB_CONFIG = {
  owner:  'Sibakansaki',
  repo:   'bio-review-site',
  branch: 'main',

  // token 從 localStorage 讀取，不寫死在程式碼裡
  get token() {
    return localStorage.getItem('github_token') || '';
  }
};

# 🧬 生物觀念複習站 Bio Review Site

從錯題出發，精準複習每一個觀念的個人生物複習網站。支援多章節管理、卡片瀏覽與測驗模式。

---

## 📁 檔案結構

```
repo/
├── .github/
│   └── workflows/
│       └── update-chapters.yml   # GitHub Actions 自動化腳本
├── data/
│   ├── index.js                  # 章節收集器（不需要動）
│   └── ch48.js                   # CH48 神經系統
├── index.html                    # HTML 骨架
├── style.css                     # 所有樣式
└── app.js                        # 所有互動邏輯
```

---

## ✨ 功能說明

### 首頁
- 顯示所有章節卡片與總卡片數
- 點擊章節直接跳到對應的瀏覽頁
- 一鍵「全部隨機測驗」快速開始

### 瀏覽卡片
- 依章節篩選或關鍵字搜尋（搜觀念、標籤、內容皆可）
- 每張卡片點擊可展開，看到：
  - 核心觀念摘要與記憶邏輯（`→` 串連）
  - 常見陷阱說明
  - 原始題目與選項（標示錯誤與正確答案）

### 測驗模式
- 選擇章節範圍（單一章節或全部混合）
- 選擇題數（5 題 / 10 題 / 全部）
- 答題後即時顯示對錯、邏輯脈絡、陷阱提示
- 結束後顯示成績，並列出所有答錯題目

---

## ➕ 新增章節（只要丟檔案就好）

### Step 1 — 建立章節資料檔

在 `data/` 資料夾新增 `ch__.js`，格式如下：

```js
const CH01 = {
  id: "ch01",
  title: "細胞的化學組成",
  color: "#4ECDC4",   // 章節代表色（任意 hex）
  emoji: "⚗️",
  cards: [
    {
      id: "ch01-001",
      status: "needs",
      concept: "觀念標題（10字以內）",
      tags: ["標籤1", "標籤2", "標籤3"],
      summary: "核心觀念說明，2–3句，白話清楚。",
      logic: "記憶邏輯 → 用箭頭串連因果",
      pitfall: "針對這題錯誤選項的陷阱說明。",
      sourceQuestion: {
        school: "104 慈濟",
        question: "完整題幹...",
        options: { A: "選項A", B: "選項B", C: "選項C", D: "選項D" },
        wrong: "B",
        correct: "A"
      }
    }
  ]
};
```

> 變數名稱規則：`CH` + 章節數字，例如 `CH01`、`CH12`、`CH48`。

### Step 2 — Push 到 GitHub

```bash
git add .
git commit -m "add ch01"
git push
```

**GitHub Actions 會自動：**
1. 偵測到 `data/` 有新的 `ch*.js`
2. 更新 `index.html` 的 `<script>` 區塊
3. Commit + push 回 repo
4. 網站自動更新 ✅

> **覆蓋既有章節**（如重新上傳 `ch48.js`）不需要任何額外步驟，直接 push 即可，Actions 不會觸發但網站內容會自動更新。

---

## ⚙️ GitHub 初次設定（只需做一次）

**1. 開啟 Actions 寫入權限**

`Settings → Actions → General → Workflow permissions`
→ 選 **Read and write permissions** → Save

**2. 開啟 GitHub Pages**

`Settings → Pages → Source`
→ 選 **Deploy from a branch**
→ Branch 選 **main**，資料夾選 **/ (root)** → Save

網站會在 `https://你的帳號.github.io/repo名稱/` 上線。

---

## 🃏 卡片欄位說明

| 欄位 | 說明 |
|------|------|
| `id` | 卡片唯一識別碼，格式 `ch48-001`（章節-流水號） |
| `status` | 固定填 `"needs"` |
| `concept` | 觀念標題，10 字以內 |
| `tags` | 2–4 個關鍵字標籤 |
| `summary` | 核心觀念說明，2–3 句白話文 |
| `logic` | 記憶邏輯，用 `→` 串連因果關係 |
| `pitfall` | 針對這題錯誤選項的具體陷阱說明 |
| `sourceQuestion.school` | 格式：`年份 學校名`，如 `104 慈濟` |
| `sourceQuestion.correct` | 正確答案，複選題可填 `"CD"` |
| `sourceQuestion.wrong` | 原本作答的錯誤選項 |

---

## 📝 配合 AI 萃取卡片

本網站設計搭配 AI 工具從錯題本自動產出卡片資料：

1. 上傳錯題本 PDF（手寫或掃描皆可）
2. AI 辨識錯題、萃取觀念，輸出符合上述格式的 `ch__.js`
3. 把檔案丟進 `data/` → push → 完成

---

## 🎨 自訂樣式

修改 `style.css` 的 `:root` 區塊即可調整全站配色：

```css
:root {
  --bg:      #FFFBF0;   /* 背景色 */
  --surface: #FFFFFF;   /* 卡片底色 */
  --accent1: #FF6B6B;   /* 紅色強調 */
  --accent2: #FFD93D;   /* 黃色強調 */
  --accent3: #6BCB77;   /* 綠色強調 */
  --accent4: #4D96FF;   /* 藍色強調 */
  --accent5: #C77DFF;   /* 紫色強調 */
}
```

---

## 🛠️ 技術說明

- 純前端，無框架，無需 Node.js 或任何建置工具
- 章節資料以獨立 `.js` 檔案管理，由 GitHub Actions 自動維護 `<script>` 標籤
- 使用 Google Fonts：`Nunito`（標題）+ `Noto Sans TC`（內文）
- 所有樣式以 CSS Variables 管理

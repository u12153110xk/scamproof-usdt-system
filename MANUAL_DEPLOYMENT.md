# 🚀 手動部署步驟（無需 Git）

## 方案一：使用 GitHub Desktop（推薦）

### 第一步：安裝 GitHub Desktop
1. 前往 https://desktop.github.com
2. 下載並安裝 GitHub Desktop
3. 用您的 GitHub 帳號登入

### 第二步：創建 Repository
1. 在 GitHub Desktop 中點擊 "Create a New Repository on your hard drive"
2. Name: `scamproof-usdt-system`
3. Local Path: 選擇您的專案資料夾 `C:\Users\user\Desktop\USDT`
4. 勾選 "Initialize this repository with a README"
5. 點擊 "Create Repository"

### 第三步：發布到 GitHub
1. 點擊 "Publish repository"
2. 取消勾選 "Keep this code private"（選擇 public）
3. 點擊 "Publish Repository"

---

## 方案二：直接在 GitHub 網站創建

### 第一步：創建 GitHub Repository
1. 前往 https://github.com
2. 點擊右上角 "+" → "New repository"
3. Repository name: `scamproof-usdt-system`
4. 選擇 Public
5. 點擊 "Create repository"

### 第二步：上傳檔案
1. 在新 repository 頁面點擊 "uploading an existing file"
2. 將您的專案資料夾中的所有檔案拖拽上傳
3. 輸入 commit message: "Initial commit"
4. 點擊 "Commit changes"

---

## 第三步：在 Railway 部署 🚀

### 3.1 註冊 Railway
1. 前往 https://railway.app
2. 點擊 "Login" → "Login with GitHub"
3. 授權 Railway 訪問您的 GitHub

### 3.2 部署專案
1. 點擊 "New Project"
2. 選擇 "Deploy from GitHub repo"
3. 選擇 `scamproof-usdt-system`
4. Railway 會自動開始部署

### 3.3 配置環境變數
1. 在 Railway 專案頁面，點擊您的服務
2. 前往 "Variables" 標籤
3. 添加以下變數：
```
JWT_SECRET=ScamProof_Super_Secret_Key_2025_Please_Change_This
NODE_ENV=production
```

### 3.4 獲取部署 URL
部署完成後，點擊 "View Logs"，找到類似這樣的 URL：
```
https://scamproof-usdt-system-production-xxxx.up.railway.app
```

---

## 第四步：更新前端 API 配置

### 4.1 修改 API 配置
```javascript
// 將 src/services/api.js 第 8 行的 URL 更改為：
return 'https://您從Railway獲取的URL/api'
```

### 4.2 重建並部署
```bash
npm run build
firebase deploy --only hosting
```

---

## 🎯 快速執行清單

- [ ] 安裝 GitHub Desktop 或使用網頁版
- [ ] 創建 GitHub repository
- [ ] 上傳專案檔案
- [ ] 在 Railway 部署
- [ ] 設置環境變數
- [ ] 獲取 Railway URL
- [ ] 更新前端 API 配置
- [ ] 重新部署前端

---

## 📞 需要協助？

如果您在任何步驟遇到問題，請告訴我：
1. 您完成到哪一步了？
2. 遇到什麼錯誤訊息？
3. 您的 Railway URL 是什麼？

我會協助您解決問題！

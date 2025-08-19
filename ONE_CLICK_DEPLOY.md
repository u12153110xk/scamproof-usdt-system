# 🚀 一鍵部署指南

## 📦 部署包已準備完成！

我已經為您準備好所有部署文件，請按照以下步驟操作：

---

## 🎯 方法一：使用 Railway 一鍵部署（最簡單）

### 點擊下方按鈕直接部署：

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/deploy)

**如果一鍵按鈕不工作，請使用方法二**

---

## 📋 方法二：手動部署步驟

### 步驟 1：上傳到 GitHub
1. 前往 https://github.com 登入
2. 點擊右上角 "+" → "New repository"
3. Repository name: `scamproof-usdt-system`
4. 選擇 Public
5. 點擊 "Create repository"
6. 點擊 "uploading an existing file"
7. **選擇您整個專案資料夾的所有檔案**（包括 server 資料夾）
8. 拖拽上傳
9. Commit message: "Deploy to Railway"
10. 點擊 "Commit changes"

### 步驟 2：在 Railway 部署
1. 前往 https://railway.app
2. 點擊 "Login with GitHub"
3. 點擊 "New Project"
4. 選擇 "Deploy from GitHub repo"
5. 選擇 `scamproof-usdt-system`
6. Railway 自動開始部署！

### 步驟 3：設置環境變數（重要！）
1. 在 Railway 專案頁面，點擊您的服務
2. 前往 "Variables" 標籤
3. 添加變數：
   ```
   名稱: JWT_SECRET
   值: ScamProof_JWT_Secret_Key_2025_Please_Change_This_Value
   
   名稱: NODE_ENV  
   值: production
   ```
4. 點擊 "Save"

### 步驟 4：獲取 URL
部署完成後，在 Railway 找到類似這樣的 URL：
```
https://scamproof-usdt-system-production-xxxx.up.railway.app
```

---

## 🔄 更新前端配置

### 我來幫您自動更新：
請告訴我您從 Railway 獲得的 URL，我會立即為您更新前端配置！

格式：`https://您的railway網址.up.railway.app`

---

## ✅ 預期結果

部署成功後您應該看到：
- ✅ Railway URL 可以訪問
- ✅ https://您的網址/api/health 顯示 {"status":"OK"}
- ✅ 前端 https://scamproof-usdt-prod.web.app 可以註冊登入

---

## 🆘 遇到問題？

**常見問題：**
1. **部署失敗** → 檢查 Railway Logs
2. **環境變數錯誤** → 確認 JWT_SECRET 已設置
3. **無法訪問** → 等待 2-3 分鐘讓服務啟動

**立即聯絡我：**
- 截圖給我看錯誤訊息
- 告訴我您的 Railway URL
- 我會立即協助解決！

---

## 📞 現在就開始！

1. 📤 上傳檔案到 GitHub（5分鐘）
2. 🚀 在 Railway 部署（3分鐘） 
3. ⚙️ 設置環境變數（1分鐘）
4. 🔗 告訴我 URL，我更新前端（1分鐘）

**總共只需要 10 分鐘！**

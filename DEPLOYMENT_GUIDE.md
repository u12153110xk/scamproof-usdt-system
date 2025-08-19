# 🚀 ScamProof USDT 完整部署指南

## 📋 部署概覽
- **前端**: Firebase Hosting (✅ 已完成)
- **後端**: Railway (待部署)
- **資料庫**: SQLite on Railway

---

## 🎯 第一步：Railway 後端部署

### 1.1 準備 Railway 帳戶
1. 前往 [Railway.app](https://railway.app)
2. 使用 GitHub 帳號註冊/登入

### 1.2 上傳代碼到 GitHub
```bash
# 如果還沒有 Git repository
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 1.3 在 Railway 部署
1. 點擊 **「New Project」**
2. 選擇 **「Deploy from GitHub repo」**
3. 選擇您的 USDT 專案
4. Railway 自動偵測並部署

### 1.4 設定環境變數
在 Railway 專案的 **Variables** 標籤中添加：
```
JWT_SECRET=請生成32位隨機字串
NODE_ENV=production
```

### 1.5 獲取 Railway URL
部署完成後，複製 Railway 提供的 URL，格式如：
```
https://scamproof-usdt-production-xxxx.up.railway.app
```

---

## 🔧 第二步：更新 API 配置

### 2.1 更新 API URL
編輯 `src/services/api.js` 第 8 行：
```javascript
return 'https://您的Railway網址/api'
```

### 2.2 重建前端
```bash
npm run build
```

### 2.3 重新部署到 Firebase
```bash
firebase deploy --only hosting
```

---

## 🎉 第三步：測試部署

### 3.1 訪問您的應用
- **前端**: https://scamproof-usdt-prod.web.app
- **後端**: https://您的Railway網址/api/health

### 3.2 測試功能
1. 註冊新用戶
2. 登入系統
3. 創建案件
4. 查詢警示地址

---

## 💡 重要提醒

### 安全設置
- [ ] 更改 JWT_SECRET 為強密碼
- [ ] 檢查 CORS 設定
- [ ] 定期備份資料庫

### 監控
- [ ] 設置 Railway 監控警報
- [ ] 檢查 Firebase Hosting 使用量
- [ ] 監控 API 回應時間

### 後續維護
- [ ] 定期更新依賴套件
- [ ] 監控安全漏洞
- [ ] 備份資料庫檔案

---

## 🔗 重要連結

- **Firebase Console**: https://console.firebase.google.com/project/scamproof-usdt-prod
- **應用程式**: https://scamproof-usdt-prod.web.app
- **Railway Dashboard**: https://railway.app/dashboard

---

## 🆘 故障排除

### 常見問題
1. **CORS 錯誤**: 檢查後端 CORS 設定
2. **API 連接失敗**: 確認 Railway URL 正確
3. **認證錯誤**: 檢查 JWT_SECRET 設定

### 聯絡支援
如遇到問題，請檢查：
- Railway 部署日誌
- Firebase Hosting 錯誤訊息
- 瀏覽器開發者工具 Console

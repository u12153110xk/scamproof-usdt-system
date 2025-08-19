# 🚀 Railway 後端部署指南

## 步驟 1：準備 Railway 帳戶
1. 前往 [Railway.app](https://railway.app)
2. 使用 GitHub 帳號註冊/登入

## 步驟 2：部署後端
1. 點擊 **「New Project」**
2. 選擇 **「Deploy from GitHub repo」**
3. 選擇您的 USDT 專案 repository
4. Railway 會自動偵測 Node.js 專案

## 步驟 3：設定環境變數
在 Railway 專案設定中添加以下環境變數：

```bash
# JWT 安全金鑰 (請生成您自己的安全金鑰)
JWT_SECRET=your_super_secret_jwt_key_here_please_change_this

# 環境設定
NODE_ENV=production

# 資料庫 (Railway 會自動提供)
DATABASE_URL=自動設定
```

## 步驟 4：獲取 Railway URL
部署完成後，Railway 會提供一個 URL，格式如：
```
https://your-app-name-production.up.railway.app
```

## 步驟 5：更新前端配置
將 Railway URL 更新到前端 API 配置中。

## 步驟 6：重新部署前端
更新 API 配置後重新部署前端。

---

## 💡 重要提醒
- **JWT_SECRET**: 請使用強密碼生成器創建安全金鑰
- **CORS**: 已預配置支援您的 Firebase 前端域名
- **資料庫**: SQLite 在 Railway 上運作良好
- **免費額度**: Railway 每月提供 $5 免費額度

## 🔧 故障排除
- 如果部署失敗，檢查 Railway 日誌
- 確保 `server/package.json` 中有正確的 start 腳本
- 檢查環境變數是否正確設定

# 🚀 立即部署 - 逐步操作指南

## 📋 現在就執行這些步驟：

### **第一步：上傳到 GitHub（現在開始！）**

1. 🌐 **開啟瀏覽器**，前往 https://github.com
2. 🔑 **登入您的 GitHub 帳號**
3. ➕ **點擊右上角 "+" 按鈕** → 選擇 "New repository"
4. 📝 **填寫資料**：
   - Repository name: `scamproof-usdt-system`
   - 選擇 **Public**
   - **不要**勾選任何其他選項
   - 點擊 **"Create repository"**

5. 📤 **上傳檔案**：
   - 在新建的空 repository 頁面
   - 點擊 **"uploading an existing file"** 連結
   - 打開檔案管理員，前往 `C:\Users\user\Desktop\USDT`
   - **全選所有檔案和資料夾**（Ctrl+A）
   - **拖拽到 GitHub 上傳區域**
   - 等待上傳完成
   - 在下方輸入: `Deploy ScamProof USDT System`
   - 點擊 **"Commit changes"**

---

### **第二步：Railway 部署（GitHub 完成後立即執行）**

1. 🚂 **開啟新分頁**，前往 https://railway.app
2. 🔐 **點擊 "Login"** → 選擇 **"Login with GitHub"**
3. ✅ **授權 Railway** 訪問您的 GitHub
4. 🆕 **點擊 "New Project"**
5. 📦 **選擇 "Deploy from GitHub repo"**
6. 🎯 **選擇 `scamproof-usdt-system`** repository
7. ⚡ **Railway 開始自動部署**（等待 2-3 分鐘）

---

### **第三步：設置環境變數（部署完成後立即執行）**

1. 在 Railway 專案頁面，**點擊您的服務**
2. 前往 **"Variables"** 標籤
3. **點擊 "Add Variable"** 添加第一個變數：
   ```
   Name: JWT_SECRET
   Value: ScamProof_JWT_Secret_Key_2025_Change_This_In_Production
   ```
4. **再次點擊 "Add Variable"** 添加第二個變數：
   ```
   Name: NODE_ENV
   Value: production
   ```
5. 點擊 **"Save"**

---

### **第四步：獲取 Railway URL**

部署完成後，在 Railway 頁面您會看到：
```
✅ Deployed
🌐 https://scamproof-usdt-system-production-xxxx.up.railway.app
```

**複製這個 URL 並告訴我！**

---

## 🎯 現在開始第一步！

**請立即**：
1. 打開 https://github.com
2. 創建新 repository
3. 上傳所有檔案

**完成後告訴我：** "GitHub 完成了"

我會立即指導您下一步！

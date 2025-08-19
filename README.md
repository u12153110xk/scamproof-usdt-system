# ScamProof™ - USDT/多鏈詐騙自救舉證系統

> **Track. Prove. Recover.**

ScamProof™ 是一個專業的區塊鏈詐騙追蹤與第三方託管交易平台，為受害者提供標準化舉證工具，同時為買賣雙方提供安全的交易環境。

## 🎯 系統特色

### 🔍 **智能追蹤系統**
- **多鏈支援**: TRON、ETH、BSC 區塊鏈
- **即時監控**: 可疑地址自動風險評分
- **資金流向**: 視覺化交易路徑追蹤
- **真實數據**: 直接連接區塊鏈瀏覽器 API

### 🛡️ **分級權限控制**
- **免費用戶**: 舉報可疑地址、查詢警示/黑名單、基本追蹤
- **付費用戶**: 證據生成、律師媒合、完整分析報告
- **管理員**: 案件審核、KYC 驗證、系統管理

### 📋 **三層防護體系**
1. **舉報系統**: 用戶可舉報可疑加密地址
2. **警示通報**: 有報案記錄的地址自動警示（建議拒絕來往）
3. **黑名單**: 有法院裁判證據的地址（絕對禁止）

### 💼 **第三方交易平台**
- **KYC 驗證**: 身份認證與加密地址綁定
- **智能合約**: 自動生成法律合約
- **律師媒合**: 專業律師配對服務
- **多語言支援**: 中文、英文、日文、韓文

## 🚀 快速開始

### 環境要求
- Node.js 18+
- npm 或 yarn
- SQLite 3

### 安裝步驟

1. **克隆專案**
```bash
git clone <repository-url>
cd USDT
```

2. **安裝前端依賴**
```bash
npm install
```

3. **安裝後台依賴**
```bash
cd server
npm install
```

4. **啟動後台服務**
```bash
cd server
node server.js
```

5. **啟動前端開發服務**
```bash
npm run dev
```

6. **建置生產版本**
```bash
npm run build
npm run preview
```

## 📊 功能模組

### 🔐 認證系統
- **用戶註冊/登入**: JWT 認證
- **角色管理**: 用戶、管理員、付費用戶
- **KYC 驗證**: 身份認證與加密地址綁定

### 📝 案件管理
- **案件創建**: 記錄詐騙案件詳情
- **進度追蹤**: 案件處理狀態管理
- **證據收集**: 自動化證據包生成

### 🔍 錢包監控
- **地址搜索**: 多鏈地址查詢
- **風險評分**: 基於交易模式的自動評分
- **即時警報**: 可疑活動自動通知

### 📋 舉報系統
- **可疑地址舉報**: 用戶可舉報可疑地址
- **證據上傳**: 支援文字描述與文件證據
- **審核流程**: 管理員審核舉報內容

### ⚠️ 警示系統
- **警示地址查詢**: 查詢是否有報案記錄
- **風險等級**: 低、中、高風險分類
- **建議處理**: 自動生成處理建議

### 🚫 黑名單系統
- **法院裁判**: 有法院判決的地址
- **證據驗證**: 官方證據文件驗證
- **絕對禁止**: 黑名單地址絕對禁止交易

### 📄 證據生成 (付費功能)
- **標準化報告**: 自動生成法律證據包
- **多格式輸出**: PDF、JSON 格式支援
- **數位簽名**: SHA-256 雜湊驗證

### 👨‍💼 律師媒合 (付費功能)
- **專業律師**: 驗證過的專業律師
- **智能配對**: 根據專長與語言配對
- **評分系統**: 律師評分與案例統計

### 💱 交易平台
- **商品/服務**: 支援實體商品與虛擬服務
- **智能合約**: 自動生成法律合約
- **託管服務**: 安全的第三方託管
- **爭議解決**: 專業仲裁機制

## 🔧 API 端點

### 認證 API
- `POST /api/auth/register` - 用戶註冊
- `POST /api/auth/login` - 用戶登入

### 案件管理 API
- `GET /api/cases` - 獲取案件列表
- `POST /api/cases` - 創建新案件
- `PUT /api/cases/:id/status` - 更新案件狀態 (管理員)

### 舉報系統 API (免費)
- `POST /api/reports` - 提交舉報
- `GET /api/reports` - 獲取舉報列表

### 警示系統 API (免費)
- `GET /api/alerts/:address` - 查詢警示地址

### 黑名單 API (免費)
- `GET /api/blacklist/:address` - 查詢黑名單

### 付費功能 API
- `POST /api/evidence/generate` - 生成證據 (付費)
- `GET /api/lawyers` - 律師媒合 (付費)

### KYC 管理 API
- `POST /api/kyc` - 提交 KYC 資料
- `GET /api/kyc` - 獲取 KYC 資料
- `PUT /api/kyc/:userId/verify` - KYC 審核 (管理員)

### 交易平台 API
- `POST /api/trades` - 創建交易
- `GET /api/trades` - 獲取交易列表

### 錢包監控 API
- `POST /api/monitor` - 添加錢包監控
- `GET /api/monitor` - 獲取監控列表

### 統計資料 API
- `GET /api/stats` - 獲取統計資料

## 🎨 技術架構

### 前端技術
- **React 18**: 現代化 UI 框架
- **Vite**: 快速建置工具
- **Tailwind CSS**: 實用優先的 CSS 框架
- **Framer Motion**: 流暢動畫效果
- **React Router**: 單頁應用路由
- **React Query**: 數據獲取與快取
- **i18next**: 國際化支援

### 後台技術
- **Express.js**: Node.js Web 框架
- **SQLite**: 輕量級資料庫
- **JWT**: 身份認證
- **bcryptjs**: 密碼加密
- **Helmet**: 安全中間件
- **CORS**: 跨域請求處理

### 區塊鏈整合
- **Web3.js**: Ethereum 互動
- **Ethers.js**: 以太坊工具庫
- **區塊鏈瀏覽器 API**: Etherscan、BscScan、TronScan

## 🔒 安全特性

- **JWT 認證**: 安全的身份驗證
- **密碼加密**: bcrypt 雜湊加密
- **CORS 保護**: 跨域請求控制
- **速率限制**: API 請求頻率控制
- **輸入驗證**: 完整的數據驗證
- **SQL 注入防護**: 參數化查詢

## 🌍 國際化支援

- **繁體中文**: 主要語言
- **English**: 英文支援
- **日本語**: 日文支援
- **한국어**: 韓文支援

## 📱 響應式設計

- **桌面端**: 完整功能體驗
- **平板端**: 適配中等螢幕
- **手機端**: 移動端優化

## 🚀 部署指南

### 開發環境
```bash
# 前端開發
npm run dev

# 後台開發
cd server
node server.js
```

### 生產環境
```bash
# 建置前端
npm run build

# 啟動後台
cd server
NODE_ENV=production node server.js
```

## 📞 管理員帳戶

預設管理員帳戶：
- **用戶名**: admin
- **郵箱**: admin@scamproof.com
- **密碼**: admin123456

## 🤝 貢獻指南

1. Fork 專案
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📄 授權條款

本專案採用 MIT 授權條款 - 詳見 [LICENSE](LICENSE) 文件

## 📞 聯絡資訊

- **專案維護者**: ScamProof Team
- **電子郵件**: support@scamproof.com
- **專案網站**: https://scamproof.com

## 🙏 致謝

感謝所有為反詐騙事業做出貢獻的開發者與用戶。

---

**ScamProof™ - 讓區塊鏈更安全，讓受害者有希望。** 
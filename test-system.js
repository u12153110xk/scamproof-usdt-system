const axios = require('axios');

const API_BASE_URL = 'http://localhost:3001/api';

// 測試數據
const testUser = {
  username: 'testuser',
  email: 'test@example.com',
  password: 'test123456'
};

const testCase = {
  title: '測試詐騙案件',
  description: '這是一個測試案件',
  amount: 1000,
  currency: 'USDT',
  blockchain: 'TRON',
  victim_wallet: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
  scammer_wallet: 'TQn9Y2khDD95J42FQtQTdwVVR93ojPmop'
};

const testReport = {
  address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
  blockchain: 'TRON',
  report_type: 'suspicious',
  description: '可疑的詐騙地址',
  evidence: '用戶舉報證據'
};

async function testSystem() {
  console.log('🧪 開始測試 ScamProof 系統...\n');

  try {
    // 1. 測試健康檢查
    console.log('1. 測試健康檢查...');
    const healthResponse = await axios.get(`${API_BASE_URL}/health`);
    console.log('✅ 健康檢查通過:', healthResponse.data);

    // 2. 測試用戶註冊
    console.log('\n2. 測試用戶註冊...');
    const registerResponse = await axios.post(`${API_BASE_URL}/auth/register`, testUser);
    console.log('✅ 用戶註冊成功:', registerResponse.data.user.username);

    // 3. 測試用戶登入
    console.log('\n3. 測試用戶登入...');
    const loginResponse = await axios.post(`${API_BASE_URL}/auth/login`, {
      username: testUser.username,
      password: testUser.password
    });
    const token = loginResponse.data.token;
    console.log('✅ 用戶登入成功:', loginResponse.data.user.username);

    // 4. 測試案件創建
    console.log('\n4. 測試案件創建...');
    const caseResponse = await axios.post(`${API_BASE_URL}/cases`, testCase, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('✅ 案件創建成功:', caseResponse.data.message);

    // 5. 測試舉報提交
    console.log('\n5. 測試舉報提交...');
    const reportResponse = await axios.post(`${API_BASE_URL}/reports`, testReport, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('✅ 舉報提交成功:', reportResponse.data.message);

    // 6. 測試警示地址查詢
    console.log('\n6. 測試警示地址查詢...');
    const alertResponse = await axios.get(`${API_BASE_URL}/alerts/${testReport.address}`);
    console.log('✅ 警示地址查詢成功:', alertResponse.data);

    // 7. 測試黑名單查詢
    console.log('\n7. 測試黑名單查詢...');
    const blacklistResponse = await axios.get(`${API_BASE_URL}/blacklist/${testReport.address}`);
    console.log('✅ 黑名單查詢成功:', blacklistResponse.data);

    // 8. 測試案件列表獲取
    console.log('\n8. 測試案件列表獲取...');
    const casesResponse = await axios.get(`${API_BASE_URL}/cases`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('✅ 案件列表獲取成功，案件數量:', casesResponse.data.length);

    // 9. 測試舉報列表獲取
    console.log('\n9. 測試舉報列表獲取...');
    const reportsResponse = await axios.get(`${API_BASE_URL}/reports`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('✅ 舉報列表獲取成功，舉報數量:', reportsResponse.data.length);

    // 10. 測試統計資料獲取
    console.log('\n10. 測試統計資料獲取...');
    const statsResponse = await axios.get(`${API_BASE_URL}/stats`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('✅ 統計資料獲取成功:', statsResponse.data);

    console.log('\n🎉 所有測試通過！系統運行正常。');
    console.log('\n📊 系統功能總結:');
    console.log('- ✅ 用戶認證 (註冊/登入)');
    console.log('- ✅ 案件管理 (創建/查詢)');
    console.log('- ✅ 舉報系統 (提交/查詢)');
    console.log('- ✅ 警示系統 (地址查詢)');
    console.log('- ✅ 黑名單系統 (地址查詢)');
    console.log('- ✅ 統計資料 (用戶統計)');
    console.log('- ✅ 權限控制 (JWT 認證)');
    console.log('- ✅ 資料庫操作 (SQLite)');

  } catch (error) {
    console.error('❌ 測試失敗:', error.response?.data || error.message);
    
    if (error.response?.status === 401) {
      console.log('💡 提示: 請確保後台服務正在運行 (node server.js)');
    }
  }
}

// 運行測試
testSystem(); 
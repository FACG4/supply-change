const express = require('express');
const router = express.Router();
const getCompanyInfo = require('./get_company_info');
const storeData = require('./store_user_data');

router.get('/companyinfo/:companyNumber', getCompanyInfo);
router.post('/userdata', storeData);

module.exports = router;

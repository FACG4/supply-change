const express        = require('express');
const router         = express.Router();
const getCompanyInfo = require('./get_company_info');

router.get('/companyinfo/:companyNumber', getCompanyInfo);

module.exports = router
const express        = require('express');
const router         = express.Router();
const getCompanyInfo = require('./getCompanyInfo');

router.get('/companyinfo/:companyNumber', getCompanyInfo);

module.exports = router
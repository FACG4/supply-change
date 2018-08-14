const express = require('express');

const search = require('./search');
const email = require('./email');

const getCompanyInfo = require('./get_company_info');

const router = express.Router();

router.get('/companyinfo/:companyNumber', getCompanyInfo);
router.post('/search', search);
router.post('/email', email);

module.exports = router;

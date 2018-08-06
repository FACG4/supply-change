const express = require('express');
const search = require('./search');
const userDetails = require('./userdetails');

const getCompanyInfo = require('./get_company_info');

const router = express.Router();

router.get('/companyinfo/:companyNumber', getCompanyInfo);
router.post('/search', search);
router.post('/userdetails', userDetails);

module.exports = router;

const express = require('express');
const search = require('./search');

const getContractInfo = require('./get_contract_info'); 
const getCompanyInfo = require('./get_company_info');

const router = express.Router();

router.get('/companyinfo/:companyNumber', getCompanyInfo);
router.get('/contractinfo/:contractId', getContractInfo);
router.post('/search', search);

module.exports = router;

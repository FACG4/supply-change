const express = require('express');
const search = require('./search');
const profile = require('./social_profile');
const getCompanyInfo = require('./get_company_info');

const router = express.Router();

router.get('/companyinfo/:companyNumber', getCompanyInfo);
router.post('/search', search);
router.get('/profile/:id',profile);

module.exports = router;

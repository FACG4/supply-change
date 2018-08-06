const express = require('express');
const search = require('./search');
const auth = require('./auth');
const getCompanyInfo = require('./get_company_info');
const storeData = require('./store_user_data');
const uploadImage = require('./upload-image');
const login = require('./login');

const router = express.Router();

router.get('/companyinfo/:companyNumber', getCompanyInfo);
router.post('/login', login);
router.post('/search', auth, search);
router.post('/userdata', storeData);
router.post('/upload-image', uploadImage);
module.exports = router;

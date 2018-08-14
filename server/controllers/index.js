const express = require('express');

const userDetails = require('./userdetails');
const search = require('./search');
const email = require('./email');
const auth = require('./auth');
const profile = require('./social_profile');
const getCompanyInfo = require('./get_company_info');
const storeData = require('./store_user_data');
const uploadImage = require('./upload_image');
const login = require('./login');

const router = express.Router();

router.get('/companyinfo/:companyNumber', getCompanyInfo);
router.post('/login', login);
router.post('/search', search);
router.post('/userdata', storeData);
router.get('/profile/:id',profile);
router.post('/userdetails', userDetails);
router.post('/upload-image', uploadImage);
router.post('/email', email);

module.exports = router;

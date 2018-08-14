const express = require('express');
const userDetails = require('./userdetails');

const search = require('./search');
const auth = require('./auth');
const profile = require('./social_profile');
const getCompanyInfo = require('./get_company_info');
const storeData = require('./store_user_data');
const uploadImage = require('./upload_image');
const login = require('./login');
const { celebrate } = require('celebrate');
const validate = require('./validation');

const router = express.Router();

router.get('/companyinfo/:companyNumber',celebrate(validate.companyInfo), getCompanyInfo);
router.post('/login',celebrate(validate.loginInfo),login);
router.post('/search',celebrate(validate.search) ,search);
router.post('/userdata',celebrate(validate.userdata), storeData);
router.get('/profile/:id',celebrate(validate.socailProfile), profile);
router.post('/userdetails',celebrate(validate.userdetails), userDetails);
router.post('/upload-image', uploadImage);

module.exports = router;

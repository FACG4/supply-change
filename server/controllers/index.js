const express = require('express');

const userDetails = require('./userdetails');
const search = require('./search');
const { email } = require('./email');
const auth = require('./auth');
const profile = require('./social_profile');
const getContractInfo = require('./get_contract_info');
const getCompanyInfo = require('./get_company_info');
const storeData = require('./store_user_data');
const uploadImage = require('./upload_image');
const login = require('./login');
const { celebrate } = require('celebrate');
const validate = require('./validation');
const logout = require('./logout');

const router = express.Router();

router.get('/companyinfo/:companyNumber',celebrate(validate.companyInfo), getCompanyInfo);
router.post('/login',celebrate(validate.loginInfo),login);
router.post('/search',/*celebrate(validate.search) ,*/search);
router.post('/userdata', storeData);
router.get('/profile/:id',celebrate(validate.socailProfile), profile);
router.post('/userdetails',/*celebrate(validate.userdetails),*/ userDetails);
router.get('/contractinfo/:contractId',celebrate(validate.contractId), getContractInfo);
router.post('/upload-image', uploadImage);
router.post('/email', email);
router.post('/logout', logout);

module.exports = router;

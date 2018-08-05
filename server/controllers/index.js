const express = require('express');
const router = express.Router();
const getCompanyInfo = require('./get_company_info');
<<<<<<< Updated upstream
const storeData = require('./store_user_data');

router.get('/companyinfo/:companyNumber', getCompanyInfo);
router.post('/userdata', storeData);
=======
const storeUserData = require('./store_user_data');

router.get('/companyinfo/:companyNumber', getCompanyInfo);
router.post('/userdata',storeUserData);
>>>>>>> Stashed changes

module.exports = router;

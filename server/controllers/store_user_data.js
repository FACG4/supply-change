const bcrypt = require('bcryptjs');
const query = require('../database/query/query');

module.exports = (req, res) => {
  const { CompanyHouseNumber,companyName,firstName,lastName,eamil,password,phone,mailingList } = req.body;
  bcrypt.hash(password, 8, (err, hashedPassword) => {
    if (err) return res.end(JSON.stringify({ err: 'err at hashing password' }));
    const sql = {
      text: 'INSERT INTO social_enterprise_basic(SE_name, SE_house_NO,first_name, last_name, email, phone_number,mailing_list, password) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',
      values: [companyName,CompanyHouseNumber,firstName,lastName,eamil,phone, mailingList, hashedPassword]
    };
    query(sql).then(
      res.end(JSON.stringify({ msg: 'success' }))
    ).catch(err => {
      res.end(JSON.stringify({ err: 'err in inserting the data' }));
    });
  });
};

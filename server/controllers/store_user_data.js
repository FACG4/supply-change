const bcrypt = require('bcryptjs');
const query = require('../database/query/query');

module.exports = (req, res) => {
  const { CompanyHouseNumber,companyName,firstName,lastName,email,password,phone,mailingList } = req.body;

  const uniqueSql = {
    text: 'SELECT * FROM social_enterprise_basic WHERE SE_house_NO = $1;',
    values: [CompanyHouseNumber]
  };
  query(uniqueSql).then(uniqueResponse => {
    if (uniqueResponse.rowCount > 0) {
      return res.end(JSON.stringify({ err: 'Sorry, this company is already exsist' }));
    } else {
      bcrypt.hash(password, 8, (err, hashedPassword) => {
        if (err) return res.end(JSON.stringify({ err: 'err at hashing password' }));
        const sql = {
          text: 'INSERT INTO social_enterprise_basic(SE_name, SE_house_NO,first_name, last_name, email, phone_number,mailing_list, password) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',
          values: [companyName,CompanyHouseNumber,firstName,lastName,email,phone, mailingList, hashedPassword]
        };
        query(sql).then(response => {
          res.end(JSON.stringify({ msg: 'success' }));
        }).catch(err => {
          res.end(JSON.stringify({ err: 'err in inserting the data' }));
        });
      });

    }
    res.end(JSON.stringify({ msg: 'success' }));
  }).catch(err => {
    res.end(JSON.stringify({ err: 'err in inserting the data' }));
  });
};

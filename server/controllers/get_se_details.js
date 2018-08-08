const query = require('../database/query/query');

exports.getSEDetails =SEId => {
  return new Promise((resolve,reject) => {
    const sql = {
      text: 'SELECT SE_name, email, phone_number FROM social_enterprise_basic WHERE id = $1',
      values: [SEId]
    };
    query(sql).then(queryResult => {
      resolve(queryResult.rows[0]);
    }).catch(err => reject(err));
  });
};

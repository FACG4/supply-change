const query = require('../../database/query/query');

exports.getSEDetails = SEId => {
  return new Promise((resolve,reject) => {
    const sql = {
      text: `SELECT bs.SE_house_NO, bs.SE_name, bs.email, bs.phone_number, ds.SE_address,ds.trade_type, ds.location
            FROM social_enterprise_basic bs
            INNER JOIN social_enterprise_details ds
            ON bs.id = ds.SE_id
            WHERE bs.id=$1`,
      values: [SEId]
    };
    query(sql)
      .then(queryResult => {
        resolve(queryResult.rows[0]);
      })
      .catch(err => reject(err));
  });
};

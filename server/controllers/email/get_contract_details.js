const query = require('../../database/query/query');

exports.getContractDetails = contractId => {
  return new Promise((resolve,reject) => {
    const sql = {
      text: 'SELECT title, company_name, company_email FROM contract WHERE id = $1',
      values: [contractId]
    };

    query(sql)
      .then(queryResult => {
        resolve(queryResult.rows[0]);
      })
      .catch(err => reject(err));
  });
};

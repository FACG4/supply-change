const query = require('../database/query/query');

module.exports = (req, res) => {

  const id = req.params.id;
  const sql = {
    text: `SELECT SE_address,SIC_code,trade_type,logo_link,social_impact_description,employees_NO,SE_description,places_to_work_in, location, SE_name, SE_house_NO, phone_number FROM social_enterprise_details
    INNER JOIN social_enterprise_basic
    ON social_enterprise_basic.id = social_enterprise_details.SE_id
    WHERE social_enterprise_basic.id = $1
    `,
    values: [id]
  };

  query(sql).then(queryResult => {
    if (queryResult.rowCount >= 1) {
      res.json(queryResult.rows[0]);
    } else {
      res.json({ err: 'User Not Found' });
    }
  }).catch(err => console.log(err));
};

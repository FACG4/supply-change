const query = require('../database/query/query');

module.exports = (req, res) => {
  // if (req.cookie) {
  const id = req.params.id;
  console.log(id,'iiiiiiiiiiiidddddddddddddddddddd');
  const sql = {
    text: `SELECT SE_address,SIC_code,trade_type,logo_link,social_impact_description,employees_NO,SE_description,places_to_work_in, location, SE_name, SE_house_NO, phone_number FROM social_enterprise_details
    INNER JOIN social_enterprise_basic
    ON social_enterprise_basic.id = social_enterprise_details.SE_id
    WHERE social_enterprise_basic.id = $1
    `,
    values: [id]
  };

  // const sql = {
  //   text: 'SELECT * FROM social_enterprise_basic WHERE id = $1',
  //   values: [id]
  // };

  query(sql).then(queryResult => {
    // console.log(queryResult);
    if (queryResult.rowCount >= 1) {
      console.log(queryResult.rows[0],7777777777777777777);
      res.json(queryResult.rows[0]);
    } else {
      res.json({ err: 'User Not Found' });
    }
  }).catch(err => console.log(err));
};

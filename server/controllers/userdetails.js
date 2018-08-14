const query = require('./../database/query/query');

module.exports = (req, res) => {

  const {
    companyLocation,
    companyAddress,
    SICCode,
    director,
    companyStructure,
    tradeType,
    companyDescription,
    employeesNumber,
    turnover,
    contractSize,
    workRegions,
    policyArray,
    socialDescription,
    socialImpactArray,
    logoLink,
    workDistance,
    SEId
  } = req.body;

  const sql={ text: `INSERT INTO social_enterprise_details (
  SE_id,
  SE_address,
  SIC_code,
  director,
  company_structure,
  trade_type,
  logo_link,
  social_impact_description,
  social_impact_list,
  travel_distance,
  employees_NO,
  turnover,
  contract_size,
  SE_description,
  selected_contract,
  policy_general,
  location,
  places_to_work_in)
  VALUES
  ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)`,
  values: [
    SEId,
    companyAddress,
    SICCode,
    director,
    companyStructure,
    tradeType,
    logoLink,
    socialDescription,
    socialImpactArray,
    workDistance,
    employeesNumber,
    turnover,
    contractSize,
    companyDescription,
    null,
    policyArray,
    companyLocation,
    workRegions ]
  };

  query(sql).then(queryResult => {
  }).then(() => {
    const sql2={
      text: 'UPDATE social_enterprise_basic SET is_complete = $1 WHERE id = $2;',
      values: [ true, SEId]
    };

    query(sql2).then(queryResult2 => {
      console.log(queryResult2);
      if (queryResult2.rowCount !== 1) {
        return res.end('failed');
      }
    })
      .then(() => {
        const sql3 = {
          text: `SELECT SE_address,SIC_code,trade_type,logo_link,social_impact_description,employees_NO,SE_description,places_to_work_in, location, SE_name, SE_house_NO, phone_number,is_complete FROM social_enterprise_details
        INNER JOIN social_enterprise_basic
        ON social_enterprise_basic.id = social_enterprise_details.SE_id
        WHERE social_enterprise_basic.id = $1`,
          values: [SEId]
        };

        query(sql3).then(queryResult3 => {
          console.log(queryResult3);
          if (queryResult3.rowCount !== 1) {
            return res.end('failed');
          } else {
            const { id, password: hashedPassword, is_complete, logo_link, se_name } = queryResult3.rows[0];
            return res.end(JSON.stringify({
              msg: 'success',
              id: SEId,
              is_complete,
              logo_link,
              se_name
            })
            );
          }

        });

      });
  })
    .catch(err => {
      console.log(err);
      res.end('err');
    });
};

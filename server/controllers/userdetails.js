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
    if (queryResult.rowCount === 1) {
      return res.end('success');
    } else {
      return res.end('failed');
    }
  }).catch(err => {
    res.end('err');
  });

};

// INSERT INTO social_enterprise_details VALUES
// (DEFAULT, 1, 'Fusion Point', '61900', 'Matt', 'Functional Structure', 'Cleaning', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg', 'We are going to do some good', '{2, 3}', '300', '50', '50k-100k', '50k-100k', 'We a small social enterprise', '{2}','{2,3}','London', '{"Greater London","North East"}'),

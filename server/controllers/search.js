const query = require('./../database/query/query');

const convert = str => str.replace(/"/g, '').replace(/{|}/g,'').split(',');

module.exports = (req, res) => {
  const { SEId } = req.body;
  console.log(SEId);
  const sql={ text: `SELECT t1.id, t1.title, t1.category, t1.contract_description, t1.company_logo,
  t1.active_state, t1.company_name, t1.contract_region, t1.created_at, t2.places_to_work_in
  FROM contract t1 inner join social_enterprise_details t2 ON t2.trade_type = t1.category
  WHERE  t2.SE_id = $1;`,
  values: [SEId]
  };

  query(sql).then(queryResult => {
    const results = queryResult.rows;
    const SERegions = convert(results[0].places_to_work_in);
    const filteredResults = { contracts: [], SERegions };
    results.forEach(contract => {
      SERegions.forEach(region => {
        contract.contract_region === region ? filteredResults.contracts.push(contract) : null;
      });
    });
    res.json(filteredResults);
  });

};

module.exports = (req,res) => {
  const { SEId } = req.body;
  const sql={ text: `SELECT t1.id, t1.title, t1.category, t1.contract_description,
  t1.active_state, t1.company_name, t1.contract_region,t2.places_to_work_in, t1.created_at
  FROM contract t1 inner join social_enterprise_details t2 ON t2.trade_type = t1.category
  WHERE  t2.SE_id = $1;`,
  values: [SEId]
  };

};

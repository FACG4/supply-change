const query = require('./../database/query/query');

module.exports = (req, res) => {
  if (req.params.contractId) {
    const id = req.params.contractId;

    const sql = {
      text: 'SELECT * FROM contract WHERE id = $1',
      values: [id]
    };

    query(sql)
      .then(result => res.json(result.rows[0]))
      .catch(err => res.json({ err: 'Company doesn\'t exists' }));

  } else {
    res.json({
      err: 'Company doesn\'t exists'
    });
  }
};

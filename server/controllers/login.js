const bcrypt = require('bcryptjs');

const generateToken = require('./generate_token');
const query = require('../database/query/query');

module.exports = (req, res) => {
  console.log(req.body);
  const { email, password } = req.body || { email: '', password: '' };
  const sql = {
    text: `SELECT social_enterprise_basic.*, social_enterprise_details.logo_link FROM social_enterprise_basic bs
          INNER JOIN social_enterprise_details ds
          ON bs.id = ds.SE_id
          WHERE email=$1`,
    values: [email]
  };

  // const errMsg = () => res.end(JSON.stringify({ err: 'Wrong email or password' }));

  query(sql).then(queryResult => {
    if (queryResult.rowCount) {
      console.log(queryResult.rows[0]);
      const { id, password: hashedPassword, is_complete, logo_link } = queryResult.rows[0];

      bcrypt.compare(password, hashedPassword).then(result => {
        if (result) {
          const data = { id, is_complete };
          generateToken(data).then(token => {
            res.cookie('token', token, { httpOnly: true });
            return res.end(JSON.stringify({
              token,
              id,
              is_complete

            }));
          }).catch(err => {
            res.end(JSON.stringify({ err: 'Wrong email or password' }));
          });
        } else {
          res.end(JSON.stringify({ err: 'Wrong email or password' }));
        }
      }).catch(err => {
        res.end(JSON.stringify({ err: 'Wrong email or password' }));
      });
    } else {
      res.end(JSON.stringify({ err: 'Wrong email or password' }));
    }
  }).catch(err => {
    res.end(JSON.stringify({ err: 'Wrong email or password' }));
  });
};

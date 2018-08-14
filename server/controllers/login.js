const bcrypt = require('bcryptjs');

const generateToken = require('./generate_token');
const query = require('../database/query/query');

module.exports = (req, res) => {
  console.log(req.body);
  const { email, password } = req.body || { email: '', password: '' };
  console.log(req.body);
  const sql1 = {
    text: `SELECT * FROM social_enterprise_basic
          WHERE email=$1`,
    values: [email]
  };

  const sql2 = {
    text: `SELECT bs.*, ds.logo_link FROM social_enterprise_basic bs
          INNER JOIN social_enterprise_details ds
          ON bs.id = ds.SE_id
          WHERE email=$1`,
    values: [email]
  };

  // const errMsg = () => res.end(JSON.stringify({ err: 'Wrong email or password' }));

  query(sql1).then(queryResult => {
    console.log(queryResult);
    if (queryResult.rowCount) {
      const { id, password: hashedPassword, is_complete,se_name } = queryResult.rows[0];
      console.log(is_complete);
      console.log(se_name);
      // const { id, password: hashedPassword, is_complete,logo_link } = queryResult.rows[0];
      bcrypt.compare(password, hashedPassword).then(result => {
        if (result) {

          const data = { id, is_complete };
          generateToken(data).then(token => {
            res.cookie('token', token, { httpOnly: true });
            if (is_complete) {
              const sql2 = {
                text: `SELECT bs.*, ds.logo_link FROM social_enterprise_basic bs
                INNER JOIN social_enterprise_details ds
                ON bs.id = ds.SE_id
                WHERE email=$1`,
                values: [email]
              };
              query(sql2).then(queryResult2 => {
                if (queryResult2.rowCount) {
                  const { id, password: hashedPassword, is_complete, logo_link, se_name } = queryResult2.rows[0];
                  return res.end(JSON.stringify({
                    token,
                    id,
                    is_complete,
                    logo_link,
                    se_name
                  }));

                }
              });

            } else {
              return res.end(JSON.stringify({
                token,
                id,
                is_complete,
                se_name
                // logo_link
              }));

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
    } else {
      res.end(JSON.stringify({ err: 'Wrong email or password' }));
    }
  }).catch(err => {
    res.end(JSON.stringify({ err: 'Wrong email or password' }));
  });
};

const bcrypt        = require('bcryptjs');

const generateToken = require('./generate_token');
const query         = require('../database/query/query');

module.export = (req, res) => {
    const {email, password} = req.body || { email: '', password: '' };

    const sql = {
        text: 'SELECT * FROM social_enterprise_basic WHERE email=$1',
        values: [email]
    }
    
    const userErr = res => res.end(JSON.stringify({ err: 'Wrong email or password'}))

    query(sql).then(queryResult => {
        if(queryResult.rowsCount) {
            const { id, password: hashedPassword, is_complete } = queryResult.rows[0];

            bcrypt.compare(password, hashedPassword).then((result) => {
                if(result){
                    const data = {id, SE_name, is_complete}
                    generateToken(data).then(token=>{
                        res.cookie('token',token,{httpOnly: true});
                        res.end(JSON.stringify({ token: token }))
                    }).catch(userErr)
                    
                }else{
                   userErr(res)
                }
            }).catch(userErr);
        }else{
            userErr(res)
        }
    }).catch(userErr)
}
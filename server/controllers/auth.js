const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if(req.cookies && req.cookies.token) {
        const { token } = req.cookies;

        jwt.verify(token, process.env.SECRET, (err, userInfo) => {
            if(err){
                res.clearCookie('token');
                return res.status(200).redirect('/login');
            }

            req.userInfo = userInfo;
            next()
        })

    } else {
        return res.redirect('/login')
    }
  
}
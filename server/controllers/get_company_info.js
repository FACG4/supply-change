const request = require('request');
require('env2')('./config.env');

module.exports = (req, res)=>{
    request({
        url: `https://${process.env.COMPANY_HOUSE_APIKEY}@api.companieshouse.gov.uk/company/${req.params.companyNumber}`
    }, function (err, response, body) {
        if(err) return res.end({err:err});
        res.end(body)
    });
}
const request = require('request');
require('env2')('./config.env');

module.exports = (req, res) => {
  console.log(req.params);
  request({
    url: `https://${process.env.COMPANY_HOUSE_APIKEY}@api.companieshouse.gov.uk/company/${req.params.companyNumber}`
  }, (err, response, body) => {
    if (err) return res.end({ err });
    res.end(body);
  });
};

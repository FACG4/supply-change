const query = require('./../database/query/query');

module.exports = (req, res) => {
  const {
    activePageIndex,
    companyLocation,
    companyAddress,
    SICCode,
    director,
    companyStructure,
    tradeType,
    companyDescription,
    businessSize,
    turnover,
    contractSize,
    workRegions,
    policyArray,
    socialImpactArray
  } = req.body;

};

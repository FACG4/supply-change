const { Joi } = require('celebrate');

const loginInfo = {
  body: {
    email: Joi.string().email().required(),
    password: Joi.string().max(30).required()
  }
};

const companyInfo = {
  params: {
    companyNumber: Joi.string().required()
  }
};

const userdata = {
  body: {
    CompanyHouseNumber: Joi.string().required(),
    companyName: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    eamil: Joi.string().email().required(),
    password: Joi.string().max(30).required(),
    confirm: Joi.string().max(30).required(),
    phone: Joi.string().required(),
    mailingList: Joi.boolean(),
    TC: Joi.boolean()
  }
};
const socailProfile = {
  params: {
    id: Joi.number().integer().required()
  }
};

const userdetails = {
  body: {
    companyLocation: Joi.string().required(),
    companyAddress: Joi.string().required(),
    director: Joi.string().required(),
    companyStructure: Joi.string().required(),
    tradeType: Joi.string().required(),
    companyDescription: Joi.string().required(),
    employeesNumber: Joi.number().required(),
    turnover: Joi.string().required(),
    contractSize: Joi.string().required(),
    workRegions: Joi.array().required(),
    policyArray: Joi.array().required(),
    socialDescription: Joi.string().required(),
    socialImpactArray: Joi.array().required(),
    logoLink: Joi.string().required(),
    workDistance: Joi.number().required(),
    SEId: Joi.number().integer().required()
  }
};

const search = {
  body: {
    SEId: Joi.string().email().required()
  }
};

const contractId = {
  body: {
    contractId: Joi.number().required()
  }
};

module.exports = { loginInfo, companyInfo,userdata,socailProfile,userdetails, search, contractId };

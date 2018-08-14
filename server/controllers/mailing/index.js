const { getSEDetails } = require('./get_se_details');
const { getContractDetails } = require('./get_contract_details');
const senEmail = require('./send_email');

exports.mailing = (request, response) => {
  const { SEId, contractId } = request.body;

  Promise.all([getSEDetails(SEId), getContractDetails(contractId)])
    .then(res => {
      const results = { ...res[0], ...res[1] };

      senEmail(results)
        .then(response.end(JSON.stringify({ msg: 'success' })))
        .catch(response.end(JSON.stringify({ err: 'err in sending the email' })));
    })
    .catch(response.end(JSON.stringify({ err: 'err in sending the email' })));
};

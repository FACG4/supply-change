const { getSEDetails } = require('./get_se_details');
const { getContractDetails } = require('./get_contract_details');
const { sendEmail } = require('./send_email');

exports.email = (request, response) => {
  const { SEId, contractId } = request.body;
  console.log(SEId, contractId,'SEId, contractId');

  Promise.all([getSEDetails(SEId), getContractDetails(contractId)])
    .then(res => {
      const results = { ...res[0], ...res[1] };

      sendEmail(results)
        .then(response.end(JSON.stringify({ msg: 'success' })))
        .catch(response.end(JSON.stringify({ err: 'err in sending the email' })));
    })
    .catch(response.end(JSON.stringify({ err: 'err in sending the email' })));
};

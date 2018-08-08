const nodemailer = require('nodemailer');
const { getSEDetails } = require('./get_se_details');
const { getContractDetails } = require('./get_contract_details');

exports.mailing = (req, res) => {
  const { SEId, contractId } = req.body;
  // const { POName, POEmail, contractId, contractTitle, SEEmail, SEName } = details;
  // console.log(process.env.EMAIL,process.env.EMAIL_PASSWORD);
  // const { contractId, SEId } = req.body;
  // new Promise((resolve,reject) => {
  Promise.all([getSEDetails(SEId), getContractDetails(contractId)]).then(res => {
    console.log({ ...res[0], ...res[1] });
    const results = { ...res[0], ...res[1] };
    const { title, company_name, company_email, SE_name, email: SEEmail , phone_number } = results;

  });

  const transporter = nodemailer.createTransport(
    {
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      },
      logger: false,
      debug: false
    },
    {
      from: 'Supply-Change <supplychangeuk@gmail.com>',
      headers: {
        'X-Laziness-level': 1000
      }
    }
  );

  const message = {
    to: 'Andris Reinman <ramyshurafa@hotmail.com>',
    subject: 'Nodemailer is unicode friendly ✔',
    text: 'Hello to myself!',
    html:
      '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
      '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>'
  };

  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log('Error occurred');
      console.log(error.message);
      return process.exit(1);
    }
    console.log('Message sent successfully!');
    transporter.close();
  });
  // });

};
// mailing({ SEId: 1, contractId: 1 });

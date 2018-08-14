const nodemailer = require('nodemailer');
require('env2')('./config.env');

exports.senEmail = details => {
  return new Promise((resolve, reject) => {
    const {
      title,
      company_name,
      company_email,
      SE_name,
      email: SEEmail,
      phone_number,
      SE_address,
      location,
      SE_house_NO,
      trade_type
    } = details;
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
      to: `${company_name} <${company_email}>`,
      subject: 'A New Submition on your contract',
      text: 'Hello to myself!',
      html: `  <div class="all" style="background-color: #f9f9f9;width: 100%;text-align: center;margin: 0 auto;">
        <div class="header">
          <img src="" alt="">
        </div>
        <div class="body" style="  background-color: #fff;width: 70%;margin: 0 auto;text-align: left;padding-left: 50px;">
          <div class="body__header">
            <h3 class="hi" style="color: #2D918E;padding: 20px;font-size: 32px" >HI ${company_name}</h3>
            <p>Your contract received a new submition</p>
            <p>Contract : ${title}</p>
          </div>
          <div class="body__body" style="margin-top: 20px;width: 70%;padding: 10px 10px 20px 10px;border: 1px solid #BFBFBF;background-color: white;box-shadow: 3px 5px 17px #aaaaaa5c;">
            <h3 class="body__body__Heading">Social Enterprise Information :</h3>
            <br>
            <p  style="padding: 5px">name / ${SE_name}</p>
            <p  style="padding: 5px">trade type / ${trade_type}</p>
            <p  style="padding: 5px">Location / ${location}</p>
            <p  style="padding: 5px">Address / ${SE_address}</p>
            <p  style="padding: 5px">Email / ${SEEmail}</p>
            <p  style="padding: 5px">phone / ${phone_number}</p>
            <p  style="padding: 5px">House No. / ${SE_house_NO}</p>
          </div>
        </div>
      </div>`
    };

    transporter.sendMail(message, (error, info) => {
      if (error) {
        return reject(error);
      }
      transporter.close();
      return resolve(info);
    });
  });
};

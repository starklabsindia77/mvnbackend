const dotenv = require('dotenv');
const nodemailer = require('nodemailer')
dotenv.config();




const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'hr.dttechnopoint@gmail.com',
      pass: 'mxvempdlnzvkhxhb'
    }
  });
  
  const senderMail = "visaportal@gmail.com"
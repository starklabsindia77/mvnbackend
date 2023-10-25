const dotenv = require('dotenv');
const nodemailer = require('nodemailer')
dotenv.config();




const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'devyn.miller72@ethereal.email',
      pass: 'WPjg3RV6CQenBzCQF4'
  }
  });
  const careerMailSender = "hr@mvn.edu.in"
  const enquiryMailSender = "info@mvn.edu.in"

  module.exports = {
    transporter: transporter,
    careerMailSender: careerMailSender,
    enquiryMailSender: enquiryMailSender,
  }
const dotenv = require('dotenv');
const nodemailer = require('nodemailer')
dotenv.config();




const transporter = nodemailer.createTransport({
  // host: 'smtp.ethereal.email',
  // port: 587,
  // auth: {
  //     user: 'devyn.miller72@ethereal.email',
  //     pass: 'WPjg3RV6CQenBzCQF4'
  // }
  service: 'Gmail', // Replace with your SMTP host (e.g., for Gmail: 'smtp.gmail.com')
  // port: 587, // Port for SMTP (587 is the default for TLS, 465 for SSL)
  // secure: false, // true for 465, false for other ports
  auth: {
    user: 'website@mvn.edu.in', // Your email address
    pass: 'mvn@2023', // Your email account password
  },
  });
  const careerMailSender = "hr@mvn.edu.in"
  const enquiryMailSender = "info@mvn.edu.in"
  const admissionMailSender="admissions@mvn.edu.in"
  module.exports = {
    transporter: transporter,
    careerMailSender: careerMailSender,
    enquiryMailSender: enquiryMailSender,
    admissionMailSender:admissionMailSender
  }
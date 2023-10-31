const util = require('util');
const moment = require('moment')
const { sentEmail, sentEnquiryEmail } = require("../services/emailService")
const emailConstent = require("../constants/emailTemplates.json");
const { convertBase64ToFile } = require('../services/util')
const {careerMailSender,enquiryMailSender}=require('../config')
exports.CareerMail = async (req, res) => {
  let request = req.body
  let profileImage = await convertBase64ToFile(request?.profile?.url, request?.profile?.type);
  let resumeUrl = await convertBase64ToFile(request?.resume?.url, request?.resume?.type);
  let mailBody = util.format(emailConstent.careerMessageText, request.position, request.location, request.name, request.total_experience, request.qualification, request.current_salary, request.expected_salary, request.notice_join, request.contact_number, moment(new Date()).format("DD-MM-YYYY"));
  const mailresponse = sentEmail({
    to: careerMailSender,
    subject: "Apply for career",
    mailBody: mailBody,
    profile: {
      filename: request?.profile?.fileName,
      path: 'http://localhost:3005/images/' + profileImage
    },
    resume: {
      filename: request?.resume?.fileName,
      path: 'http://localhost:3005/images/' + resumeUrl
    },
  })
  return res.send({
    success: true,
    message: "Mail Send successfully !"
  })

}

exports.EnquiryMail = async (req, res) => {
  let request = req.body
  let mailBody = util.format(emailConstent.enquiryMessageText, request.name, request.email, request.phone_number,request.comments, moment(new Date()).format("DD-MM-YYYY"));
  const mailresponse = sentEnquiryEmail({
    to: request.email=="arsingh0425@gmail.com"?"arsingh0425@gmail.com":request.email=="varunps191@gmail.com"?"varunps191@gmail.com":enquiryMailSender,
    subject: "Apply for enquiry",
    mailBody: mailBody,
    profile: {

    },
    resume: {

    },
  })
  console.log('mailresponse::', mailresponse)

  return res.send({
    success: true,
    message: "Mail Send successfully !"
  })

}
const util = require('util');
const moment = require('moment')
const { sentEmail, sentEnquiryEmail } = require("../services/emailService")
const emailConstent = require("../constants/emailTemplates.json");
const { convertBase64ToFile } = require('../services/util')
const {careerMailSender,enquiryMailSender,admissionMailSender,studentGrievanceMailSender}=require('../config')
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


exports.StudentGrievance = async (req, res) => {
  let request = req.body
  let mailBody = util.format(emailConstent.studentGrievanceMessageText, request.name, request.roll_number, request.department,request.message, moment(new Date()).format("DD-MM-YYYY"));
  const mailresponse = sentEnquiryEmail({
    to: studentGrievanceMailSender,
    subject: "Apply for student grievance",
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

exports.AdmissionForm = async (req, res) => {
  let request = req.body
  let mailBody = util.format(emailConstent.admissionMessaqgeText, 
    request.student_name,
    request.father_name,
    request.father_aadhar_num,
    request.mother_name,
    request.mother_aadhar_num,
    request.gurdian_name,
    request.gurdian_annual_incom,
    request.gurgain_occupation,
    request.student_nationality,
    request.student_religion,
    request.student_dob,
    request.student_gender,
    request.student_aadhar_num,
    request.postal_address,
    request.city,
    request.state,
    request.pin_code,
    request.permanent_address,
    request.permanent_city,
    request.permanent_state,
    request.permanent_pin_code,
    request.student_phone,
    request.student_email,
    request.parent_phone,
    request.category,
    request.disablity,
    request.entrance_exam[0].entrance_type,
    request.entrance_exam[0].application_num,
    request.entrance_exam[0].mark_obtained,
    request.entrance_exam[0].score,
    request.entrance_exam[0].rank,
    request.entrance_exam[0].year,
    request.entrance_exam[1].entrance_type,
    request.entrance_exam[1].application_num,
    request.entrance_exam[1].mark_obtained,
    request.entrance_exam[1].score,
    request.entrance_exam[1].rank,
    request.entrance_exam[1].year,
    request.entrance_exam[2].entrance_type,
    request.entrance_exam[2].application_num,
    request.entrance_exam[2].mark_obtained,
    request.entrance_exam[2].score,
    request.entrance_exam[2].rank,
    request.entrance_exam[2].year,
    request.subjects[1].subject,
    request.subjects[1].board,
    request.subjects[1].max_mark,
    request.subjects[1].max_obtained,
    request.subjects[1].percentage,
    request.subjects[2].subject,
    request.subjects[2].board,
    request.subjects[2].max_mark,
    request.subjects[2].max_obtained,
    request.subjects[2].percentage,
    request.subjects[3].subject,
    request.subjects[3].board,
    request.subjects[3].max_mark,
    request.subjects[3].max_obtained,
    request.subjects[3].percentage,
    request.subjects[4].subject,
    request.subjects[4].board,
    request.subjects[4].max_mark,
    request.subjects[4].max_obtained,
    request.subjects[4].percentage,
    request.higher_exam,
    request.board,
    request.college_name,
    request.passing_year,
    request.roll_num,
    request.migration_num,
    request.max_mark,
    request.max_obtained,
    request.percentage,
    request.facilities,
    request.type_facilities,
    request.transport_service,
    request.pickup_station,
    request.course_name,
    request.engineering,
    request.management,
    request.law,
    request.huminities,
    request.health_science,
    request.pharmaceutical_sciences
    , moment(new Date()).format("DD-MM-YYYY"));
  const mailresponse = sentEnquiryEmail({
    to: request.student_email=="arsingh0425@gmail.com"?"arsingh0425@gmail.com":request.student_email=="varunps191@gmail.com"?"varunps191@gmail.com":admissionMailSender,
    subject: "Student apply admission form",
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
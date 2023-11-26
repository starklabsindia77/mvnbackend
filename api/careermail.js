const router = require('express').Router();
const {CareerMail, EnquiryMail,AdmissionForm,StudentGrievance}=require('../controller/mailController')
const verify=require('../middlewares/verify-token')

router.post('/addCareer',verify,CareerMail);
router.post('/enquiry',verify,EnquiryMail);
router.post('/admissionForm',verify,AdmissionForm);
router.post('/studentGrievance',verify,StudentGrievance);

module.exports = router;
const router = require('express').Router();
const {CareerMail, EnquiryMail,AdmissionForm}=require('../controller/mailController')
const verify=require('../middlewares/verify-token')

router.post('/addCareer',verify,CareerMail);
router.post('/enquiry',verify,EnquiryMail);
router.post('/admissionForm',verify,AdmissionForm);

module.exports = router;
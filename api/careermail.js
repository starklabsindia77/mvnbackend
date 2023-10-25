const router = require('express').Router();
const {CareerMail, EnquiryMail}=require('../controller/mailController')
const verify=require('../middlewares/verify-token')

router.post('/addCareer',verify,CareerMail);
router.post('/enquiry',verify,EnquiryMail);

module.exports = router;
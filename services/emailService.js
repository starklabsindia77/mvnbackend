const config = require("../config");
const transporter = config.transporter;
const senderMail = config.senderMail;

exports.sentEmail = async ({ to, subject, mailBody, profile, resume }) => {
    console.log('mailBody:::1', profile,resume)
    let mailOptions = {
        from: senderMail,
        to: to,
        subject: subject,
        html: mailBody,
        attachments: [
            profile,
            resume
        ]

    }
    transporter.sendMail(mailOptions, function (error, info) {

        if (error) {
            return { err: error, res: false }
        } else {
            return { err: error, res: true }
        }
    });
}
exports.sentEnquiryEmail = async ({ to, subject, mailBody, profile, resume }) => {
    console.log('mailBody:::1', profile,resume)
    let mailOptions = {
        from: senderMail,
        to: to,
        subject: subject,
        html: mailBody,
    }
    transporter.sendMail(mailOptions, function (error, info) {

        if (error) {
            return { err: error, res: false }
        } else {
            return { err: error, res: true }
        }
    });
}

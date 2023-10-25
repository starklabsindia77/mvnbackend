const http = require("http");
const app = require('./index');
let PORT = process.env.PORT || 3005;
var httpServer = http.createServer(app)


// app.get('/getApi',(req,res)=>{
//   let mailBody = util.format(emailConstent.careerMessageText,"Master");
//   console.log('mailBody::',mailBody)
//  const mailresponse= sentEmail({
//     to:"testing5342@gmail.com",
//     subject: "Apply for career",
//     mailBody:mailBody
//   })
//   return  res.send('Hello Guys I am authenticated')
 
// })


const server = httpServer.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT} ...`);
    // const WebSocket = require('ws');
})
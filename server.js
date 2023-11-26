const http = require("http");
const https = require('https');
const fs = require('fs');
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
// const options = {
//     key: fs.readFileSync('./certificate/key.pem'),
//     cert: fs.readFileSync('./certificate/cert.pem'),
//     csr: fs.readFileSync('./certificate/csr.pem')
//   };
  
//   http.createServer(options, (req, res) => {
//     res.writeHead(200);
//     res.end('Hello, world!');
//   }).listen(443)

// const server = http.createServer({
//     key: fs.readFileSync('./certificate/key.pem'), // Your private key
//     cert: fs.readFileSync('./certificate/cert.pem') // Your SSL certificate
//   }, app).listen(PORT,() => {
//         console.log(`Server is up and running on ${PORT} ...`);
//         // const WebSocket = require('ws');
//     });

const server = httpServer.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT} ...`);
    // const WebSocket = require('ws');
})
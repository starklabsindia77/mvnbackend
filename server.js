const http = require("http");
const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

var httpServer = http.createServer(app);
let PORT = process.env.PORT || 3005;



const server = https.createServer({
    key: fs.readFileSync('../../etc/ssl/private.key'), // Your private key
    cert: fs.readFileSync('../../etc/ssl/certificate.crt') // Your SSL certificate
  }, app).listen(PORT);
// const server = httpServer.listen(PORT, () => {
//     console.log(`Server is up and running on ${PORT} ...`);
//     // const WebSocket = require('ws');
// })
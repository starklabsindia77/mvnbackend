const http = require("http");
const express = require('express');

const app = express();

var httpServer = http.createServer(app);
let PORT = process.env.PORT || 8000;

const server = httpServer.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT} ...`);
    // const WebSocket = require('ws');
})
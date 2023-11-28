const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
var createError = require('http-errors');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const rateLimitMiddleware = require("./middlewares/rateLimiter");
const app = express()
dotenv.config();
app.use(cookieParser());

app.use(rateLimitMiddleware);
//to not get any deprecation warning or error
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.json({ limit: '50mb' }));
//app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
var corsOptions = {
    origin: 'https://www.mvn.edu.in/',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));
app.use('/images', express.static('attachments'));
const CareersRoutes = require('./api/careermail')

app.use("/api", CareersRoutes);

// app.use(function (req, res, next) {
//     next(createError(404));
// });


app.get('/testapi',(req,res)=>{  
    res.send('Hello Guys I am authenticated')
})


// error handler
// app.use(function (err, req, res, next) {
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//     // render the error page
//     res.status(err.status || 500);
//     // res.render('error');
//     res.json({ error: err })
// });


module.exports = app
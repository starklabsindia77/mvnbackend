const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
var createError = require('http-errors');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express()
dotenv.config();
app.use(cookieParser());
//to not get any deprecation warning or error
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.json({ limit: '50mb' }));
//app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors())
app.use('/images', express.static('attachments'));
const CareersRoutes = require('./api/careermail')

app.use("/api", CareersRoutes);

app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    // res.render('error');
    res.json({ error: err })
});


module.exports = app
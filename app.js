var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var aboutUsRouter = require('./app_server/routes/aboutUs');
var contactUsRouter = require('./app_server/routes/contactUs');
var donationsRouter = require('./app_server/routes/donations');
var giftsRouter = require('./app_server/routes/gifts');
var needsRouter = require('./app_server/routes/needs');
var wantsRouter = require('./app_server/routes/wants');



var app = express();

// view engine setup
app.set('views', path.join(__dirname,  'app_server',  'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/aboutUs', aboutUsRouter);
app.use('/contactUs', contactUsRouter);
app.use('/donations', donationsRouter);
app.use('/gifts', giftsRouter);
app.use('/needs', needsRouter);
app.use('/wants', wantsRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

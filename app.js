var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Mongo Client and url - Add password in .env
var MongoClient = require("mongodb").MongoClient;
let urlDatabase = "mongodb+srv://Supreme:<password>@supremecluster.sq3adcq.mongodb.net/?retryWrites=true&w=majority"

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Connect to Database
MongoClient.connect(urlDatabase,  (err, client) => {
  if (err) {
    console.log('Failed to connect to MongoDB', err);
  } else {
    console.log('Connected to MongoDB');

    const db = client.db("SupremeCluster")
  }

})

module.exports = app;

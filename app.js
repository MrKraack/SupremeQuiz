var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


let urlDatabase = "mongodb+srv://Supreme:Supreme@supremecluster.sq3adcq.mongodb.net/SupremeQuizDB?retryWrites=true&w=majority"


var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');

var app = express();

const externalRouter = require('./routes/router')

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
app.use(externalRouter)

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


// mongoose.connect(urlDatabase).then(() => {
//   console.log('server connected, port 3001')
//   app.listen(3001)
// })
//     .catch(err => {
//       console.log(err)
//     })

module.exports = app;

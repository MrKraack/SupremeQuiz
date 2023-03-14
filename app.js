const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');

const cors = require('cors')
const passport = require('passport');
const logger = require('morgan');
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const router = require('./routes/router')

dotenv.config()

const urlDatabase = `mongodb+srv://${process.env.DB_PASSPORT}.mongodb.net/SupremeQuizDB?retryWrites=true&w=majority`
const port = 3001

const app = express();

app.use(cors(
    {
        origin: "*"
    }
))

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

const User = require('./models/UserModel')

// Passport Local Strategy
passport.use(User.createStrategy());

// To use with sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(router)

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

mongoose.connect(urlDatabase, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
  console.log(`server connected, port ${port}`)
  app.listen(port)
})
    .catch(err => {
      console.log(err)
    })

module.exports = app;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',  async function(req, res, next) {
  // //Variable to hold quizArray
  // let quizArray;
  // //Fetch data from Server
  //  await fetch("http://localhost:3001/loadQuiz")
  //     .then((res) => res.json())
  //     .then((data) => quizArray = data)

  // console.log("quizArray: ");
  // console.log(quizArray);

  //Send server data with render
  res.render('index');
  // res.render('index', {Quizzez: quizArray});
});



router.get('/user', function(req, res, next) {
  res.render('user');
});

router.get('/addquiz', function(req, res, next) {
  res.render('addquiz');
});
router.get('/stats', function(req, res, next) {
  res.render('stats');
});

module.exports = router;

const mongoose = require('mongoose');
let quizSchema = require('../../models/QuizSchema')


module.exports = async (req, res) => {

    let {titel} = req.body;

    try {
        console.log("works")
        
        let quiz = new quizSchema({
            titel
        });
        console.log(quiz)
        res.json(quiz)
    }catch (err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
}
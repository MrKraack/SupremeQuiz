const mongoose = require('mongoose');
let quizSchema = require('../../models/QuizSchema')


module.exports = async (req, res) => {

    let {quizId, titel, answerArray, question, category, createdBy, createdDate} = req.query;

    try {
        console.log("works")

        //Find quiz
        //Last element in array
        //Get ID
        
        
        let quiz = new quizSchema({
            quizId,
            titel,
            answerArray: [],
            question,
            category,
            createdBy,
            createdDate

        });
        await quiz.save()
        console.log(quiz)
        res.json(quiz)

    }catch (err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
}
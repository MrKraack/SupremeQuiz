const mongoose = require('mongoose');
let quizSchema = require('../../models/QuizSchema')


module.exports = async (req, res) => {

    console.log(req.body);
    let { category, question, q1answer1, q1answer2, q1answer3, q1answer4 } = req.body


    try {
        
        let quiz = new quizSchema({
            quizId, 
            titel,
            category,
            questions : [{
                question,
                answerArray: [
                    answerName,
                    answerIsCorrect
                ]
            }],
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
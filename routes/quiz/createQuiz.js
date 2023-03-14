const mongoose = require('mongoose');
let quizSchema = require('../../models/QuizSchema')


module.exports = async (req, res) => {

    console.log(req);
    let {quizId, titel, answerArray, question, category, createdBy, createdDate} = req.query;


    try {
        console.log("works")

        //1. QuestionArray
        //2. I questArray = object med spørgsmål
        //3. Spørgsmål har titel og et array med answerArrray
        //4. answerArray består objecter med svar/titel og "true/false"
        
        
        let quiz = new quizSchema({
            quizId,
            titel,
            questionArray: [],
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
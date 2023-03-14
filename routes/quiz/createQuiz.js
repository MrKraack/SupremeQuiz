const mongoose = require('mongoose');
let quizSchema = require('../../models/QuizSchema')


module.exports = async (req, res) => {

    let {quizId, titel, answerArray, question, category, createdBy, createdDate} = req.query;

    try {
        console.log("works")

        const quizID = await quizSchema.find({quizSchema});
        console.log(quizID)

        let lastObjectArray = quizID.slice(-1);

        let lastIdCount = lastObjectArray[0].quizId + 1;    
        
        let quiz = new quizSchema({
            quizId: lastIdCount,
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
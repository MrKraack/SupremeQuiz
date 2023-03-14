const mongoose = require('mongoose');
let quizSchema = require('../../models/QuizSchema')


module.exports = async (req, res) => {
    let { quizId, titel, category, question1 ,question2,
        q1answer1, q1answer2, q1answer3, q1answer4,
        q2answer1, q2answer2, q2answer3, q2answer4,
        answerIsCorrect, createdBy, createdDate } = req.body;
        
    try {
        let quiz = new quizSchema({
            quizId,
            titel,
            category,
            questions: [
                {
                    question1,
                    answerArray: [
                        {
                            q1answer1,
                            answerIsCorrect
                        },
                        {
                            q1answer2,
                            answerIsCorrect
                        },
                        {
                            q1answer3,
                            answerIsCorrect
                        },
                        {
                            q1answer4,
                            answerIsCorrect
                        }
                    ]
                },
                {
                    question2,
                    answerArray: [
                        {
                            q2answer1,
                            answerIsCorrect
                        },
                        {
                            q2answer2,
                            answerIsCorrect
                        },
                        {
                            q2answer3,
                            answerIsCorrect
                        },
                        {
                            q2answer4,
                            answerIsCorrect
                        }
                    ]
                }
            ],
            createdBy,
            createdDate
        });

        // await quiz.save()
        console.log(quiz)
        res.json(quiz)

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}
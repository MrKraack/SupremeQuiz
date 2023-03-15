const mongoose = require('mongoose');
let quizSchema = require('../../models/QuizSchema')


module.exports = async (req, res) => {
    let { quizId, title, category, question1, question2, question3,
        q1answer1, q1answer2, q1answer3, q1answer4,
        q2answer1, q2answer2, q2answer3, q2answer4,
        q3answer1, q3answer2, q3answer3, q3answer4,
        q1answer1IsCorrect, q1answer2IsCorrect, q1answer3IsCorrect, q1answer4IsCorrect,
        q2answer1IsCorrect, q2answer2IsCorrect, q2answer3IsCorrect, q2answer4IsCorrect,
        q3answer1IsCorrect, q3answer2IsCorrect, q3answer3IsCorrect, q3answer4IsCorrect,
         createdBy, createdDate } = req.body;

        console.log("This is body")
        console.log(req.body)

        const quizID = await quizSchema.find({quizSchema});

        let lastObjectArray = quizID.slice(-1);

        let lastIdCount = lastObjectArray[0].quizId + 1;
        
    try {
        let quiz = new quizSchema({
            quizId : lastIdCount,
            category,
            questions: [
                {
                    question1,
                    answerArray: [
                        {
                            q1answer1,
                            q1answer1IsCorrect
                        },
                        {
                            q1answer2,
                            q1answer2IsCorrect
                        },
                        {
                            q1answer3,
                            q1answer3IsCorrect
                        },
                        {
                            q1answer4,
                            q1answer4IsCorrect
                        }
                    ]
                },
                {
                    question2,
                    answerArray: [
                        {
                            q2answer1,
                            q2answer1IsCorrect
                        },
                        {
                            q2answer2,
                            q2answer2IsCorrect
                        },
                        {
                            q2answer3,
                            q2answer3IsCorrect
                        },
                        {
                            q2answer4,
                            q2answer4IsCorrect
                        }
                    ]
                },
                {
                    question3,
                    answerArray: [
                        {
                            q3answer1,
                            q3answer1IsCorrect
                        },
                        {
                            q3answer2,
                            q3answer2IsCorrect
                        },
                        {
                            q3answer3,
                            q3answer3IsCorrect
                        },
                        {
                            q3answer4,
                            q3answer4IsCorrect
                        }
                    ]
                }
            ],
            createdBy,
            createdDate
        });

        await quiz.save()
        console.log(quiz)
        res.json(quiz)

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}
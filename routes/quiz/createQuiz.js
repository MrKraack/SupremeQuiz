const mongoose = require('mongoose');
let quizSchema = require('../../models/QuizSchema')


module.exports = async (req, res) => {
    let { quizId, category, question1, question2, question3,
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
                    questionName: question1,
                    answerArray: [
                        {
                            answer: q1answer1,
                            isCorrect: q1answer1IsCorrect
                        },
                        {
                            answer: q1answer2,
                            isCorrect: q1answer2IsCorrect
                        },
                        {
                            answer: q1answer3,
                            isCorrect: q1answer3IsCorrect
                        },
                        {
                            answer: q1answer4,
                            isCorrect: q1answer4IsCorrect
                        }
                    ]
                },
                {
                    questionName: question2,
                    answerArray: [
                        {
                            answer: q2answer1,
                            isCorrect: q2answer1IsCorrect
                        },
                        {
                            answer: q2answer2,
                            isCorrect: q2answer2IsCorrect
                        },
                        {
                            answer: q2answer3,
                            isCorrect: q2answer3IsCorrect
                        },
                        {
                            answer: q2answer4,
                            isCorrect: q2answer4IsCorrect
                        }
                    ]
                },
                {
                    questionName: question3,
                    answerArray: [
                        {
                            answer: q3answer1,
                            isCorrect: q3answer1IsCorrect
                        },
                        {
                            answer: q3answer2,
                            isCorrect: q3answer2IsCorrect
                        },
                        {
                            answer: q3answer3,
                            isCorrect: q3answer3IsCorrect
                        },
                        {
                            answer: q3answer4,
                            isCorrect: q3answer4IsCorrect
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
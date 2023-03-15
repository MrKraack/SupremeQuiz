const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    type: Object,
    quizId: {
        type: Number,
    },
    category: {
        type: String,
    },
    questions: [{
        type: Object,
        quizName: {
            type: String,
            required: true
        },
        answerArray: [
        {
            type: Object,
            answer: {
                type: String,
                required: true
            },
            answerIsCorrect: {
                type: String,
            }
        }
        ]
    }]
}, {collection: "Quizzes"});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
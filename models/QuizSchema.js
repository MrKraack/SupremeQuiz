const mongoose = require('mongoose');

// const quizSchema = new mongoose.Schema({
//     titel: {type: String}, // Spørgsmålet
//     answerArray: {type: []}, // spørgsmål og svar findes er i array
//     question: {type: Object}, // enkelte spørgsmål med svar der er i objektet
//     category: {type: String}, // kategori - børn / film & tv
//     createdBy: {type: String}, // Navn på hvem der lavede spørgsmål
//     createdDate: {type: Date} // Hvornår spørgsmålet blev lavet.
// }, {
//     collection: 'Quizzes'
// })


//Schema for quiz 
const quizSchema = new mongoose.Schema({
    type: { Object },
    quizId: { type: Number },
    titel: { type: String },
    category: { type: String },
    //Schema for questins
    questions: [{


        question: {
            type: { Object },
            name: { type: String },
            //schema for Answers
            answerArray: [{
                answer: {
                    type: { Object },
                    answerName: { type: String },
                    answerIsCorrect: { type: Boolean }
                }
            }]
        },
    }],    
    createdBy: { type: String }, // Navn på hvem der lavede spørgsmål
    createdDate: { type: Date } // Hvornår spørgsmålet blev lavet.

}, { collection: "Quizzes" });



module.exports = Quiz = mongoose.model("quiz", quizSchema);
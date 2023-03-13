const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    titel: {type: String}, // Spørgsmålet
    answerArray: {type: []}, // spørgsmål og svar findes er i array
    question: {type: Object}, // enkelte spørgsmål med svar der er i objektet
    category: {type: String}, // kategori - børn / film & tv
    createdBy: {type: String}, // Navn på hvem der lavede spørgsmål
    createdDate: {type: Date} // Hvornår spørgsmålet blev lavet.
})

module.exports = Quiz = mongoose.model("quiz", quizSchema);
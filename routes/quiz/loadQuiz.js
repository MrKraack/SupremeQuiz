const mongoose = require('mongoose');
const quizSchema = require('../../models/QuizSchema')

module.exports = async (req, res) => {

    const quizzes = await quizSchema.find();

    res.json(quizzes);
   
}

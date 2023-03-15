const mongoose = require("mongoose")
const quizSchema = require('../../models/QuizSchema')



module.exports = async(req,res) => {
    const quizById = await quizSchema.findOne(req.body)
}
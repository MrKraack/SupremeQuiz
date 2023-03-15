const mongoose = require("mongoose")
const quizSchema = require('../../models/QuizSchema')

module.exports = async (req,res) => {
    const {id} = req.params
    const quizById = await quizSchema.find({quizId: id})
    res.status(200).json(quizById)
    console.log(quizById)
}
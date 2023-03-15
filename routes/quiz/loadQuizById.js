const mongoose = require("mongoose")
const quizSchema = require('../../models/QuizSchema')

module.exports = async (req,res, next) => {
    const {id} = req.params
    const quizById = await quizSchema.find({quizId: id});

    res.locals.quizObject = quizById;
    next();
    
}
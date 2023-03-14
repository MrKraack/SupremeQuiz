let quizSchema = require('../../models/QuizSchema');

module.exports = async (req, res) => {
    try{
        let quizId = req.params.id
        const quiz = await quizSchema.findOne({quizId});
        if (!quiz) {
            return res.status(404).json({msg: 'quiz not found'})
        }
        await quiz.deleteOne();
        res.send("deleted quiz with ID: " + quizId);

    }catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }

}
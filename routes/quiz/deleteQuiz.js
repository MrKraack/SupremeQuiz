let quizSchema = require('../../models/QuizSchema');

// router.delete('/quiz/:quizId', async (req,res) => {
//     try{
//         const quiz = await quizSchema.findOne({quizId});
//         if (!quiz) {
//             return res.status(404).json({msg: 'quiz not found'})
//         }
//         await quiz.remove();
//     }catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// })

module.exports = async (req, res) => {
    try{
        const quiz = await quizSchema.findOne({id});
        if (!quiz) {
            return res.status(404).json({msg: 'quiz not found'})
        }
        await quiz.remove();
    }catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }

}
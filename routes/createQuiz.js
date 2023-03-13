router.get('/createQuiz', (req, res) =>{
    res.render('createquiz')
});

router.post('/createQuiz', (req, res) =>[

    const name = req.body.name;
    const category = req.body.category;
    const question = req.body.question;
]);
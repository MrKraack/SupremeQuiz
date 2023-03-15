const User = require("../../models/UserModel")

module.exports = async (req, res) => {
    let { username, password, email, avatarUrl } = req.body;

    User.register(new User({ email, username, avatarUrl, quizScore: [] }), password, function (err, user) {
        if (err) {
            res.json({ success: false, message: "Your account could not be saved. Error: " + err });
        }
        else {
            req.login(user, (err) => {
                if (err) {
                    res.json({ success: false, message: err });
                }
                else {
                    res.json({ success: true, message: "Your account has been saved" });
                }
            });
        }
    })
}
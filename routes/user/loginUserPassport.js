const passport = require("passport");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
    const { username, password } = req.body;

    if (!username) {
        res.json({ success: false, message: "Username was not given" })
    }
    else if (!password) {
        res.json({ success: false, message: "Password was not given" })
    }
    else {
        passport.authenticate("local",{ failureRedirect: '/login', successRedirect: '/addquiz' }, function (err, user, info) {
            if (err) {
                res.json({ success: false, message: err });
            }
            else {
                if (!user) {
                    res.json({ success: false, message: "username or password incorrect" });
                }
                else {
                    console.log(info)
                    const token = jwt.sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "24h" }, (err, token) => {
                        if (err) throw err;
                        // res.json({ token });
                        res.redirect('/user')
                    });
                    // res.json({ success: true, message: "Authentication successful" });
                    // console.log('login successful')
                }
            }
        })(req, res);
    }

}
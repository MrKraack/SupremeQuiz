const User = require("../../models/UserModel")
const bcrypt = require('bcrypt')
const passport = require("passport");

module.exports = async (req, res) => {
    const { username, password } = req.body;
    try {
        // Check if the user exists
        let user = await User.findOne({ username });

        //Here add new userData to be returned
        const userData = {
            username: user.username,
            user_id: user._id
        }
        if (!user) return res.status(400).json({ msg: 'This user does not exist' });


        // Check is the encrypted password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Username or password incorrect' });

        passport.authenticate('local', {
            failureRedirect: '/login',
            successRedirect: '/',
        })
        res.send('Login successful')

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
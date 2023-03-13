const User = require("../../models/UserModel")
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
    let { username, password, email, avatarUrl } = req.body;

    try {
        // check if the user already exists
        let usernameExist = await User.findOne({ username });
        if (usernameExist) return res.status(400).json({ msg: 'Username already exists' });

        let emailExist = await User.findOne({ email });
        if (emailExist) return res.status(400).json({ msg: 'Email already exists' });

        // create new user
        let user = new User({
            username,
            password,
            email,
            avatarUrl,
            quizScore: []
        });

        // hash user password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        console.log(user)
        res.json(user)

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}
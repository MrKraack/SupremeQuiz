const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 5 },
    avatar: {type: String, required:false},
    quizScore: { type: Array }
});

module.exports = User = mongoose.model("user", userSchema);
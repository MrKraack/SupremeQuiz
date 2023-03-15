const passportLocalMongoose = require('passport-local-mongoose');
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 5 },
    email: { type: String, required: true, unique: true },
    avatarUrl: {type: String, required:false},
    quizScore: { type: Array }
}, {collection: 'Users'});

userSchema.plugin(passportLocalMongoose)

module.exports = User = mongoose.model("user", userSchema);
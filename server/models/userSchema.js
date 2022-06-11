const mongoose = require("mongoose");
// const Poll = require("./pollSchema");
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    polls: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Poll"
    }]

});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);
module.exports = User;
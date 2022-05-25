const express = require('express');
const router = express.Router();
const User = require("../models/userSchema");

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post("/register", async (req, res, next) => {
  try {
    console.log(req.body);
    const { firstName, lastName, password, email } = req.body;

    const name = firstName + " " + lastName;
    const newUser = new User({
      username: name,
      email: email
    })
    console.log("name = ", name);
    User.register(newUser, password, function (err) {
      if (err) {
        console.log("Some error occured while registering the user");
        next(err);
      }
    })

    const userId = await User.find({ username: name });
    console.log("User id = ", userId);
    req.session.user = name;
    console.log(req.session);
    res.contentType("application/json");
    res.json("This is the sign up route");
  } catch (error) {
    console.log("Some error occured = ", error);
    next(error);
  }
});

module.exports = router;

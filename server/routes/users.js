const express = require('express');
const router = express.Router();
const User = require("../models/userSchema");
const passport = require("passport");
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post("/login", passport.authenticate("local", passport.authenticate()), (req, res) => {
  res.contentType("application/json");
  console.log(req.session);
  res.json("User is logged in", req.user, req.isAuthenticated());
})

router.post("/register", async (req, res, next) => {
  try {
    console.log(req.body);
    const { firstName, lastName, password, email } = req.body;

    const name = firstName + " " + lastName;
    const newUser = new User({
      username: name,
      email: email
    })

    await User.register(newUser, password, function (err) {
      if (err) {
        console.log("Some error occured while registering the user");
        next(err);
      }
    })
    req.session.user = req.user;
    console.log(req.session);
    res.contentType("application/json");
    res.json("User registered", req.session.user);
  } catch (error) {
    console.log("Some error occured = ", error);
    next(error);
  }
});

module.exports = router;

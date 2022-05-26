const express = require('express');
const router = express.Router();
const User = require("../models/userSchema");
const passport = require("passport");

router.post("/login", passport.authenticate("local", { failureRedirect: "/Signin", failureFlash: false, failureMessage: "Could not log in" }), (req, res, next) => {
  try {
    res.contentType("application/json");
    console.log(req.session);
    const body = {
      username: req.user.username,
      user_id: req.user._id,
      isAuthenticated: req.isAuthenticated(),
      message: "User logged in"
    }
    console.log(JSON.stringify(body));
    res.json(JSON.stringify(body));
  } catch (error) {
    console.log("Oh no some error occured in login route = ", error);
    next(error);
  }
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

    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, err => {
      if (err)
        return next(err);
    })
    console.log(req.session);
    res.contentType("application/json");
    const obj = {
      user: req.user,
      isAuthenticated: req.isAuthenticated(),
      message: "User registered"
    }
    res.json(obj);
  } catch (error) {
    console.log("Some error occured = ", error);
    next(error);
  }
});

router.post("/logout", (req, res, next) => {
  req.logOut();
  res.contentType("application/json");
  res.json("User logged out");
})

module.exports = router;

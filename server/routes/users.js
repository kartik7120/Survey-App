const express = require('express');
const router = express.Router();
const User = require("../models/userSchema");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById({ _id: id }).populate("polls");
    const userPolls = user.polls;
    console.log("User polls data = ", userPolls);
    const body = JSON.stringify(user);
    res.contentType("application/json");
    res.json(body);
  } catch (error) {
    next(error);
  }
})

router.post("/login", passport.authenticate("local", { failureRedirect: "/Signin", failureFlash: false, failureMessage: "Could not log in" }), (req, res, next) => {
  try {
    console.log("req.user in the login route = ", req.user);
    req.session.user = req.user;
    req.session.save();
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

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username: name,
      password: hashedPassword,
      email
    })

    const token = JWT.sign({ email }, process.env.SECRET, { expiresIn: "1h" });
    // await newUser.save();
    res.contentType("application/json");
    res.cookie("JWTtoken", token, { maxAge: 2 * 60 * 60 * 1000, httpOnly: true });
    res.json(token);
  } catch (error) {
    console.log("Some error occured = ", error);
    next(error);
  }
});

router.post("/logout", (req, res, next) => {
  try {
    req.logout(req.user, err => {
      if (err)
        return next(err);
    })
    delete req.session.user;
    res.contentType("application/json");
    const body = {
      message: "User logged out"
    }
    res.json(JSON.stringify(body));
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;

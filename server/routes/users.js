const express = require('express');
const router = express.Router();
const User = require("../models/userSchema");
const passport = require("passport");

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post("/login", (req, res, next) => {
  passport.authenticate('local', function (err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/users/login'); }

    // NEED TO CALL req.login()!!!
    req.login(user, next);
  })(req, res, next);

  res.contentType("application/json");
  console.log(req.session);
  const body = {
    user: req.user,
    isAuthenticated: req.isAuthenticated()
  }
  console.log(JSON.stringify(body));
  res.json(JSON.stringify(body));
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

module.exports = router;

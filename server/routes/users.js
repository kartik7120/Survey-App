const express = require('express');
const router = express.Router();
const User = require("../models/userSchema");

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post("/register", async (req, res, next) => {
  console.log(req.body);
  const { firstName, lastName, password, email } = req.body;

  const name = firstName + " " + lastName;

  User.register(new User({ username: name, email: email }), password, function (err) {
    if (err) {
      console.log("Some error occured while registering the user");
      next(err);
    }
  })
  req.session.user = name;
  console.log(req.session);
  res.contentType("application/json");
  res.json("This is the sign up route");
});

module.exports = router;

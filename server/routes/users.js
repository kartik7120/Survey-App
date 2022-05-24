const express = require('express');
const router = express.Router();
const User = require("../models/userSchema");
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post("/signup", (req, res) => {
  res.contentType("application/json");
  res.json("This is the sign up route");
})

module.exports = router;

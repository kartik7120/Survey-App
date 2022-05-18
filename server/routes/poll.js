// import Poll from "../models/pollSchema";
// import { Router } from "express";
const express = require("express");
const router = express.Router();

router.post("/create", (req, res, next) => {
    console.log("I am the poll home route");
    console.log("request body = ", req.body);
    res.send("HEllo I am the poll route");
});

module.exports = router;
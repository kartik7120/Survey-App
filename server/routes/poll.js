// import Poll from "../models/pollSchema";
// import { Router } from "express";
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    console.log("I am the poll home route");
    res.send("HEllo I am the poll route");
});

module.exports = router;
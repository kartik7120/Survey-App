const Poll = require("../models/pollSchema");
// import { Router } from "express";
const express = require("express");
const router = express.Router();

router.post("/create", async (req, res, next) => {
    try {
        console.log("request body = ", req.body);
        const { title, description, ...options } = req.body;
        console.log("Title = ", title);
        console.log("description = ", description);
        console.log("options = ", options);
        let op = [];
        for (let [key, value] of Object.entries(options)) {
            op.push(value); // values for options
        }
        let vote = [];
        for (let i = 0; i < op.length; i++) {
            vote.push(0); // initial values for votes for each option value
        }
        const newPoll = new Poll({
            title: title,
            description: description,
            options: op,
            votes: vote
        });
        await newPoll.save()
            .then(() => console.log("Successfully saved to the database"))
            .catch((err) => console.log("Error in saving to the database", err));
        res.send("Hello I am the poll route");
    } catch (error) {
        next(error);
    }
});

module.exports = router;
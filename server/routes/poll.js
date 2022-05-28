const Poll = require("../models/pollSchema");
const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
const { default: mongoose } = require("mongoose");

router.get("/allPolls", async (req, res, next) => {
    try {
        const pollData = await Poll.find({});
        res.contentType("application/json");
        res.send(pollData);
    } catch (error) {
        next(error);
    }
})

router.post("/create", async (req, res, next) => {
    try {
        console.log("Session user = ", req.user);
        console.log("Session = ", req.session);
        if (req.user) {
            const { title, description, options } = req.body;
            console.log("Title = ", title);
            console.log("description = ", description);
            console.log("options = ", options);
            let op = [];
            for (let [, value] of Object.entries(options)) {
                op.push(value); // values for options
            }
            let vote = [];
            for (let i = 0; i < op.length; i++) {
                vote.push(0); // initial values for votes for each option value
            }
            const newPoll = new Poll({
                _id: new mongoose.Types.ObjectId(),
                title: title,
                description: description,
                options: op,
                votes: vote
            });
            await newPoll.save()
                .then(() => console.log("Successfully saved to the database"))
                .catch((err) => console.log("Error in saving to the database", err));

            await (await User.findByIdAndUpdate({ _id: req.user.id }, { $push: { "polls": newPoll._id } }, { new: true })).save();
            // user.polls = newPoll._id;
            res.json("Hello I am the POST poll route");
        }
        else
            res.json("User is not logged in so cannot create a poll");
    } catch (error) {
        next(error);
    }
});

router.patch("/updateVotes/:id", async (req, res) => {
    const { id, targetValue } = req.body;

    const poll = await Poll.findById({ _id: id });
    let updateIdx = -1;
    const optionArray = poll.options;
    for (let i = 0; i < optionArray.length; i++) {
        if (optionArray[i] === targetValue) {
            updateIdx = i;
            break;
        }
    }

    const votesArray = poll.votes;
    votesArray[updateIdx] = votesArray[updateIdx] + 1;

    const newPoll = await Poll.findByIdAndUpdate({ _id: id }, { $set: { "votes": votesArray } }, { new: true });
    res.contentType("application/json");

    res.json(JSON.stringify(newPoll));
})

module.exports = router;
const Poll = require("../models/pollSchema");
const express = require("express");
const router = express.Router();

router.get("/allPolls", async (req, res, next) => {
    try {
        const pollData = await Poll.find({});
        // console.log(pollData);
        res.contentType("application/json");
        res.send(pollData);
    } catch (error) {
        next(error);
    }
})

router.post("/create", async (req, res, next) => {
    try {
        const { title, description, options } = req.body;
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
        res.json("Hello I am the POST poll route");
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
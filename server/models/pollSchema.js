import mongoose, { Schema } from "mongoose";

const pollSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    options: {
        type: [String],
        required: true
    },
    votes: {
        type: [Number],
        required: true
    }
});
const Poll = mongoose.model("Poll", pollSchema);
export default Poll;
import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    roomname: {
        type: String,
        required: [true, "Room is required"]
    },
    userId: {
        type: String,
        required: [true, "User id is not inserted yet"]
        // default:"default"
    },
    description: {
        type: String,
    },
    language: {
        type: String,
        required: [true, "Language is required"]
    },
    githubrepo: {
        type: String,

    }
}, { timestamps: true })

const Room =mongoose.models.rooms || mongoose.model("rooms", roomSchema)
// const User = mongoose.models.users || mongoose.model("users", userSchema);
export default Room;


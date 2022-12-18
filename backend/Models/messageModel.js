const mongoose = require('mongoose')
//Creating Schema
const messageModel = mongoose.Schema(
    {
        sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        content: { type: String, trim: true },
        chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" }
        
    },
    {
        timeStamps: true,
    }
);

const Message = mongoose.model("Message", messageModel)
module.exports = Message;
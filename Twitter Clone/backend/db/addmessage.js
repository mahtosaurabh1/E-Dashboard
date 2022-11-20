const mongoose=require('mongoose');

const addMessageSchema=new mongoose.Schema({
    message:String
});

module.exports = mongoose.model("feeds",addMessageSchema);
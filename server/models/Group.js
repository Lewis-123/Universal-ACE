const mongoose = require("mongoose");


const groupSchema = new mongoose.Schema({

    groupName:{
        type:String,
        required:true
    },

    location:{
        type:String,
        required:true
    },

    meetingDay:{
        type:String
    },

    status:{
        type:String,
        default:"Active"
    },


    createdDate:{
        type:Date,
        default:Date.now
    }

});


module.exports = mongoose.model(
    "Group",
    groupSchema
);
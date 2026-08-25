const mongoose = require("mongoose");


const memberSchema = new mongoose.Schema({


    memberName:{
        type:String,
        required:true
    },


    phone:{
        type:String
    },


    gender:{
        type:String
    },


    occupation:{
        type:String
    },


    savingsBalance:{
        type:Number,
        default:0
    },


    groupId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Group",
        required:true
    }


});


module.exports = mongoose.model(
    "Member",
    memberSchema
);
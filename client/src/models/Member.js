import mongoose from "mongoose";


const memberSchema = new mongoose.Schema({


    memberName:{
        type:String,
        required:true
    },


    phone:String,


    gender:String,


    occupation:String,


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



export default mongoose.models.Member ||

mongoose.model(
    "Member",
    memberSchema
);
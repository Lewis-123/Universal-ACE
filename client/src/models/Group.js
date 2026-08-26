import mongoose from "mongoose";


const groupSchema = new mongoose.Schema(

    {

        groupName: {

            type: String,

            required: true

        },


        location: {

            type: String,

            required: true

        },


        meetingDay: {

            type: String

        },


        status: {

            type: String,

            default: "Active"

        },


        createdDate: {

            type: Date,

            default: Date.now

        }

    },

    {
        timestamps:true
    }

);





const Group = mongoose.models.Group || mongoose.model(

    "Group",

    groupSchema

);



export default Group;
const express = require("express");
const router = express.Router();

const Member = require("../models/Member");
const Group = require("../models/Group");



// GET ALL MEMBERS
router.get("/", async (req, res) => {

    try {

        const members = await Member.find()
            .populate("groupId");


        res.json(members);


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});





// GET SINGLE MEMBER
router.get("/:id", async (req, res) => {

    try {


        const member = await Member.findById(req.params.id)
            .populate("groupId");


        if (!member) {

            return res.status(404).json({
                message: "Member not found"
            });

        }


        res.json(member);


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});






// CREATE MEMBER
router.post("/", async (req, res) => {


    try {


        const group = await Group.findById(req.body.groupId);


        if (!group) {

            return res.status(404).json({

                message: "Group not found"

            });

        }




        const member = new Member({

            memberName: req.body.memberName,

            phone: req.body.phone,

            gender: req.body.gender,

            occupation: req.body.occupation,

            savingsBalance: req.body.savingsBalance,

            groupId: req.body.groupId

        });



        const savedMember = await member.save();


        res.status(201).json(savedMember);



    } catch(error){


        res.status(400).json({

            message:error.message

        });


    }


});








// UPDATE MEMBER
router.put("/:id", async(req,res)=>{


    try{


        const updatedMember = await Member.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new:true
            }

        );


        res.json(updatedMember);



    }catch(error){


        res.status(400).json({

            message:error.message

        });


    }


});








// DELETE MEMBER
router.delete("/:id", async(req,res)=>{


    try{


        await Member.findByIdAndDelete(req.params.id);


        res.json({

            message:"Member deleted successfully"

        });



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});




module.exports = router;
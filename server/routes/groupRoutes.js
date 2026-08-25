const express = require("express");
const router = express.Router();

const Group = require("../models/Group");



// GET ALL GROUPS
router.get("/", async (req,res)=>{

    try{

        const groups = await Group.find();

        res.json(groups);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});




// GET SINGLE GROUP
router.get("/:id", async(req,res)=>{

    try{

        const group = await Group.findById(req.params.id);


        if(!group){

            return res.status(404).json({
                message:"Group not found"
            });

        }


        res.json(group);


    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});





// CREATE GROUP
router.post("/", async(req,res)=>{


    try{


        const group = new Group({

            groupName:req.body.groupName,

            location:req.body.location,

            meetingDay:req.body.meetingDay,

            status:req.body.status


        });



        const savedGroup = await group.save();


        res.status(201).json(savedGroup);



    }
    catch(error){


        res.status(400).json({

            message:error.message

        });


    }


});






// UPDATE GROUP
router.put("/:id", async(req,res)=>{


    try{


        const updatedGroup = await Group.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new:true
            }

        );


        res.json(updatedGroup);



    }
    catch(error){


        res.status(400).json({

            message:error.message

        });


    }


});







// DELETE GROUP
router.delete("/:id", async(req,res)=>{


    try{


        await Group.findByIdAndDelete(req.params.id);



        res.json({

            message:"Group deleted successfully"

        });



    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});





module.exports = router;
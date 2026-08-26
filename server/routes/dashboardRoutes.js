const express = require("express");

const router = express.Router();


const Group = require("../models/Group");

const Member = require("../models/Member");




// GET DASHBOARD STATISTICS

router.get("/", async(req,res)=>{


    try{


        const totalGroups = await Group.countDocuments();


        const totalMembers = await Member.countDocuments();



        const savingsResult = await Member.aggregate([

            {

                $group:{

                    _id:null,

                    totalSavings:{

                        $sum:"$savingsBalance"

                    }

                }

            }

        ]);



        const totalSavings =

        savingsResult.length > 0

        ? savingsResult[0].totalSavings

        : 0;




        const activeGroups = await Group.countDocuments({

            status:"Active"

        });





        res.json({

            totalGroups,

            totalMembers,

            totalSavings,

            activeGroups

        });



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});



module.exports = router;
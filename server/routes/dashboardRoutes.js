const express = require("express");

const router = express.Router();


const Group = require("../models/Group");
const Member = require("../models/Member");



// GET DASHBOARD STATISTICS

router.get("/", async (req, res) => {

    try {


        const totalGroups = await Group.countDocuments();


        const totalMembers = await Member.countDocuments();



        const savingsData = await Member.aggregate([

            {
                $group: {

                    _id: null,

                    totalSavings: {
                        $sum: "$savingsBalance"
                    }

                }
            }

        ]);



        const totalSavings = savingsData.length > 0
            ? savingsData[0].totalSavings
            : 0;




        const activeGroups = await Group.countDocuments({

            status: "Active"

        });





        res.status(200).json({

            totalGroups,

            totalMembers,

            totalSavings,

            activeGroups

        });



    } catch(error) {


        res.status(500).json({

            message:error.message

        });


    }


});



module.exports = router;
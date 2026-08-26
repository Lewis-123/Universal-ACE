import connectDB from "@/lib/mongodb";


import Group from "@/models/Group";

import Member from "@/models/Member";





export async function GET(){


    try{


        await connectDB();




        const totalGroups = await Group.countDocuments();




        const totalMembers = await Member.countDocuments();






        const savingsData = await Member.aggregate([


            {

                $group:{

                    _id:null,


                    totalSavings:{

                        $sum:"$savingsBalance"

                    }

                }


            }


        ]);







        const totalSavings = savingsData.length > 0

            ? savingsData[0].totalSavings

            : 0;








        const activeGroups = await Group.countDocuments({

            status:"Active"

        });







        return Response.json({


            totalGroups,


            totalMembers,


            totalSavings,


            activeGroups



        });






    }catch(error){



        return Response.json(


            {

                message:error.message

            },


            {

                status:500

            }


        );


    }



}
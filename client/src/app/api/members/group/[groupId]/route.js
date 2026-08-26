import connectDB from "@/lib/mongodb";

import Member from "@/models/Member";



export async function GET(

    request,

    {params}

){


    try{


        await connectDB();



        const members = await Member.find({

            groupId:params.groupId

        });



        return Response.json(members);



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
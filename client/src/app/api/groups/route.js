import connectDB from "@/lib/mongodb";

import Group from "@/models/Group";




// GET ALL GROUPS

export async function GET(){


    try{


        await connectDB();



        const groups = await Group.find();



        return Response.json(

            groups,

            {
                status:200
            }

        );



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







// CREATE GROUP

export async function POST(request){


    try{


        await connectDB();



        const body = await request.json();



        const group = await Group.create(body);



        return Response.json(

            group,

            {
                status:201
            }

        );



    }catch(error){


        return Response.json(

            {
                message:error.message
            },

            {
                status:400
            }

        );


    }


}
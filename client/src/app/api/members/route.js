import connectDB from "@/lib/mongodb";

import Member from "@/models/Member";

import Group from "@/models/Group";




// GET ALL MEMBERS

export async function GET(){


    try{


        await connectDB();



        const members = await Member.find()

        .populate("groupId");



        return Response.json(

            members,

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







// CREATE MEMBER

export async function POST(request){


    try{


        await connectDB();



        const body = await request.json();




        const groupExists = await Group.findById(

            body.groupId

        );




        if(!groupExists){


            return Response.json(

                {
                    message:"Group not found"
                },

                {
                    status:404
                }

            );


        }





        const member = await Member.create(body);




        return Response.json(

            member,

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
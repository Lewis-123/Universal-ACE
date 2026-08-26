import connectDB from "@/lib/mongodb";

import Group from "@/models/Group";




// GET SINGLE GROUP

export async function GET(
    request,
    {params}
){


    try{


        await connectDB();



        const group = await Group.findById(

            params.id

        );



        if(!group){


            return Response.json(

                {
                    message:"Group not found"
                },

                {
                    status:404
                }

            );


        }



        return Response.json(group);



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







// UPDATE GROUP

export async function PUT(

    request,

    {params}

){


    try{


        await connectDB();



        const body = await request.json();



        const updatedGroup = await Group.findByIdAndUpdate(

            params.id,

            body,

            {
                new:true
            }

        );



        return Response.json(updatedGroup);



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







// DELETE GROUP

export async function DELETE(

    request,

    {params}

){


    try{


        await connectDB();



        await Group.findByIdAndDelete(

            params.id

        );



        return Response.json({

            message:"Group deleted successfully"

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
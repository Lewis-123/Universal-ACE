import connectDB from "@/lib/mongodb";

import Member from "@/models/Member";




// GET SINGLE MEMBER

export async function GET(

    request,

    {params}

){


    try{


        await connectDB();



        const member = await Member.findById(

            params.id

        )

        .populate("groupId");




        if(!member){


            return Response.json(

                {
                    message:"Member not found"
                },

                {
                    status:404
                }

            );


        }




        return Response.json(member);



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







// UPDATE MEMBER

export async function PUT(

    request,

    {params}

){


    try{


        await connectDB();



        const body = await request.json();




        const updatedMember = await Member.findByIdAndUpdate(

            params.id,

            body,

            {
                new:true
            }

        );




        return Response.json(updatedMember);



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







// DELETE MEMBER

export async function DELETE(

    request,

    {params}

){


    try{


        await connectDB();



        await Member.findByIdAndDelete(

            params.id

        );




        return Response.json({

            message:"Member deleted successfully"

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
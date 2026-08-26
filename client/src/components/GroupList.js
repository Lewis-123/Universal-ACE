"use client";


import { useEffect, useState } from "react";

import Link from "next/link";


import {
    getGroups,
    deleteGroup
} from "@/utils/api";



export default function GroupList(){


    const [groups, setGroups] = useState([]);

    const [loading, setLoading] = useState(true);




    // LOAD ALL GROUPS

    const loadGroups = async()=>{


        try{


            const data = await getGroups();


            setGroups(data);


            setLoading(false);



        }catch(error){


            console.log(
                "Error loading groups:",
                error
            );


            setLoading(false);


        }


    };





    useEffect(()=>{


        loadGroups();


    },[]);







    // DELETE GROUP

    const handleDelete = async(id)=>{


        const confirmDelete = window.confirm(

            "Are you sure you want to delete this group?"

        );



        if(confirmDelete){


            try{


                await deleteGroup(id);



                alert(
                    "Group deleted successfully"
                );



                loadGroups();



            }catch(error){


                console.log(
                    "Delete error:",
                    error
                );


                alert(
                    "Failed to delete group"
                );


            }


        }


    };








    if(loading){


        return (

            <div className="text-center p-10">

                Loading groups...

            </div>

        );


    }






    return (


        <div>


            {

                groups.length === 0 ? (


                    <div className="bg-white shadow rounded-xl p-8 text-center">


                        <h2 className="text-xl font-semibold">

                            No groups available

                        </h2>


                        <p className="mt-3 text-gray-600">

                            Add your first community savings group.

                        </p>


                    </div>


                ) : (



                    <div className="grid md:grid-cols-3 gap-6">


                        {


                            groups.map((group)=>(


                                <div

                                key={group._id}

                                className="bg-white shadow-lg rounded-xl p-6 border"

                                >



                                    <h2 className="text-2xl font-bold text-green-700 mb-4">


                                        {group.groupName}


                                    </h2>





                                    <div className="space-y-2 text-gray-700">


                                        <p>

                                            <strong>
                                                Location:
                                            </strong>

                                            {" "}

                                            {group.location}

                                        </p>



                                        <p>

                                            <strong>
                                                Meeting Day:
                                            </strong>

                                            {" "}

                                            {group.meetingDay}

                                        </p>





                                        <p>

                                            <strong>
                                                Status:
                                            </strong>

                                            {" "}

                                            {group.status}

                                        </p>



                                    </div>







                                    <div className="flex gap-3 mt-6">


                                        <Link

                                        href={`/edit-group/${group._id}`}

                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"

                                        >

                                            Edit

                                        </Link>






                                        <button

                                        onClick={()=>handleDelete(group._id)}

                                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"

                                        >

                                            Delete

                                        </button>



                                    </div>




                                </div>


                            ))


                        }


                    </div>



                )

            }



        </div>


    );


}
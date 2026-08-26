"use client";


import { useEffect, useState } from "react";

import Link from "next/link";

import {
    getGroups,
    deleteGroup
} from "@/utils/api";



export default function GroupList(){


    const [groups,setGroups] = useState([]);


    const loadGroups = async()=>{


        try{


            const data = await getGroups();

            setGroups(data);


        }catch(error){


            console.log(error);


        }


    };




    useEffect(()=>{


        loadGroups();


    },[]);





    const handleDelete = async(id)=>{


        const confirmDelete =
        confirm(
            "Are you sure you want to delete this group?"
        );


        if(confirmDelete){


            await deleteGroup(id);


            loadGroups();


        }


    };





    return (

        <div className="grid md:grid-cols-3 gap-6">


            {
                groups.map((group)=>(


                    <div

                    key={group._id}

                    className="bg-white shadow rounded-xl p-6"

                    >


                        <h2 className="text-xl font-bold text-green-700">

                            {group.groupName}

                        </h2>


                        <p>

                            Location:
                            {" "}
                            {group.location}

                        </p>


                        <p>

                            Meeting:
                            {" "}
                            {group.meetingDay}

                        </p>



                        <div className="mt-5 flex gap-3">


                            <Link

                            href={`/edit-group/${group._id}`}

                            className="bg-blue-600 text-white px-4 py-2 rounded"

                            >

                                Edit

                            </Link>




                            <button

                            onClick={()=>handleDelete(group._id)}

                            className="bg-red-600 text-white px-4 py-2 rounded"

                            >

                                Delete

                            </button>


                        </div>



                    </div>


                ))

            }


        </div>

    );


}
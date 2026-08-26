"use client";


import { useEffect,useState } from "react";


import {
    getMembersByGroup
} from "@/utils/api";




export default function MemberList({groupId}){


    const [members,setMembers]=useState([]);




    useEffect(()=>{


        const loadMembers=async()=>{


            const data = await getMembersByGroup(groupId);


            setMembers(data);


        };



        if(groupId){

            loadMembers();

        }


    },[groupId]);







    return(

        <div className="mt-5">


            <h3 className="font-bold text-green-700">

                Members

            </h3>



            {

                members.length===0 ?


                (

                    <p className="text-gray-500">

                        No members yet

                    </p>

                )


                :


                (

                    <ul className="mt-3 space-y-2">


                        {

                            members.map(member=>(


                                <li

                                key={member._id}

                                className="bg-gray-100 p-2 rounded"

                                >

                                    {member.memberName}

                                </li>


                            ))

                        }


                    </ul>

                )


            }



        </div>

    );


}
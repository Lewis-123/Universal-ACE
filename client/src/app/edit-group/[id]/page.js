"use client";


import { useEffect, useState } from "react";

import { useParams, useRouter } from "next/navigation";


import {
    getGroupById,
    updateGroup
} from "@/utils/api";





export default function EditGroup(){


    const params = useParams();

    const router = useRouter();


    const id = params.id;



    const [formData,setFormData] = useState({

        groupName:"",

        location:"",

        meetingDay:"",

        status:"Active"

    });



    const [loading,setLoading] = useState(true);





    useEffect(()=>{


        const loadGroup = async()=>{


            try{


                const data = await getGroupById(id);


                setFormData({

                    groupName:data.groupName,

                    location:data.location,

                    meetingDay:data.meetingDay,

                    status:data.status

                });



                setLoading(false);



            }catch(error){


                console.log(error);


            }


        };



        if(id){

            loadGroup();

        }


    },[id]);








    const handleChange=(e)=>{


        setFormData({

            ...formData,

            [e.target.name]:e.target.value

        });


    };








    const handleSubmit=async(e)=>{


        e.preventDefault();



        try{


            await updateGroup(

                id,

                formData

            );



            alert(
                "Group updated successfully"
            );



            router.push("/groups");



        }catch(error){


            console.log(error);


            alert(
                "Update failed"
            );


        }


    };







    if(loading){


        return (

            <div className="p-10">

                Loading group details...

            </div>

        );


    }








    return (

        <main className="min-h-screen bg-gray-100 p-10">


            <div className="max-w-xl mx-auto bg-white shadow rounded-xl p-8">


                <h1 className="text-3xl font-bold text-green-700 mb-6">

                    Edit Group

                </h1>





                <form

                onSubmit={handleSubmit}

                className="space-y-5"

                >





                    <div>


                        <label className="block font-semibold mb-2">

                            Group Name

                        </label>


                        <input

                        type="text"

                        name="groupName"

                        value={formData.groupName}

                        onChange={handleChange}

                        className="w-full border p-3 rounded"

                        required

                        />


                    </div>







                    <div>


                        <label className="block font-semibold mb-2">

                            Location

                        </label>


                        <input

                        type="text"

                        name="location"

                        value={formData.location}

                        onChange={handleChange}

                        className="w-full border p-3 rounded"

                        required

                        />


                    </div>







                    <div>


                        <label className="block font-semibold mb-2">

                            Meeting Day

                        </label>


                        <select

                        name="meetingDay"

                        value={formData.meetingDay}

                        onChange={handleChange}

                        className="w-full border p-3 rounded"

                        >


                            <option>

                                Monday

                            </option>


                            <option>

                                Tuesday

                            </option>


                            <option>

                                Wednesday

                            </option>


                            <option>

                                Thursday

                            </option>


                            <option>

                                Friday

                            </option>


                            <option>

                                Saturday

                            </option>


                            <option>

                                Sunday

                            </option>



                        </select>


                    </div>







                    <button

                    type="submit"

                    className="bg-green-700 text-white px-6 py-3 rounded-lg w-full"

                    >

                        Update Group

                    </button>



                </form>



            </div>



        </main>

    );


}
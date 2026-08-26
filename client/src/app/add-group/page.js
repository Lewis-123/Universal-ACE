"use client";


import { useState } from "react";

import { useRouter } from "next/navigation";

import { createGroup } from "@/utils/api";



export default function AddGroup(){


    const router = useRouter();



    const [formData,setFormData] = useState({

        groupName:"",

        location:"",

        meetingDay:"",

        status:"Active"

    });




    const handleChange = (e)=>{


        setFormData({

            ...formData,

            [e.target.name]:e.target.value

        });


    };





    const handleSubmit = async(e)=>{


        e.preventDefault();



        try{


            await createGroup(formData);



            alert(
                "Group created successfully"
            );


            router.push("/groups");



        }catch(error){


            console.log(error);


            alert(
                "Failed to create group"
            );


        }


    };






    return (

        <main className="min-h-screen bg-gray-100 p-10">


            <div className="max-w-xl mx-auto bg-white shadow rounded-xl p-8">


                <h1 className="text-3xl font-bold text-green-700 mb-6">

                    Add New Group

                </h1>




                <form
                onSubmit={handleSubmit}
                className="space-y-5"
                >



                    <div>


                        <label className="block mb-2 font-semibold">

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


                        <label className="block mb-2 font-semibold">

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


                        <label className="block mb-2 font-semibold">

                            Meeting Day

                        </label>



                        <select

                        name="meetingDay"

                        value={formData.meetingDay}

                        onChange={handleChange}

                        className="w-full border p-3 rounded"

                        required

                        >


                            <option value="">

                                Select Day

                            </option>


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

                        Save Group

                    </button>



                </form>



            </div>


        </main>

    );


}
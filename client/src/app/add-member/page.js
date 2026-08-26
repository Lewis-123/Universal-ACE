"use client";


import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";


import {
    getGroups,
    createMember
} from "@/utils/api";




export default function AddMember(){


    const router = useRouter();



    const [groups,setGroups] = useState([]);



    const [formData,setFormData] = useState({

        memberName:"",

        phone:"",

        gender:"",

        occupation:"",

        savingsBalance:"",

        groupId:""

    });






    // LOAD GROUPS FOR DROPDOWN

    useEffect(()=>{


        const loadGroups = async()=>{


            const data = await getGroups();


            setGroups(data);


        };



        loadGroups();



    },[]);







    const handleChange=(e)=>{


        setFormData({

            ...formData,

            [e.target.name]:e.target.value

        });


    };







    const handleSubmit=async(e)=>{


        e.preventDefault();



        try{


            await createMember(formData);



            alert(

                "Member added successfully"

            );



            router.push("/groups");



        }catch(error){


            console.log(error);


            alert(

                "Failed to add member"

            );


        }


    };







    return (

        <main className="min-h-screen bg-gray-100 p-10">


            <div className="max-w-xl mx-auto bg-white shadow rounded-xl p-8">


                <h1 className="text-3xl font-bold text-green-700 mb-6">

                    Add New Member

                </h1>





                <form

                onSubmit={handleSubmit}

                className="space-y-5"

                >





                    <div>


                        <label className="block font-semibold mb-2">

                            Member Name

                        </label>


                        <input

                        type="text"

                        name="memberName"

                        value={formData.memberName}

                        onChange={handleChange}

                        className="w-full border p-3 rounded"

                        required

                        />


                    </div>







                    <div>


                        <label className="block font-semibold mb-2">

                            Phone Number

                        </label>


                        <input

                        type="text"

                        name="phone"

                        value={formData.phone}

                        onChange={handleChange}

                        className="w-full border p-3 rounded"

                        />


                    </div>







                    <div>


                        <label className="block font-semibold mb-2">

                            Gender

                        </label>


                        <select

                        name="gender"

                        value={formData.gender}

                        onChange={handleChange}

                        className="w-full border p-3 rounded"

                        >


                            <option value="">

                                Select Gender

                            </option>


                            <option>

                                Male

                            </option>


                            <option>

                                Female

                            </option>


                        </select>


                    </div>







                    <div>


                        <label className="block font-semibold mb-2">

                            Occupation

                        </label>


                        <input

                        type="text"

                        name="occupation"

                        value={formData.occupation}

                        onChange={handleChange}

                        className="w-full border p-3 rounded"

                        />


                    </div>







                    <div>


                        <label className="block font-semibold mb-2">

                            Savings Balance

                        </label>


                        <input

                        type="number"

                        name="savingsBalance"

                        value={formData.savingsBalance}

                        onChange={handleChange}

                        className="w-full border p-3 rounded"

                        />


                    </div>








                    <div>


                        <label className="block font-semibold mb-2">

                            Select Group

                        </label>



                        <select


                        name="groupId"


                        value={formData.groupId}


                        onChange={handleChange}


                        className="w-full border p-3 rounded"


                        required


                        >



                            <option value="">


                                Choose Group


                            </option>




                            {

                                groups.map(group=>(


                                    <option

                                    key={group._id}

                                    value={group._id}

                                    >

                                        {group.groupName}


                                    </option>


                                ))


                            }



                        </select>



                    </div>









                    <button

                    type="submit"

                    className="bg-green-700 text-white px-6 py-3 rounded-lg w-full"

                    >

                        Save Member

                    </button>



                </form>



            </div>


        </main>

    );


}
"use client";


import {useEffect,useState} from "react";


import DashboardCard from "@/components/DashboardCard";


import {
    getDashboardStats
} from "@/utils/api";





export default function Dashboard(){


    const [stats,setStats]=useState({

        totalGroups:0,

        totalMembers:0,

        totalSavings:0,

        activeGroups:0

    });






    useEffect(()=>{


        const loadStats=async()=>{


            const data = await getDashboardStats();


            setStats(data);


        };


        loadStats();


    },[]);







    return (

        <main className="min-h-screen bg-gray-100 p-10">


            <h1 className="text-4xl font-bold text-green-700 mb-8">

                Universal ACE Dashboard

            </h1>




            <div className="grid md:grid-cols-4 gap-6">



                <DashboardCard

                title="Total Groups"

                value={stats.totalGroups}

                />




                <DashboardCard

                title="Total Members"

                value={stats.totalMembers}

                />





                <DashboardCard

                title="Total Savings"

                value={`KES ${stats.totalSavings}`}

                />





                <DashboardCard

                title="Active Groups"

                value={stats.activeGroups}

                />



            </div>



        </main>

    );


}
"use client";


import Link from "next/link";



export default function Navbar(){


    return (

        <nav className="bg-green-800 text-white px-8 py-5 shadow-lg">


            <div className="max-w-7xl mx-auto flex justify-between items-center">


                <Link

                href="/"

                className="text-2xl font-bold"

                >

                    Universal ACE

                </Link>





                <div className="flex gap-6 text-sm md:text-base">


                    <Link href="/">

                        Home

                    </Link>



                    <Link href="/dashboard">

                        Dashboard

                    </Link>



                    <Link href="/groups">

                        Groups

                    </Link>



                    <Link href="/add-group">

                        Add Group

                    </Link>



                    <Link href="/add-member">

                        Add Member

                    </Link>



                </div>



            </div>


        </nav>

    );


}
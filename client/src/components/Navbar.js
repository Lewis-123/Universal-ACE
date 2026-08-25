"use client";

import Link from "next/link";


export default function Navbar(){


    return (

        <nav className="bg-green-700 text-white px-8 py-4 flex justify-between items-center">


            <div>

                <h1 className="text-xl font-bold">
                    Universal ACE
                </h1>

            </div>



            <div className="flex gap-6">


                <Link href="/">
                    Home
                </Link>


                <Link href="/groups">
                    List Groups
                </Link>


                <Link href="/add-group">
                    Add Group
                </Link>


            </div>


        </nav>

    );


}
"use client";


import Link from "next/link";



export default function Navbar(){


return (

<nav className="bg-green-700 text-white px-8 py-4 flex justify-between items-center">


<h1 className="text-xl font-bold">

Universal ACE

</h1>




<div className="flex gap-5">


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


</nav>

);


}
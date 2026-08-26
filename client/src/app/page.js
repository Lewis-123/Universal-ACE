import Link from "next/link";



export default function Home(){


    return (

        <main className="min-h-screen bg-gray-100 p-10">


            <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10 text-center">


                <h1 className="text-5xl font-bold text-green-800">

                    Universal ACE

                </h1>




                <p className="mt-6 text-lg text-gray-700">


                    A community savings management platform
                    designed to help groups manage members,
                    savings records, and financial activities
                    efficiently.


                </p>





                <div className="mt-8 flex justify-center gap-5">


                    <Link

                    href="/dashboard"

                    className="bg-green-700 text-white px-6 py-3 rounded-lg"

                    >

                        View Dashboard

                    </Link>





                    <Link

                    href="/add-group"

                    className="border border-green-700 text-green-700 px-6 py-3 rounded-lg"

                    >

                        Create Group

                    </Link>



                </div>




                <div className="mt-10">


                    <p className="text-gray-500">

                        Source Code:

                    </p>



                    <a

                    href="https://github.com/Lewis-123/Universal-ACE.git"

                    target="_blank"

                    className="text-blue-600 underline"

                    >

                        GitHub Repository

                    </a>


                </div>




            </section>


        </main>

    );


}
import GroupList from "@/components/GroupList";



export default function Groups(){


    return (

        <main className="min-h-screen bg-gray-100 p-10">


            <div className="max-w-6xl mx-auto">


                <h1 className="text-4xl font-bold text-green-700 mb-8">

                    Community Groups

                </h1>


                <GroupList />


            </div>


        </main>

    );


}
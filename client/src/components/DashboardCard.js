export default function DashboardCard({

    title,

    value

}){


    return (

        <div className="bg-white shadow rounded-xl p-6">


            <h2 className="text-gray-500">

                {title}

            </h2>


            <p className="text-3xl font-bold text-green-700 mt-3">

                {value}

            </p>



        </div>

    );


}
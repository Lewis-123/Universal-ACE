const express = require("express");
const cors = require("cors");
require("dotenv").config();


const connectDB = require("./config/db");


const groupRoutes = require("./routes/groupRoutes");
const memberRoutes = require("./routes/memberRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");



const app = express();



connectDB();



app.use(cors());

app.use(express.json());



// ROUTES

app.use("/api/groups", groupRoutes);

app.use("/api/members", memberRoutes);

app.use("/api/dashboard", dashboardRoutes);




// TEST ROUTE

app.get("/", (req,res)=>{

    res.json({

        message:"Universal ACE API Running"

    });

});





const PORT = process.env.PORT || 5000;



app.listen(PORT,()=>{


    console.log(
        `Server running on port ${PORT}`
    );


});
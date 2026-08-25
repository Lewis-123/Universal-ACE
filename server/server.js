const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const groupRoutes = require("./routes/groupRoutes");


const app = express();


// CONNECT DATABASE
connectDB();


// MIDDLEWARE
app.use(cors());

app.use(express.json());


// API ROUTES
app.use("/api/groups", groupRoutes);



// TEST ROUTE
app.get("/", (req, res) => {

    res.json({
        message: "Universal ACE API Running"
    });

});



// SERVER PORT
const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});
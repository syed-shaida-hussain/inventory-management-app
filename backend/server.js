const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes")

const app = express();

//Middlewares

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors())

//Routes Middlewares

app.use("/api/users", userRoutes)

//Routes

app.get("/" , (req , res) => {
    res.send("HomePage")
})

const PORT = process.env.port || 5000 ;


// connecting with mongoose

mongoose
    .connect(process.env.MONGO_URI).then(() => {
        app.listen(PORT , () => {
            console.log(`Server running on port ${PORT}`)
        })
    }).catch((err) => console.log(err));
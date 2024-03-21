const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./models/Model")
const bcrypt = require("bcrypt")
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());


//.env variabels
const Port = process.env.PORT;
const Mongo_URL = process.env.URL;


mongoose.connect(Mongo_URL)
//check connection
const db = mongoose.connection;
db.on("error",(error)=> console.error("MongoDB connection error :", error))
db.once("open",()=> console.log("connected to MongoDB.."))


app.post('/api/v1/register',(req,res) =>{
    const { fname, lname, email, password } = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        UserModel.create({fname, lname, email, password:hash})
        .then(users => res.json(users))
        .catch(err => res.json(err))
    })
    .catch(err => console.log(err.message))
})


app.post('/api/v1/login',(req,res) =>{
    const { email, password } = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, (err,response) => {
                if(response){
                    res.json("success")
                }
                else{
                    res.json("The Password Incorrect")
                }
            })
        }
        else{
            res.json("No Record Existed")
        }
    })
})


app.listen(Port,() => {
    console.log(`Server is Running on port ${Port}`);
})
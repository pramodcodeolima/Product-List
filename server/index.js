const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./models/Model")
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
    UserModel.create(req.body)
    .then(reg => res.status(201).json(reg))
    .catch(err => res.status(500).json({
        error: err.message
    }))
})


app.post('/api/v1/login',(req,res) =>{
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json("Password incorrect")
            }
        }else{
            res.json("No account existed.")
        }
    })
    .catch(err => {
        res.json("login error")
    });
})


app.listen(Port,() => {
    console.log(`Server is Running on port ${Port}`);
})
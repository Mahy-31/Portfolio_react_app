const express = require("express");
const collection = require("./Mongo");
const aapp = express();
const cors = require("cors");
aapp.use(express.json);
aapp.use(express.urlencoded({extended:true}));
aapp.use(cors());

aapp.post("/contact",async(req,res)=>{
    const {name, email, number, message} = req.body;

    const data = {
        name:name,
        email:email,
        number:number,
        message:message
    }

    await collection.insertMany([data])
})

aapp.listen(3000,() => {
    console.log("port connected")
})


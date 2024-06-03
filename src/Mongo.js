const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/portfolio-react-app")
.then(()=>{
    console.log("connected")
})
.catch(()=>{
    console.log("Failed")
})

const newSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    number: {
        type: Int,
        required: false,
    },
    message:{
        type: String,
        required: true,
    }
})

const collection = mongoose.model("collection",newSchema);

module.exports = collection;
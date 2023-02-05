let mongoose = require("mongoose")

let userSchema = new mongoose.Schema({
    "email":String,
    "password":String
})

mongoose.model("MODELUSER",userSchema)
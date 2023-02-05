const express = require("express")
const mongoose = require("mongoose")
const application = express()


application.use(express.json())


require("./models/test-db")


application.use("/",require("./apis/test/test-post"))


const MongoObj = { useNewUrlParser: true, useUnifiedTopology: true }
const MongoUrl = "mongodb+srv://karan:karanarora@cluster0.ujsaxn6.mongodb.net/?retryWrites=true&w=majority"
function MongoFun(err){
    if(err){console.log("eroor");}
    else {console.log("conected ...");}
}


mongoose.set('strictQuery', true);
mongoose.connect(MongoUrl,MongoObj,(err)=>{MongoFun(err)})


console.log("server has started");  
application.listen(200)
application.get("/",(req,res)=>{
    res.json({page:"page-root",user:"karna"})
    console.log("GET 200 granted");
})
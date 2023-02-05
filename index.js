const express = require("express")


const application = express()


application.use(express.json())


application.use("/",require("./apis/test/test-post"))


console.log("server has started");  
application.listen(200)
application.get("/",(req,res)=>{
    res.json({page:"page-root",user:"karna"})
    console.log("GET 200 granted");
})
const express = require("express")
const Router = express.Router()

function handleTestpost(req,res){
    res.json({
        body:req.body,
        query:req.query
    })
}

Router.post("/api/testpost",(req,res)=>{
    res.status(200).json({
        body:req.body,
        query:req.query
    })
})
module.exports = Router
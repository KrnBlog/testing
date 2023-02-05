const express = require("express");
const Router = express.Router();
const mongoose = require("mongoose");

let MODELUSER = mongoose.model("MODELUSER");
Router.post("/api/testpost", (req, res) => {
  MODELUSER.find().then((allData) => {
    let email = req.body.email
    let password = req.body.password
    let newUser = new MODELUSER({email,password})
    newUser.save()
    return res.status(200).json({
      body: req.body
    });
  });
});
module.exports = Router;

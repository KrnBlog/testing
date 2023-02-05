const express = require("express");
const Router = express.Router();
const mongoose = require("mongoose");

let MODELUSER = mongoose.model("MODELUSER");

Router.get("/api/getdocsall", (req, res) => {
    MODELUSER.find().then((allData) => {
        return res.status(200).json(allData,);
      });
})

module.exports = Router;
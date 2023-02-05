const express = require("express");
const Router = express.Router();
const mongoose = require("mongoose");

let USERS = mongoose.model("passmng-users");

Router.get("/api/getdocsold", (req, res) => {
    USERS.find().then((allData) => {
        return res.status(200).json(allData,);
      });
})
module.exports = Router;
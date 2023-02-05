const express = require("express");
const Router = express.Router();
const mongoose = require("mongoose");

let MODELUSER = mongoose.model("MODELUSER");
Router.post("/api/testpost", (req, res) => {
  MODELUSER.find().then((allData) => {
    return res.status(200).json({
      body: req.body,
      query: req.query,
      data: allData,
    });
  });
});
module.exports = Router;

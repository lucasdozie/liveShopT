"use strict"

const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");

const router = express.Router();

const {BASE_URL} = require("./../config/constants");
module.exports = (app: any) => {
  app.use(bodyParser.json());
  

  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(morgan("dev"));

  app.use(cors());

  app.get("test", (req: any, res: any) => {
    console.log("Testing.... 123")
  })
  //main route

  app.use(router);

  require("./../routes")(router);

  router.get("", (req: any, res: any) => {
    res.status(200).json({
      status: "success",
      message: "Welcome to LiveShop!!!"
    });
  });

  // app.use(`${BASE_URL}show`, show);

  // // //inventories routes
  // app.use(`${BASE_URL}inventory`, inventory);
};

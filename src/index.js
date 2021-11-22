"use strict";
import express from "express";
import database from "./api/v1/config/db";
import logger from "./api/v1/config/logger";

const app = express();
database();
require("./api/v1/starter/config")(app);

require("./api/v1/starter/routes")(app);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => logger.info(`Listening on port ${port}`));

module.exports = server;
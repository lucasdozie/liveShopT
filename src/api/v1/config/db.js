import {
    DBURL,
    MONGO_DB,
    MONGO_PASSWORD,
    MONGO_USER,
    NODE_ENV
  } from "./env";
  import logger from "./logger";
  
  const mongoose = require("mongoose");
  const DBURL_DEV = `mongodb://127.0.0.1:27017/liveshop-test`;
  
  const FALLBACK_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@cluster0-shard-00-00-zckfc.gcp.mongodb.net:27017,cluster0-shard-00-01-zckfc.gcp.mongodb.net:27017,cluster0-shard-00-02-zckfc.gcp.mongodb.net:27017/${MONGO_DB}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`;
  
  const database = () => {
    if (NODE_ENV === "test") {
      mongoose
        .connect(DBURL_DEV, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false
        })
        .then(res => {
          logger.info(`Database connected to ${DBURL_DEV}`);
        });
    }
    mongoose
      .connect(FALLBACK_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then(res => {
        logger.info(`Database connected!`);
      })
      .catch(err => {
        logger.warn(`Database failure to connected! `,err);
      });
  };
  
  export default database;
  
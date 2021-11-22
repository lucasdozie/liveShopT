const dotenv = require("dotenv");

dotenv.config();

export const NODE_ENV = process.env.NODE_ENV;

export const DBURL = process.env.DBURL;
export const DBURL_DEV = process.env.DBURL_DEV;
export const PORT = process.env.PORT;
export const URI = process.env.URI;
export const MONGO_USER = process.env.MONGO_USER;
export const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
export const MONGO_DB = process.env.MONGO_DB;
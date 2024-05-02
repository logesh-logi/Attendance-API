const sequelize = require("sequelize");
require("dotenv").config();

const db = new sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DOCKER_DB_HOST,
    dialect: process.env.DIALECT,
  }
);

module.exports = db;

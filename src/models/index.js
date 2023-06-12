"use strict";
require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");

//-----------------------------------requirements------------------------------------

const Food = require("./food");
const Clothes = require("./clothes");

//---------------------------------******************----------------------------------
/*==============seting up a database connection using Sequelize============= */

const POSTGRES_URI =
  process.env.NODE_ENV === "test"
    ? "sqlite::memory:"
    : process.env.DATABSAE_URL;

let sequelizeOptions =
  process.env.NODE_ENV === "production"
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {};
const sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

module.exports = {
  db: sequelize,
  Food: Food(sequelize, DataTypes),
  Clothes: Clothes(sequelize, DataTypes),
};

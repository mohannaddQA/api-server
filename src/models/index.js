"use strict";
require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");

//-----------------------------------requirements------------------------------------
// these are the abstract models of the tables we want to create.
const FoodModel = require("./food.model");
const ClothesModel = require("./clothes.model");
const AuthorsModel = require("./authors.model");
const BooksModel = require("./books.model");
// this is the colliction class
const Collection = require("./lib/collection");
//---------------------------------******************----------------------------------
/*==============seting up a database connection using Sequelize============= */

const POSTGRES_URI =
  process.env.NODE_ENV === "test"
    ? "sqlite::memory:"
    : process.env.DATABSAE_URL;

let sequelizeOptions =
  process.env.NODE_ENV === "production" // this is production , it won't work locally , so if you try npm start it won't work
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

//-----------------------------------creating the tables by sequalize--------------------------------------------------------
//=======================================================================================================
/* these are done in the old way where we create the tables, and the methods or the operations are done in the routes
and i will call them tables. i kept it for the sake of comparison. */
const FoodTable = FoodModel(sequelize, DataTypes);
const ClothesTable = ClothesModel(sequelize, DataTypes);
//=======================================================================================================
/* these are done in the new way where we create a colliction  that will contain both the model (table) and the operations 
that can be done on that or table  */
// creating the tables
const AuthorsTable = AuthorsModel(sequelize, DataTypes);
const BooksTable = BooksModel(sequelize, DataTypes);
// joining the tables
AuthorsTable.hasMany(BooksTable, {
  foreignKey: "authorId",
  sourceKey: "id",
});
BooksTable.belongsTo(AuthorsTable, {
  foreignKey: "authorId",
  targetKey: "id",
});
// creating the collections
const AuthorsCollection = new Collection(AuthorsTable);
const BooksCollection = new Collection(BooksTable);

//-----------------------------------------******************---------------------------------------------------------------

module.exports = {
  db: sequelize,
  FoodTable: FoodTable,
  ClothesTable: ClothesTable,
  AuthorsCollection: AuthorsCollection,
  BooksCollection: BooksCollection,
};

"use strict";

const AuthorsModel = (sequelize, DataTypes) =>
  sequelize.define("authors", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

module.exports = AuthorsModel;

// here we defined the function that ==> when executed creates authors table in the db

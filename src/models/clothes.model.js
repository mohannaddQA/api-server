"use strict";
const ClothesModel = (sequelize, DataTypes) =>
  sequelize.define("clothe", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = ClothesModel;

// here we defined the function that ==> when executed creates Clothes table in the db

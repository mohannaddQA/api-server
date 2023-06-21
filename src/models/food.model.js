"use strict";
const FoodModel = (sequelize, DataTypes) =>
  sequelize.define("food", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    isVegetarian: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
module.exports = FoodModel;

// here we defined the function that ==> when executed creates Food table in the db

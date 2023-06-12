"use strict";
const Food = (sequelize, DataTypes) =>
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
module.exports = Food;

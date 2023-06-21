"use strict";

const BooksModel = (sequelize, DataTypes) =>
  sequelize.define("books", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    publicationYear: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

module.exports = BooksModel;

// here we defined the function that ==> when executed creates Books table in the db

const express = require("express");
const { BooksCollection } = require("../models/index");
const booksRouter = express.Router();

/*================================================*/
// Create a new book item
booksRouter.post("/books", createAbook);

async function createAbook(req, res) {
  let newBook = req.body;
  let createdBook = await BooksCollection.add(newBook);
  res.status(201).json(createdBook);
}
/*================================================*/
// Get all books items
booksRouter.get("/books", getAllBooks);

async function getAllBooks(req, res) {
  let allBooks = await BooksCollection.read();
  res.status(200).json(allBooks);
}
/*================================================*/
// Get a specific book item by book ID
booksRouter.get("/books/:id", getBookByBookId);

async function getBookByBookId(req, res) {
  let BookId = req.params.id;
  let BookResult = await BooksCollection.read({
    where: {
      id: BookId,
    },
  });
  res.status(200).json(BookResult);
}
/*================================================*/
// Update a book item by book ID
booksRouter.put("/books/:id", updateBookByBookId);

async function updateBookByBookId(req, res) {
  let BookId = req.params.id;
  let updatedBookData = req.body;

  let updatedBook = await BooksCollection.update(updatedBookData, BookId);
  res.status(201).json(updatedBook);
}
/*================================================*/
// Delete a clothe  by ID
booksRouter.delete("/clothes/:id", deleteClothesById);

async function deleteClothesById(req, res) {
  let BookId = req.params.id;
  let BookToDelete = await BooksCollection.delete(BookId);
  res.status(204).json(BookToDelete);
}
/*================================================*/

module.exports = booksRouter;

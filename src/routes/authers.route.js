const express = require("express");
const { AuthorsCollection, BooksCollection } = require("../models/index");
const authersRouter = express.Router();

/*================================================*/
// Create a new Auther item
authersRouter.post("/authers", createAnAuther);

async function createAnAuther(req, res) {
  let newAuther = req.body;
  let createdAuther = await AuthorsCollection.add(newAuther);
  res.status(201).json(createdAuther);
}
/*================================================*/
// Get all Authers items
authersRouter.get("/authers", getAllAuthers);

async function getAllAuthers(req, res) {
  let allAuthers = await AuthorsCollection.read();
  res.status(200).json(allAuthers);
}
/*================================================*/
// Get a specific Auther item by the Auther ID
authersRouter.get("/authers/:id", getAutherByAutherId);

async function getAutherByAutherId(req, res) {
  let AutherId = req.params.id;
  let AutherResult = await AuthorsCollection.read(AutherId);
  res.status(200).json(AutherResult);
}
/*================================================*/
//get auther with all his books
authersRouter.get("/authers/:id/books", getAuthorAndBooks);
async function getAuthorAndBooks(req, res) {
  let { id } = req.params;
  let authorsResult = await AuthorsCollection.readAutherWithHisBooks(
    id,
    BooksCollection.table
  );
  res.status(200).send(authorsResult);
}

/*================================================*/
// Update an Auther item by the Auther ID
authersRouter.put("/authers/:id", updateAutherByAutherId);

async function updateAutherByAutherId(req, res) {
  let AutherId = req.params.id;
  let updatedAutherData = req.body;

  let updatedBook = await AuthorsCollection.update(updatedAutherData, AutherId);
  res.status(201).json(updatedBook);
}
/*================================================*/
// Delete a an Auther by Auther ID
authersRouter.delete("/authers/:id", deleteAutherById);

async function deleteAutherById(req, res) {
  let AutherId = req.params.id;
  let AutherToDelete = await AuthorsCollection.delete(AutherId);
  res.status(204).json(AutherToDelete);
}
/*================================================*/

module.exports = authersRouter;

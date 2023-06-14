const express = require("express");
const { ClothesTable } = require("../models/index");
const clothesRouter = express.Router();

/*================================================*/
// Create a new clothe

clothesRouter.post("/clothes", createClothes);

async function createClothes(req, res) {
  let newClothes = req.body;
  let createdClothes = await ClothesTable.create(newClothes);
  res.status(201).json(createdClothes);
}
/*================================================*/
// Get all clothes

clothesRouter.get("/clothes", getAllClothes);

async function getAllClothes(req, res) {
  let Allclothes = await ClothesTable.findAll();
  res.status(200).json(Allclothes);
}
/*================================================*/
// Get a specific clothe  by ID

clothesRouter.get("/clothes/:id", getClothesById);

async function getClothesById(req, res) {
  let id = req.params.id;
  let clothesResult = await ClothesTable.findOne({
    where: {
      id: id,
    },
  });
  res.status(200).json(clothesResult);
}
/*================================================*/
// Update a clothe  by ID

clothesRouter.put("/clothes/:id", updateClothesById);

async function updateClothesById(req, res) {
  let id = req.params.id;
  let updatedClothesData = req.body;
  let clothesToUpdate = await ClothesTable.findOne({
    where: {
      id: id,
    },
  });
  let updatedClothes = await clothesToUpdate.update(updatedClothesData);
  res.status(201).json(updatedClothes);
}
/*================================================*/
// Delete a clothe  by ID

clothesRouter.delete("/clothes/:id", deleteClothesById);

async function deleteClothesById(req, res) {
  let id = req.params.id;
  let clothesToDelete = await ClothesTable.destroy({
    where: {
      id: id,
    },
  });
  res.status(204).json(clothesToDelete);
}

module.exports = clothesRouter;

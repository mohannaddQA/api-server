const express = require("express");
const { Food } = require("../models/index");
const foodRouter = express.Router();

/*================================================*/
// Create a new food item
foodRouter.post("/food", createFood);

async function createFood(req, res) {
  let newFood = req.body;
  let createdFood = await Food.create(newFood);
  res.status(201).json(createdFood);
}
/*================================================*/
// Get all food items
foodRouter.get("/food", getAllFood);

async function getAllFood(req, res) {
  let allFood = await Food.findAll();
  res.status(200).json(allFood);
}
/*================================================*/
// Get a specific food item by ID
foodRouter.get("/food/:id", getFoodById);

async function getFoodById(req, res) {
  let id = req.params.id;
  let foodResult = await Food.findOne({
    where: {
      id: id,
    },
  });
  res.status(200).json(foodResult);
}
/*================================================*/
// Update a food item by ID
foodRouter.put("/food/:id", updateFoodById);

async function updateFoodById(req, res) {
  let id = req.params.id;
  let updatedFoodData = req.body;
  let foodToUpdate = await Food.findOne({
    where: {
      id: id,
    },
  });
  let updatedFood = await foodToUpdate.update(updatedFoodData);
  res.status(201).json(updatedFood);
}
/*================================================*/
// Delete a food item by ID
foodRouter.delete("/food/:id", deleteFoodById);

async function deleteFoodById(req, res) {
  let id = req.params.id;
  await Food.destroy({
    where: {
      id: id,
    },
  });
  res.status(204).json();
}
/*================================================*/

module.exports = foodRouter;

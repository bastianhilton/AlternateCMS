module.exports = app => {
  const stocks = require("../controllers/stock.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", stocks.create);

  // Retrieve all Tutorials
  router.get("/", stocks.findAll);

  // Retrieve all published Tutorials
  router.get("/published", stocks.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", stocks.findOne);

  // Update a Tutorial with id
  router.put("/:id", stocks.update);

  // Delete a Tutorial with id
  router.delete("/:id", stocks.delete);

  // Delete all Tutorials
  router.delete("/", stocks.deleteAll);

  app.use('/api/stocks', router);
};
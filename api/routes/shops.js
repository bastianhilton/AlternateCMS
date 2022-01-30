module.exports = app => {
  const shops = require("../controllers/shop.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", shops.create);

  // Retrieve all Tutorials
  router.get("/", shops.findAll);

  // Retrieve all published Tutorials
  router.get("/published", shops.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", shops.findOne);

  // Update a Tutorial with id
  router.put("/:id", shops.update);

  // Delete a Tutorial with id
  router.delete("/:id", shops.delete);

  // Delete all Tutorials
  router.delete("/", shops.deleteAll);

  app.use('/api/shops', router);
};
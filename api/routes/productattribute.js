module.exports = app => {
  const productattributes = require("../controllers/productattribute.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", productattributes.create);

  // Retrieve all Tutorials
  router.get("/", productattributes.findAll);

  // Retrieve all published Tutorials
  router.get("/published", productattributes.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", productattributes.findOne);

  // Update a Tutorial with id
  router.put("/:id", productattributes.update);

  // Delete a Tutorial with id
  router.delete("/:id", productattributes.delete);

  // Delete all Tutorials
  router.delete("/", productattributes.deleteAll);

  app.use('/api/productattributes', router);
};
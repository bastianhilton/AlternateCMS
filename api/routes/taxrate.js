module.exports = app => {
  const taxrates = require("../controllers/taxrate.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", taxrates.create);

  // Retrieve all Tutorials
  router.get("/", taxrates.findAll);

  // Retrieve all published Tutorials
  router.get("/published", taxrates.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", taxrates.findOne);

  // Update a Tutorial with id
  router.put("/:id", taxrates.update);

  // Delete a Tutorial with id
  router.delete("/:id", taxrates.delete);

  // Delete all Tutorials
  router.delete("/", taxrates.deleteAll);

  app.use('/api/taxrates', router);
};
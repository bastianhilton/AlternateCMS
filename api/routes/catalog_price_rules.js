module.exports = app => {
  const catalogpricerules = require("../controllers/catalogpricerule.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", catalogpricerules.create);

  // Retrieve all Tutorials
  router.get("/", catalogpricerules.findAll);

  // Retrieve all published Tutorials
  router.get("/published", catalogpricerules.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", catalogpricerules.findOne);

  // Update a Tutorial with id
  router.put("/:id", catalogpricerules.update);

  // Delete a Tutorial with id
  router.delete("/:id", catalogpricerules.delete);

  // Delete all Tutorials
  router.delete("/", catalogpricerules.deleteAll);

  app.use('/api/catalogpricerules', router);
};
module.exports = app => {
  const currencyrates = require("../controllers/currencyrate.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", currencyrates.create);

  // Retrieve all Tutorials
  router.get("/", currencyrates.findAll);

  // Retrieve all published Tutorials
  router.get("/published", currencyrates.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", currencyrates.findOne);

  // Update a Tutorial with id
  router.put("/:id", currencyrates.update);

  // Delete a Tutorial with id
  router.delete("/:id", currencyrates.delete);

  // Delete all Tutorials
  router.delete("/", currencyrates.deleteAll);

  app.use('/api/currencyrates', router);
};
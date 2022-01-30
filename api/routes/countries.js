module.exports = app => {
  const countries = require("../controllers/country.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", countries.create);

  // Retrieve all Tutorials
  router.get("/", countries.findAll);

  // Retrieve all published Tutorials
  router.get("/published", countries.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", countries.findOne);

  // Update a Tutorial with id
  router.put("/:id", countries.update);

  // Delete a Tutorial with id
  router.delete("/:id", countries.delete);

  // Delete all Tutorials
  router.delete("/", countries.deleteAll);

  app.use('/api/countries', router);
};
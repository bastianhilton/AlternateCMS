module.exports = app => {
  const cities = require("../controllers/city.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", cities.create);

  // Retrieve all Tutorials
  router.get("/", cities.findAll);

  // Retrieve all published Tutorials
  router.get("/published", cities.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", cities.findOne);

  // Update a Tutorial with id
  router.put("/:id", cities.update);

  // Delete a Tutorial with id
  router.delete("/:id", cities.delete);

  // Delete all Tutorials
  router.delete("/", cities.deleteAll);

  app.use('/api/cities', router);
};
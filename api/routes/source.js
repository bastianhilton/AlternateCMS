module.exports = app => {
  const sources = require("../controllers/source.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", sources.create);

  // Retrieve all Tutorials
  router.get("/", sources.findAll);

  // Retrieve all published Tutorials
  router.get("/published", sources.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", sources.findOne);

  // Update a Tutorial with id
  router.put("/:id", sources.update);

  // Delete a Tutorial with id
  router.delete("/:id", sources.delete);

  // Delete all Tutorials
  router.delete("/", sources.deleteAll);

  app.use('/api/sources', router);
};
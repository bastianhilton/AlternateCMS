module.exports = app => {
  const statistics = require("../controllers/statistic.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", statistics.create);

  // Retrieve all Tutorials
  router.get("/", statistics.findAll);

  // Retrieve all published Tutorials
  router.get("/published", statistics.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", statistics.findOne);

  // Update a Tutorial with id
  router.put("/:id", statistics.update);

  // Delete a Tutorial with id
  router.delete("/:id", statistics.delete);

  // Delete all Tutorials
  router.delete("/", statistics.deleteAll);

  app.use('/api/statistics', router);
};
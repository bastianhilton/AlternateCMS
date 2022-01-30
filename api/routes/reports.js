module.exports = app => {
  const reports = require("../controllers/report.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", reports.create);

  // Retrieve all Tutorials
  router.get("/", reports.findAll);

  // Retrieve all published Tutorials
  router.get("/published", reports.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", reports.findOne);

  // Update a Tutorial with id
  router.put("/:id", reports.update);

  // Delete a Tutorial with id
  router.delete("/:id", reports.delete);

  // Delete all Tutorials
  router.delete("/", reports.deleteAll);

  app.use('/api/reports', router);
};
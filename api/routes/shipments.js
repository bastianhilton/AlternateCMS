module.exports = app => {
  const shipments = require("../controllers/shipment.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", shipments.create);

  // Retrieve all Tutorials
  router.get("/", shipments.findAll);

  // Retrieve all published Tutorials
  router.get("/published", shipments.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", shipments.findOne);

  // Update a Tutorial with id
  router.put("/:id", shipments.update);

  // Delete a Tutorial with id
  router.delete("/:id", shipments.delete);

  // Delete all Tutorials
  router.delete("/", shipments.deleteAll);

  app.use('/api/shipments', router);
};
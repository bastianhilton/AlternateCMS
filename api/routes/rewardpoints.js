module.exports = app => {
  const rewardpoints = require("../controllers/rewardpoint.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", rewardpoints.create);

  // Retrieve all Tutorials
  router.get("/", rewardpoints.findAll);

  // Retrieve all published Tutorials
  router.get("/published", rewardpoints.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", rewardpoints.findOne);

  // Update a Tutorial with id
  router.put("/:id", rewardpoints.update);

  // Delete a Tutorial with id
  router.delete("/:id", rewardpoints.delete);

  // Delete all Tutorials
  router.delete("/", rewardpoints.deleteAll);

  app.use('/api/rewardpoints', router);
};
module.exports = app => {
  const states = require("../controllers/state.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", states.create);

  // Retrieve all Tutorials
  router.get("/", states.findAll);

  // Retrieve all published Tutorials
  router.get("/published", states.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", states.findOne);

  // Update a Tutorial with id
  router.put("/:id", states.update);

  // Delete a Tutorial with id
  router.delete("/:id", states.delete);

  // Delete all Tutorials
  router.delete("/", states.deleteAll);

  app.use('/api/states', router);
};
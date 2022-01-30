module.exports = app => {
  const polls = require("../controllers/poll.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", polls.create);

  // Retrieve all Tutorials
  router.get("/", polls.findAll);

  // Retrieve all published Tutorials
  router.get("/published", polls.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", polls.findOne);

  // Update a Tutorial with id
  router.put("/:id", polls.update);

  // Delete a Tutorial with id
  router.delete("/:id", polls.delete);

  // Delete all Tutorials
  router.delete("/", polls.deleteAll);

  app.use('/api/polls', router);
};
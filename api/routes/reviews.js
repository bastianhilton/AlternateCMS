module.exports = app => {
  const reviews = require("../controllers/review.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", reviews.create);

  // Retrieve all Tutorials
  router.get("/", reviews.findAll);

  // Retrieve all published Tutorials
  router.get("/published", reviews.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", reviews.findOne);

  // Update a Tutorial with id
  router.put("/:id", reviews.update);

  // Delete a Tutorial with id
  router.delete("/:id", reviews.delete);

  // Delete all Tutorials
  router.delete("/", reviews.deleteAll);

  app.use('/api/reviews', router);
};
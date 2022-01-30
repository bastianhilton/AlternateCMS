module.exports = app => {
  const newslettersubscribers = require("../controllers/newslettersubscriber.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", newslettersubscribers.create);

  // Retrieve all Tutorials
  router.get("/", newslettersubscribers.findAll);

  // Retrieve all published Tutorials
  router.get("/published", newslettersubscribers.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", newslettersubscribers.findOne);

  // Update a Tutorial with id
  router.put("/:id", newslettersubscribers.update);

  // Delete a Tutorial with id
  router.delete("/:id", newslettersubscribers.delete);

  // Delete all Tutorials
  router.delete("/", newslettersubscribers.deleteAll);

  app.use('/api/newslettersubscribers', router);
};
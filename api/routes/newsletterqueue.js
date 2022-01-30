module.exports = app => {
  const newsletterqueues = require("../controllers/newsletterqueue.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", newsletterqueues.create);

  // Retrieve all Tutorials
  router.get("/", newsletterqueues.findAll);

  // Retrieve all published Tutorials
  router.get("/published", newsletterqueues.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", newsletterqueues.findOne);

  // Update a Tutorial with id
  router.put("/:id", newsletterqueues.update);

  // Delete a Tutorial with id
  router.delete("/:id", newsletterqueues.delete);

  // Delete all Tutorials
  router.delete("/", newsletterqueues.deleteAll);

  app.use('/api/newsletterqueues', router);
};
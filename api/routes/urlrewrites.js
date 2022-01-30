module.exports = app => {
  const urlrewrites = require("../controllers/urlrewrite.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", urlrewrites.create);

  // Retrieve all Tutorials
  router.get("/", urlrewrites.findAll);

  // Retrieve all published Tutorials
  router.get("/published", urlrewrites.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", urlrewrites.findOne);

  // Update a Tutorial with id
  router.put("/:id", urlrewrites.update);

  // Delete a Tutorial with id
  router.delete("/:id", urlrewrites.delete);

  // Delete all Tutorials
  router.delete("/", urlrewrites.deleteAll);

  app.use('/api/urlrewrites', router);
};
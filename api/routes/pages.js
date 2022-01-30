module.exports = app => {
  const pages = require("../controllers/page.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", pages.create);

  // Retrieve all Tutorials
  router.get("/", pages.findAll);

  // Retrieve all published Tutorials
  router.get("/published", pages.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", pages.findOne);

  // Update a Tutorial with id
  router.put("/:id", pages.update);

  // Delete a Tutorial with id
  router.delete("/:id", pages.delete);

  // Delete all Tutorials
  router.delete("/", pages.deleteAll);

  app.use('/api/pages', router);
};
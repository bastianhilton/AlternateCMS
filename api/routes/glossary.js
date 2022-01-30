module.exports = app => {
  const glossaries = require("../controllers/glossary.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", glossaries.create);

  // Retrieve all Tutorials
  router.get("/", glossaries.findAll);

  // Retrieve all published Tutorials
  router.get("/published", glossaries.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", glossaries.findOne);

  // Update a Tutorial with id
  router.put("/:id", glossaries.update);

  // Delete a Tutorial with id
  router.delete("/:id", glossaries.delete);

  // Delete all Tutorials
  router.delete("/", glossaries.deleteAll);

  app.use('/api/glossaries', router);
};
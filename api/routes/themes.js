module.exports = app => {
  const themes = require("../controllers/theme.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", themes.create);

  // Retrieve all Tutorials
  router.get("/", themes.findAll);

  // Retrieve all published Tutorials
  router.get("/published", themes.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", themes.findOne);

  // Update a Tutorial with id
  router.put("/:id", themes.update);

  // Delete a Tutorial with id
  router.delete("/:id", themes.delete);

  // Delete all Tutorials
  router.delete("/", themes.deleteAll);

  app.use('/api/themes', router);
};
module.exports = app => {
  const articles = require("../controllers/article.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", articles.create);

  // Retrieve all Tutorials
  router.get("/", articles.findAll);

  // Retrieve all published Tutorials
  router.get("/published", articles.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", articles.findOne);

  // Update a Tutorial with id
  router.put("/:id", articles.update);

  // Delete a Tutorial with id
  router.delete("/:id", articles.delete);

  // Delete all Tutorials
  router.delete("/", articles.deleteAll);

  app.use('/api/articles', router);
};
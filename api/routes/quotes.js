module.exports = app => {
  const quotes = require("../controllers/quote.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", quotes.create);

  // Retrieve all Tutorials
  router.get("/", quotes.findAll);

  // Retrieve all published Tutorials
  router.get("/published", quotes.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", quotes.findOne);

  // Update a Tutorial with id
  router.put("/:id", quotes.update);

  // Delete a Tutorial with id
  router.delete("/:id", quotes.delete);

  // Delete all Tutorials
  router.delete("/", quotes.deleteAll);

  app.use('/api/quotes', router);
};
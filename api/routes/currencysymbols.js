module.exports = app => {
  const currencysymbols = require("../controllers/currencysymbol.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", currencysymbols.create);

  // Retrieve all Tutorials
  router.get("/", currencysymbols.findAll);

  // Retrieve all published Tutorials
  router.get("/published", currencysymbols.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", currencysymbols.findOne);

  // Update a Tutorial with id
  router.put("/:id", currencysymbols.update);

  // Delete a Tutorial with id
  router.delete("/:id", currencysymbols.delete);

  // Delete all Tutorials
  router.delete("/", currencysymbols.deleteAll);

  app.use('/api/currencysymbols', router);
};
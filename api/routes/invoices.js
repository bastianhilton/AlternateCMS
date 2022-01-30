module.exports = app => {
  const invoices = require("../controllers/invoice.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", invoices.create);

  // Retrieve all Tutorials
  router.get("/", invoices.findAll);

  // Retrieve all published Tutorials
  router.get("/published", invoices.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", invoices.findOne);

  // Update a Tutorial with id
  router.put("/:id", invoices.update);

  // Delete a Tutorial with id
  router.delete("/:id", invoices.delete);

  // Delete all Tutorials
  router.delete("/", invoices.deleteAll);

  app.use('/api/invoices', router);
};
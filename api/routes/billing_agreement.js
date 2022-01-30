module.exports = app => {
  const billingagreements = require("../controllers/billingagreement.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", billingagreements.create);

  // Retrieve all Tutorials
  router.get("/", billingagreements.findAll);

  // Retrieve all published Tutorials
  router.get("/published", billingagreements.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", billingagreements.findOne);

  // Update a Tutorial with id
  router.put("/:id", billingagreements.update);

  // Delete a Tutorial with id
  router.delete("/:id", billingagreements.delete);

  // Delete all Tutorials
  router.delete("/", billingagreements.deleteAll);

  app.use('/api/billingagreements', router);
};
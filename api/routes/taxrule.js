module.exports = app => {
  const taxrules = require("../controllers/taxrule.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", taxrules.create);

  // Retrieve all Tutorials
  router.get("/", taxrules.findAll);

  // Retrieve all published Tutorials
  router.get("/published", taxrules.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", taxrules.findOne);

  // Update a Tutorial with id
  router.put("/:id", taxrules.update);

  // Delete a Tutorial with id
  router.delete("/:id", taxrules.delete);

  // Delete all Tutorials
  router.delete("/", taxrules.deleteAll);

  app.use('/api/taxrules', router);
};
module.exports = app => {
  const specialdiscounts = require("../controllers/specialdiscount.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", specialdiscounts.create);

  // Retrieve all Tutorials
  router.get("/", specialdiscounts.findAll);

  // Retrieve all published Tutorials
  router.get("/published", specialdiscounts.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", specialdiscounts.findOne);

  // Update a Tutorial with id
  router.put("/:id", specialdiscounts.update);

  // Delete a Tutorial with id
  router.delete("/:id", specialdiscounts.delete);

  // Delete all Tutorials
  router.delete("/", specialdiscounts.deleteAll);

  app.use('/api/specialdiscounts', router);
};
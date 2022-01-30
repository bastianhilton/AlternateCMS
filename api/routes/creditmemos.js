module.exports = app => {
  const creditmemos = require("../controllers/creditmemo.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", creditmemos.create);

  // Retrieve all Tutorials
  router.get("/", creditmemos.findAll);

  // Retrieve all published Tutorials
  router.get("/published", creditmemos.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", creditmemos.findOne);

  // Update a Tutorial with id
  router.put("/:id", creditmemos.update);

  // Delete a Tutorial with id
  router.delete("/:id", creditmemos.delete);

  // Delete all Tutorials
  router.delete("/", creditmemos.deleteAll);

  app.use('/api/creditmemos', router);
};
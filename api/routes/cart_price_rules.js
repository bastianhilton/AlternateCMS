module.exports = app => {
  const cartpricerules = require("../controllers/cartpricerule.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", cartpricerules.create);

  // Retrieve all Tutorials
  router.get("/", cartpricerules.findAll);

  // Retrieve all published Tutorials
  router.get("/published", cartpricerules.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", cartpricerules.findOne);

  // Update a Tutorial with id
  router.put("/:id", cartpricerules.update);

  // Delete a Tutorial with id
  router.delete("/:id", cartpricerules.delete);

  // Delete all Tutorials
  router.delete("/", cartpricerules.deleteAll);

  app.use('/api/cartpricerules', router);
};
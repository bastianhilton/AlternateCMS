module.exports = app => {
  const orders = require("../controllers/order.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", orders.create);

  // Retrieve all Tutorials
  router.get("/", orders.findAll);

  // Retrieve all published Tutorials
  router.get("/published", orders.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", orders.findOne);

  // Update a Tutorial with id
  router.put("/:id", orders.update);

  // Delete a Tutorial with id
  router.delete("/:id", orders.delete);

  // Delete all Tutorials
  router.delete("/", orders.deleteAll);

  app.use('/api/orders', router);
};
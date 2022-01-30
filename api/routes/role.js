module.exports = app => {
  const roles = require("../controllers/role.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", roles.create);

  // Retrieve all Tutorials
  router.get("/", roles.findAll);

  // Retrieve all published Tutorials
  router.get("/published", roles.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", roles.findOne);

  // Update a Tutorial with id
  router.put("/:id", roles.update);

  // Delete a Tutorial with id
  router.delete("/:id", roles.delete);

  // Delete all Tutorials
  router.delete("/", roles.deleteAll);

  app.use('/api/roles', router);
};
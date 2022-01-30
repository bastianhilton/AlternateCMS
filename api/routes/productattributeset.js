module.exports = app => {
  const productattributesets = require("../controllers/productattributeset.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", productattributesets.create);

  // Retrieve all Tutorials
  router.get("/", productattributesets.findAll);

  // Retrieve all published Tutorials
  router.get("/published", productattributesets.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", productattributesets.findOne);

  // Update a Tutorial with id
  router.put("/:id", productattributesets.update);

  // Delete a Tutorial with id
  router.delete("/:id", productattributesets.delete);

  // Delete all Tutorials
  router.delete("/", productattributesets.deleteAll);

  app.use('/api/productattributesets', router);
};
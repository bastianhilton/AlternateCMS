module.exports = app => {
  const giftcertificates = require("../controllers/giftcertificate.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", giftcertificates.create);

  // Retrieve all Tutorials
  router.get("/", giftcertificates.findAll);

  // Retrieve all published Tutorials
  router.get("/published", giftcertificates.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", giftcertificates.findOne);

  // Update a Tutorial with id
  router.put("/:id", giftcertificates.update);

  // Delete a Tutorial with id
  router.delete("/:id", giftcertificates.delete);

  // Delete all Tutorials
  router.delete("/", giftcertificates.deleteAll);

  app.use('/api/giftcertificates', router);
};
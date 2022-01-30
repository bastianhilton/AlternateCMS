module.exports = app => {
  const coupons = require("../controllers/coupon.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", coupons.create);

  // Retrieve all Tutorials
  router.get("/", coupons.findAll);

  // Retrieve all published Tutorials
  router.get("/published", coupons.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", coupons.findOne);

  // Update a Tutorial with id
  router.put("/:id", coupons.update);

  // Delete a Tutorial with id
  router.delete("/:id", coupons.delete);

  // Delete all Tutorials
  router.delete("/", coupons.deleteAll);

  app.use('/api/coupons', router);
};
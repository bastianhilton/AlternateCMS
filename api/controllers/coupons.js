/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Coupon = db.coupons;
const Op = db.Sequelize.Op;

// Insert new coupon
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a coupon
  const coupon = {
    name: req.body.name,
    excerpt: req.body.excerpt,
    discount: req.body.discount,
    image: req.body.image,
    published: req.body.published,
    expiration: req.body.expiration,
    categories: req.body.categories,
    articles: req.body.articles,
    products: req.body.products,
    customers: req.body.customers,
    users: req.body.users
  };

  // Save coupon in the database
  Coupon.create(coupon)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Coupon."
      });
    });
};

// Retrieve all coupons
exports.findAll = (req, res) => {

  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Coupon.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    });
  
};

// search a single coupon with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Coupon.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Coupon with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Coupon with id=" + id
      });
    });
};

// Update a coupon details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Coupon.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Coupon."
        });
      } else {
        res.send({
          message: `Can't update coupon with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Coupon with id=" + id
      });
    });
};

// remove a coupon with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Coupon.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted coupon!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Coupon with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Coupon with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Coupon.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving coupons."
      });
    });
};
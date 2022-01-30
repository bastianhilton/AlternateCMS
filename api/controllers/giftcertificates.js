/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Giftcertificates = db.giftcertificatess;
const Op = db.Sequelize.Op;

// Insert new giftcertificates
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a giftcertificates
  const giftcertificates = {
    name: req.body.name,
    excerpt: req.body.excerpt,
    discount: req.body.discount,
    image: req.body.image,
    published: req.body.published,
    special_offers: req.body.special_offers,
    rewards: req.body.rewards,
    coupons: req.body.coupons,
    expiration: req.body.expiration,
    categories: req.body.categories,
    articles: req.body.articles,
    products: req.body.products,
    customers: req.body.customers,
    users: req.body.users
  };

  // Save giftcertificates in the database
  Giftcertificates.create(giftcertificates)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Giftcertificates."
      });
    });
};

// Retrieve all giftcertificatess
exports.findAll = (req, res) => {

  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Giftcertificates.findAll({ where: condition })
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

// search a single giftcertificates with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Giftcertificates.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Giftcertificates with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Giftcertificates with id=" + id
      });
    });
};

// Update a giftcertificates details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Giftcertificates.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Giftcertificates."
        });
      } else {
        res.send({
          message: `Can't update giftcertificates with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Giftcertificates with id=" + id
      });
    });
};

// remove a giftcertificates with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Giftcertificates.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted giftcertificates!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Giftcertificates with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Giftcertificates with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Giftcertificates.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving gift certificates."
      });
    });
};
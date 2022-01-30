/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Customers = db.giftcertificatess;
const Op = db.Sequelize.Op;

// Insert new giftcertificates
exports.create = (req, res) => {
    if (!req.body.email) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a giftcertificates
  const giftcertificates = {
    thumbnail: req.body.thumbnail,
    name_prefix: req.body.name_prefix,
    first_name: req.body.first_name,
    middle_name: req.body.middle_name,
    last_name: req.body.last_name,
    email: req.body.email,
    customer_group: req.body.customer_group,
    phone: req.body.phone,
    zipcode: req.body.zipcode,
    status: req.body.status,
    websites: req.body.websites,
    products: req.body.products,
    country: req.body.country,
    state: req.body.state,
    customer_since: req.body.customer_since,
    confirmed_email: req.body.confirmed_email,
    date_of_birth: req.body.date_of_birth,
    tax_vat_number: req.body.tax_vat_number,
    gender: req.body.gender,
    description: req.body.description,
    short_description: req.body.short_description,
    image: req.body.image,
    meta_title: req.body.meta_title,
    meta_keywords: req.body.meta_keywords,
    meta_description: req.body.meta_description,
    meta_url: req.body.meta_url
  };

  // Save giftcertificates in the database
  Customers.create(giftcertificates)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Customers."
      });
    });
};

// Retrieve all giftcertificatess
exports.findAll = (req, res) => {

  const email = req.query.email;
  const condition = email ? { email: { [Op.like]: `%${email}%` } } : null;

  Customers.findAll({ where: condition })
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

  Customers.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Customers with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Customers with id=" + id
      });
    });
};

// Update a giftcertificates details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Customers.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Customers."
        });
      } else {
        res.send({
          message: `Can't update giftcertificates with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Customers with id=" + id
      });
    });
};

// remove a giftcertificates with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Customers.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted giftcertificates!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Customers with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Customers with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Customers.findAll({ where: { published: true } })
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
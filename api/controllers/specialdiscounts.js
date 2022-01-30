/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Specialdiscount = db.specialdiscounts;
const Op = db.Sequelize.Op;

// Insert new specialdiscount
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a specialdiscount
  const specialdiscount = {
    name: req.body.name,
    excerpt: req.body.excerpt,
    discount:req.body.discount,
    image:req.body.image,
    published:req.body.published,
    rewards:req.body.rewards,
    coupons:req.body.coupons,
    expiration:req.body.expiration,
    categories:req.body.categories,
    articles:req.body.articles,
    products:req.body.products,
    customers:req.body.customers,
    users:req.body.users
  };

  // Save specialdiscount in the database
  Specialdiscount.create(specialdiscount)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Specialdiscount."
      });
    });
};

// Retrieve all specialdiscounts
exports.findAll = (req, res) => {

  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Specialdiscount.findAll({ where: condition })
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

// search a single specialdiscount with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Specialdiscount.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Specialdiscount with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Specialdiscount with id=" + id
      });
    });
};

// Update a specialdiscount details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Specialdiscount.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Specialdiscount."
        });
      } else {
        res.send({
          message: `Can't update specialdiscount with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Specialdiscount with id=" + id
      });
    });
};

// remove a specialdiscount with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Specialdiscount.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted specialdiscount!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Specialdiscount with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Specialdiscount with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Specialdiscount.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving special discount."
      });
    });
};
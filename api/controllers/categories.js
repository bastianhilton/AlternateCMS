/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Category = db.categories;
const Op = db.Sequelize.Op;

// Insert new category
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a category
  const category = {
    name: req.body.name,
    thumbnail: req.body.thumbnail,
    visibility: req.body.visibility,
    status: req.body.status,
    websites: req.body.websites,
    product: req.body.product,
    country: req.body.country,
    description: req.body.description,
    short_description: req.body.short_description,
    image: req.body.image,
    meta_title: req.body.meta_title,
    meta_keywords: req.body.meta_keywords,
    meta_description: req.body.meta_description,
    meta_url: req.body.meta_url
  };

  // Save category in the database
  Category.create(category)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Category."
      });
    });
};

// Retrieve all categories
exports.findAll = (req, res) => {

  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Category.findAll({ where: condition })
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

// search a single category with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Category.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Category with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Category with id=" + id
      });
    });
};

// Update a category details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Category.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Category."
        });
      } else {
        res.send({
          message: `Can't update category with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Category with id=" + id
      });
    });
};

// remove a category with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Category.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted category!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Category with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Category with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Category.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
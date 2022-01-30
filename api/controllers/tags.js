/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Tag = db.tags;
const Op = db.Sequelize.Op;

// Insert new tag
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a tag
  const tag = {
    name: req.body.name,
    excerpt: req.body.excerpt,
    categories:req.body.categories,
    articles:req.body.articles,
    products:req.body.products,
    customers:req.body.customers,
    users:req.body.users,
  };

  // Save tag in the database
  Tag.create(tag)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Tag."
      });
    });
};

// Retrieve all tags
exports.findAll = (req, res) => {

  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Tag.findAll({ where: condition })
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

// search a single tag with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tag.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tag with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tag with id=" + id
      });
    });
};

// Update a tag details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tag.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Tag."
        });
      } else {
        res.send({
          message: `Can't update tag with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Tag with id=" + id
      });
    });
};

// remove a tag with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Tag.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted tag!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Tag with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Tag with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Tag.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tags."
      });
    });
};
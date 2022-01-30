/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Article = db.articles;
const Op = db.Sequelize.Op;

// Insert new article
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a article
  const article = {
    name: req.body.name,
    excerpt: req.body.excerpt,
    description: req.body.description,
    image: req.body.image,
    categories: req.body.categories,
    customers: req.body.customers,
    users: req.body.users,
    published: req.body.published
  };

  // Save article in the database
  Article.create(article)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Article."
      });
    });
};

// Retrieve all articles
exports.findAll = (req, res) => {

  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Article.findAll({ where: condition })
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

// search a single article with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Article.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Article with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Article with id=" + id
      });
    });
};

// Update a article details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Article.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Article."
        });
      } else {
        res.send({
          message: `Can't update article with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Article with id=" + id
      });
    });
};

// remove a article with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Article.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted article!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Article with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Article with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Article.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving articles."
      });
    });
};
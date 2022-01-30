/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Poll = db.polls;
const Op = db.Sequelize.Op;

// Insert new poll
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a poll
  const poll = {
    name: req.body.name,
    excerpt: req.body.excerpt,
    description: req.body.description,
    image: req.body.image,
    published: req.body.published,
    question: req.body.question,
    response: req.body.response,
    categories: req.body.categories,
    articles: req.body.articles,
    products: req.body.products,
    customers: req.body.customers,
    users: req.body.users
  };

  // Save poll in the database
  Poll.create(poll)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Poll."
      });
    });
};

// Retrieve all polls
exports.findAll = (req, res) => {

  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Poll.findAll({ where: condition })
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

// search a single poll with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Poll.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Poll with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Poll with id=" + id
      });
    });
};

// Update a poll details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Poll.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Poll."
        });
      } else {
        res.send({
          message: `Can't update poll with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Poll with id=" + id
      });
    });
};

// remove a poll with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Poll.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted poll!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Poll with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Poll with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Poll.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving polls."
      });
    });
};
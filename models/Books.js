const Sequelize = require('sequelize');
const db = require('../config/database');

const Books = db.define('book', {
    title: {
      type: Sequelize.STRING
    },
    author: {
      type: Sequelize.STRING
    },
    genre: {
      type: Sequelize.STRING
    },
    year: {
      type: Sequelize.STRING
    }
  });

module.exports = Books;
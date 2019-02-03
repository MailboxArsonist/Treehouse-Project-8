const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Books = require('../models/books');

//router
router.get('/', (req, res) => {
    Books.findAll()
      .then(books => {
          console.log(books);
          res.sendStatus(200);
      })
      .catch(err => console.log(err))
});

module.exports = router;
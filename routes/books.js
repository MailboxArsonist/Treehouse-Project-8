const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Books = require('../models/books');

//route for /books
router.get('/', (req, res) => {
    Books.findAll()
      .then(books => {
          res.render('index', {books: books});
      })
      .catch(err => console.log(err))
});

//route for new book
router.get('/new', (req, res) => res.render('new-book'));

//post route to add book to db
router.post('/new', (req, res) => {
    let {title, author, genre, year} = req.body;
    Books.create({
        title,
        author,
        genre,
        year
    })
        .then(books => res.redirect('/'))
        .catch(err => console.log(err))
});
module.exports = router;
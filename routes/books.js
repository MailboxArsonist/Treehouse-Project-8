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

//route to update book
router.get('/:id', (req, res) => {
    Books.findById(req.params.id)
      .then(book => {
          res.render('update-book', {book});
      })
      .catch(err => console.log(err))
});

//post route to update database
router.post('/:id', (req, res) => {
    Books.findById(req.params.id)
      .then(Book => {
          if(Book){
              return Book.update(req.body);
          } else{
              res.send(404);
          }
      })
      .then(() => res.redirect('/'))
      .catch(err => console.log(err))
});

//route to delete
router.post('/:id/delete', (req, res) => {
    Books.findById(req.params.id)
      .then(Book => {
          if(Book){
              return Book.destroy();
          } else{
              res.send(404);
          }
      })
      .then(() => res.redirect('/'))
      .catch(err => console.log(err))
});

module.exports = router;
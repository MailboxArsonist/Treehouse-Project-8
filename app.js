const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
//Database
const db = require('./config/database');
app.set('view engine', 'pug');
//body parser
app.use(bodyParser.urlencoded({extended: false}));
//add static CSS files
app.use('/static', express.static('public'));


//test db
db.authenticate()
    .then(() => console.log('connected'))
    .catch(err => console.log('Error: ' + err))

app.get('/', (req, res) => res.redirect('/books'));

//books route
app.use('/books', require('./routes/books'));

db.sync()
.then(() => {
    app.listen(process.env.PORT || 3000, () => console.log('Application running on localhost:3000'));
});
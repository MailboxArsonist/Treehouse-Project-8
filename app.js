const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
//Database
const db = require('./config/database');


//test db
db.authenticate()
    .then(() => console.log('connected'))
    .catch(err => console.log('Error: ' + err))

app.get('/', (req, res) => res.send('index'));

//books route
app.use('/books', require('./routes/books'));


app.listen(3000, console.log('server running on port 3000'));
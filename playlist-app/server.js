// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// Get our API routes

const app = express();
//var db = require('./server/db/db.js');
//var user = require('./server/db/user')

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

mongoose.connect('mongodb://localhost:27017/users');
mongoose.model('users', {name: String});

// Catch all other routes and return the index file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  console.log(req.body);
})

app.get('/users', function(req, res) {
  mongoose.model('users').find(function(err, users) {
    res.send("This is the users screen");
  });
});

app.get('/users/test', function(req, res) {
    new User({ name: 'Shahar'})
    res.send(User);
    // .save(function (err) {
    //     if (err) {
    //       res.status(504);
    //       res.end(err);
    //     } else {
    //       console.log('user saved');
    //       res.end();
    //     }
    //   });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



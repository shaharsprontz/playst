// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var db = require('./server/lib/db.js')
var user = require('./server/models/user.js');

// Get our API routes

const app = express();
//var db = require('./server/db/db.js');
//var user = require('./server/db/user')

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));



// Catch all other routes and return the index file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  console.log(req.body);
})

app.post('/users', user.createUsers);
app.get('/users', user.seeResults);
app.delete('/users/:id', user.delete);

// app.get('/users', function(req, res) {
// //mongoose.model('users').find(function(err, users) {
//     res.send("This is the users screen");
//  // });
// });


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



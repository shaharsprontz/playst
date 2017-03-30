// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const db = require('./server/lib/db.js');
const user = require('./server/models/user.js');


// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));



// Catch all other routes and return the index file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  //console.log(req.body);
})

app.post('/users', user.createUsers);
app.get('/users', user.seeResults);
app.delete('/users:id', user.delete);

// app.get('/users', function(req, res) {
//     res.send("This is the users screen");
  
// });

// app.post('/users/test', function(req, res) {
//     new User({ name: 'Shahar'})
//     res.send(User);
// });


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});



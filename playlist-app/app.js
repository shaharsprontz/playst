// src/app.js
/**
 * Import dependencies
 */
var express = require('express');
var logger = require('morgan'); // Logs each server request to the console
var methodOverride = require('method-override'); // Allows for PUT and DELETE methods to be used in browsers where they are not supported
var bodyParser = require('body-parser'); // Takes information from POST requests and puts it into an object
var mongoose = require('mongoose'); // Wrapper for interacting with MongoDB
var path = require('path'); // File path utilities to make sure we're using the right type of slash (/ vs \)
var fs = require('fs');

/**
 * Configure controllers
 */
//var mainController = require('./server/routes/main');

/**
 * Configure database
 */
mongoose.connect('mongodb://localhost:27017/todoDB'); // Connects to your MongoDB.  Make sure mongod is running!
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});

/**
 * Configure app
 */
var app = express(); // Creates an Express app
app.set('port', process.env.PORT || 3000); // Set port to 3000 or the provided PORT variable
app.use(express.static('dist')); // Set the static files directory - /public will be / on the frontend
app.use(logger('dev')); // Log requests to the console
app.use(bodyParser.json()); // Parse JSON data and put it into an object which we can access
app.use(methodOverride()); // Allow PUT/DELETE

/**
 * Configure routes
 */
// app.get('/', mainController.getIndex);
// app.get('/templates/:template', mainController.getTemplate);
// app.get('/todos', mainController.getAllTodos);
// app.post('/todos', mainController.postNewTodo);
// app.delete('/todos/:id', mainController.deleteTodo);

app.post('/users', function(req, res){
  console.log(req.body);      // your JSON
  res.send(req.body);    // echo the result back
});

app.get('*', (req, res) => {
   var content = fs.readFileSync(__dirname + '/dist/index.html', 'utf8');
   res.send(content);
   //console.log(req.body);
 });

/**
 * Start app
 */
app.listen(app.get('port'), function() {
  console.log(`App listening on port ${app.get('port')}!`);
});
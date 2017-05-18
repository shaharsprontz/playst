// Dependencies
var express = require('express');
var db = require('./server/lib/db');
var user = require('./server/models/user');
var bodyParser = require('body-parser');
var fs = require('fs');



// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('dist'));

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
//   //console.log(req.body);
// })

// app.post('/users', user.createUsers);
// app.get('/users', user.seeResults);
// app.delete('/users/:id', user.delete);

// app.post('/users', (req, res) => {
//   console.log(req.body);
// });

app.get('*', (req, res) => {
   var content = fs.readFileSync(__dirname + '/dist/index.html', 'utf8');
   res.send(content);
   //console.log(req.body);
 });


// Start server
app.listen(3000, function() {
  console.log('API is running on port 3000');
});

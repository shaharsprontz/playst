// src/controllers/main.js
var User = require('../lib/db'); // Import the Todo model so we can query the DB

let mainController = {
  getIndex: (req, res) => {
    res.render('index'); // Compiles the file named "index" in the views directory (`/views`) using the view engine (Jade).
    // We'll create this Jade file later
  },
  // Allows us to access our Angular templates (more on that later)
  getTemplate: (req, res) => {
    res.render('templates/' + req.params.template);
  },
  // This gets all Todos in the collection and sends it back in JSON format
  getAllUsers: (req, res) => {
    User.find({}, (err, users) => {
      if (err) {
        // Send the error to the client if there is one
        return res.send(err);
      }
      // Send todos in JSON format
      res.json(users);
    });
  },
  postNewUser: (req, res) => {
    // This creates a new todo using POSTed data (in req.body)
    User.create({
      text: req.body.text,
      done: false
    }, (err, user) => {
      if (err) {
        return res.send(err);
      }
      User.find({}, (err, users) => {
        if (err) {
          return res.send(err);
        }
        // Send list of all todos after new one has been created and saved
        res.json(users);
      });
    });
  },
  deleteUser: (req, res) => {
    User.remove({
      _id: req.params.id
    }, (err, user) => {
      if (err) {
        return res.send(err);
      }
      User.find({}, (err, users) => {
        if (err) {
          return res.send(err);
        }
        res.json(users);
      });
    });
  }
}

module.exports.mainController;
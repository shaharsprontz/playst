require('mongoose').model('User');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
  createUsers: function (req, res) {
    const person = req.body;
    new User({ name: person.name, age: person.age, email: person.email })
      .save(function (err) {
        if (err) {
          res.status(504);
          res.end(err);
        } else {
          console.log('user saved');
          res.end();
        }
      });
  },
  seeResults: function (req, res, next) {
    User.find({}, function (err, docs) {
      if (err) {
        res.status(504);
        res.end(err);
      } else {
        for (var i = 0; i < docs.length; i++) {
         console.log('user:', docs[i].name);
        }
        res.end(JSON.stringify(docs));
      }
    });
  },
  delete: function( req, res, next) {
    // console.log(req.params.id);
    User.remove({ _id: req.params.id }, function(err) {
      console.log("User " + user.name + "removed");
    })
  }
}
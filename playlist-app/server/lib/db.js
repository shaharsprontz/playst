var mongoose = require('mongoose');  
mongoose.connect('mongodb://localhost/'); 
mongoose.Promise = global.Promise;


var userSchema = new mongoose.Schema({
	firstName: { type: String },
	LastName: { type: String },
	userName: { type: Number },
	password: { type: String },
    email: { type: String, unique: true }
});

var User = mongoose.model('User', userSchema);  
console.log('we are connected to mongodb');

module.exports = User;



// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/');

// mongoose.Promise = global.Promise;

// console.log('we are connected to mongodb');
// module.exports = mongoose;
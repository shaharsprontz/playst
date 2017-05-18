var mongoose = require('mongoose');  
mongoose.Promise = global.Promise;


var User = new mongoose.Schema({
	firstName: { type: String },
	LastName: { type: String },
	userName: { type: Number },
	password: { type: String },
    email: { type: String, unique: true }
});

mongoose.model('User', User);  
mongoose.connect('mongodb://localhost/test'); 
console.log('we are connected to mongodb');

module.exports = User;

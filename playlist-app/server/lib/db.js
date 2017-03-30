var mongoose = require('mongoose');  
var User = new mongoose.Schema({
	name: { type: String },
	age: { type: Number },
    email: { type: String }
});

mongoose.model('User', User);  
mongoose.connect('mongodb://localhost/'); 

console.log('we are connected to mongodb');
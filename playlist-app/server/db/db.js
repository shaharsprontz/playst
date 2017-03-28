var mongoose = require('mongoose');  
var User = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
});

var playster = mongoose.model("user", User); // the same studentSchema we created before :)

mongoose.model('User', User);  
mongoose.connect('mongodb://localhost/'); 

console.log('we are connected');
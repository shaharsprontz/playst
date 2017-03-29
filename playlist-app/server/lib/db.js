var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test_db', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('everything is ok')
    }
});

module.exports = mongoose;
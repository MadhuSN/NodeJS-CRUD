const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://test:test@mycluster1-kqs7r.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');
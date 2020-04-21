//require mongoose
const mongoose = require('mongoose');

//connect to the required database
mongoose.connect('mongodb://localhost/notes_list-db', { useNewUrlParser: true, useUnifiedTopology: true });

//aquire the connection and test
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'problem in connecting the database'));

//up and running and print 
db.once('open', function() {
    console.log('Successfully connected to the dataBase!');
})
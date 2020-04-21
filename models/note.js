const mongoose = require('mongoose');

//creating schema
var Schema = mongoose.Schema;

const notesSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

//creating a filed for contact 
const Notes = mongoose.model('Notes', notesSchema);

module.exports = Notes;
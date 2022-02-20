var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var techSchema = new Schema({
    firstname: {
        type: String,
        required: [true, 'Please enter your firstname']
    },
    lastname: {
        type: String,
        required: [true, 'Please enter your lastname'],
    } 
});


module.exports = mongoose.model('Technicians', techSchema);
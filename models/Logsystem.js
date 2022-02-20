var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var logSchema = new Schema({
    message: {
        type: String,
        required: [true, 'Please enter your message']
    },
    attention: {
        type: Boolean,
        required: false,
    },
    tech: {
        type: String,
    required: [true, 'Please select the Technician']
    },
    created_at: {
        type: Date,
        default: Date.now
    }  
});


module.exports = mongoose.model('Logsystem', logSchema);
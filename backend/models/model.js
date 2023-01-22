const mongoose = require('mongoose');

const Form = mongoose.Schema({
    name: { type: String, require: true },
    mail: { type: String, require: true }
});

module.exports = mongoose.model('Form', Form);
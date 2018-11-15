const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CustomerSchema = new Schema({
    name: {type: String, required: true, max: 100},
    id: {type: Number, required: true},
    product:{type: String, requird: true}
});

// Export the model
module.exports = mongoose.model('Customer', CustomerSchema);
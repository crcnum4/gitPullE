const mongoose = require('mongoose')
const Schema = mongoose.Schema();

const placeSchema = new Schema({
    state: {
        type: String,
        require: true
    },
    city: {
        type: String,
        required: true
    },
    street: String
});

module.exports = mongoose.model("places", placeSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const locationSchema = new Schema({
state: {
    type: String,
    require: true
},
city: {
    type: String,
    require: true
},
street: {
    type: String,
    require: true
}
});

module.exports = mongoose.model('Address', locationSchema)
const mongoose = require('mongoose');

const placeSchema = new.Schema({
state: {
    type: String
},

city: {
    type: String,
},

street: {
    type: String,
    require: true
}



})
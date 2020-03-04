const mongoose = require('mongoose');

const scheme = new mongoose.Schema({
    State: {
        type:String,
        required:true,
        minlength:4,
        maxlength:30
    },
    City: {
        type:String,
        required:true,
        minlength:4,
        maxlength:30
    },
    Street: {
        type:String,
        minlength:4,
        maxlength:30
    }
})

module.exports = mongoose.model("Places", scheme);
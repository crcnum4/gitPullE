const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const locationSchema = new Schema({
  State : {type: String,
            required: true},
  City : {type: String,
            required: true},
  Street : {type: String,
            required: true}
});

module.exports = Place = mongoose.model("Place", locationSchema);
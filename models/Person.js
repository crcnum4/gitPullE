const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const personSchema = new Schema({
  firsName: String
});

module.exports = Person = mongoose.model("persons", personSchema);

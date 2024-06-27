const mongoose = require("mongoose");

const PeopleSchema = new mongoose.Schema({
  Title: String,
  Firstname: String,
  LastName: String,
  Position: String,
  Company: String,
  BusinessArena: String,
  Employees: String,
  Street: String,
  Info: String,
  ZipCode: String,
  Place: String,
  Country: String,
  Code: String,
  PhoneNbr: String,
  Email: String,
});

const PeopleModel = mongoose.model("People", PeopleSchema);
module.exports = PeopleModel;

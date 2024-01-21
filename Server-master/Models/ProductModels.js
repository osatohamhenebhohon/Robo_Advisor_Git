const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const riskdataSchema = new Schema({
  //   riskScore: Number,
  riskScore:[ Number],
  categories: [String],
  values: [[Number]],
});

const RiskData = mongoose.model("RiskData", riskdataSchema);

module.exports = RiskData;

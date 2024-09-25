const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
   
    company: {type: String},
    duration: {type: String},
    position: {type: String},
    desc: {type: String},
   
  },
  { versionKey: false, timeStamps: true }
);

const ExperienceModel = mongoose.model("experiences", DataSchema);
module.exports = ExperienceModel;

const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
   
    title: {type: String},
    position: {type: String},
    img: {type: String},
    duration: {type: String},
   
  },
  { versionKey: false, timeStamps: true }
);

const ExperienceModel = mongoose.model("experiences", DataSchema);
module.exports = ExperienceModel;

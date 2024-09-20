const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
   
    institute: {type: String},
    degree: {type: String},
    passingyear: {type: String},
    duration: {type: String},
   
  
   
  },
  { versionKey: false, timeStamps: true }
);

const EducationModel = mongoose.model("educations", DataSchema);
module.exports = EducationModel;

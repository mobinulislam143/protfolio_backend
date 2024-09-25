const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
   
    institute: {type: String},
    degree: {type: String},
    passingyear: {type: String},
    result: {type: String},
   
  
   
  },
  {timestamps: true, versionKey: false});

const EducationModel = mongoose.model("educations", DataSchema);
module.exports = EducationModel;

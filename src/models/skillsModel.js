const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    skills: {type: String},
    img: {type: String},
   
  },
  { versionKey: false, timeStamps: true }
);

const SkillModel = mongoose.model("skills", DataSchema);
module.exports = SkillModel;

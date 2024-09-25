const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    skills: {type: String},
    img: {type: String},
   
  },
  {timestamps: true, versionKey: false}
);

const SkillModel = mongoose.model("skills", DataSchema);
module.exports = SkillModel;

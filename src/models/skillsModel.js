const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema(
  {
    skillName: { type: String, required: true }, 
    percentage: { type: Number, required: true } 
  },
  { _id: false }
);
const DataSchema = new mongoose.Schema(
  {
    frontendskills: { type: [SkillSchema], default: [] }, 
    backendskills: { type: [SkillSchema], default: [] } 
  },
  { timestamps: true, versionKey: false }
);


const SkillModel = mongoose.model("skills", DataSchema);

module.exports = SkillModel;

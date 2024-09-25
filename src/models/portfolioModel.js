const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
   
    title: {type: String},
    img: {type: String},
    technology: {type: String},
    desc: {type: String},
    githublink: {type: String},
    livelink: {type: String},
  },
  {timestamps: true, versionKey: false});

const PortfolioModel = mongoose.model("protfolios", DataSchema);
module.exports = PortfolioModel;

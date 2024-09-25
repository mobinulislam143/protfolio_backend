const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
   
    title: {type: String},
    img: {type: String},
    desc: {type: String},
    githublink: {type: String},
    livelink: {type: String},
  },
  { versionKey: false, timeStamps: true }
);

const PortfolioModel = mongoose.model("protfolios", DataSchema);
module.exports = PortfolioModel;

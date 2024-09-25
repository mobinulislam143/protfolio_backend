const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    name: {type: String},
    subtitle: {type: String},
    desc: {type: String},
    img1: {type: String},
   
  },
  {timestamps: true, versionKey: false});

const IntroModel = mongoose.model("intros", DataSchema);
module.exports = IntroModel;

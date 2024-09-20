const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    title: {type: String},
    subtitle: {type: String},
    desc: {type: String},
    img1: {type: String},
    socialimg: {type: String},
    sociallink: {type: String},
    
  
   
  },
  { versionKey: false, timeStamps: true }
);

const IntroModel = mongoose.model("intros", DataSchema);
module.exports = IntroModel;

const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
   
    title: {type: String},
    img1: {type: String},
    img2: {type: String},
    img3: {type: String},
    img4: {type: String},
  
   
  },
  { versionKey: false, timeStamps: true }
);

const GalleryModel = mongoose.model("gallerys", DataSchema);
module.exports = GalleryModel;

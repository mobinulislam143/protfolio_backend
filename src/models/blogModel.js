const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    blogimg: {type: String},
    blogdesc: {type: String},
    blogwriter: {type: String},
    
   
  },
  { versionKey: false, timeStamps: true }
);

const BlogModel = mongoose.model("blog", DataSchema);
module.exports = BlogModel;

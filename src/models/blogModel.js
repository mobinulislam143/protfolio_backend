const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    blogimg: {type: String},
    blogdesc: {type: String},
    blogwriter: {type: String},
    
   
  },
  {timestamps: true, versionKey: false});

const BlogModel = mongoose.model("blog", DataSchema);
module.exports = BlogModel;

const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    serviceName: {type: String},
    serviceDesc: {type: String},
    img1: {type: String},
   

   
  },
  {timestamps: true, versionKey: false}
);

const ServiceModel = mongoose.model("services", DataSchema);
module.exports = ServiceModel;

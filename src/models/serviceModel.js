const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    serviceName: {type: String},
    serviceDesc: {type: String},
    img1: {type: String},
   

   
  },
  { versionKey: false, timeStamps: true }
);

const ServiceModel = mongoose.model("services", DataSchema);
module.exports = ServiceModel;

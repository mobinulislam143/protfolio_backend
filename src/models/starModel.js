const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    
   
  },
  {timestamps: true, versionKey: false});

const StarModel = mongoose.model("stars", DataSchema);
module.exports = StarModel;

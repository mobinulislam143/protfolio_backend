const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    }
   
   
  },
  {timestamps: true, versionKey: false});

const UserModel = mongoose.model("users", DataSchema);
module.exports = UserModel;

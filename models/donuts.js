var mongoose = require("mongoose")

var eaterSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String
  }, {
    timestamps: true
  });

module.exports= mongoose.model("Eater", eaterSchema)
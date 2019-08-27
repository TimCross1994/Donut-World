var mongoose = require("mongoose")



var donutSchema = new mongoose.Schema({
  Name: String,
  Date: Date,
  comment: String, 
  address: String, 
  image: String 
}, {
  timestamps: true
});

var eaterSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    donut: [donutSchema],
    googleId: String
  }, {
    timestamps: true
  });

module.exports= mongoose.model("Eater", eaterSchema)
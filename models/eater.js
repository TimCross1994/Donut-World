var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var eaterSchema = new Schema({
    name: String,
    email: String,
    avatar: String,
    donuts: [{
      type: Schema.Types.ObjectId,
      ref: "Donut"
    }],
    googleId: String
  }, {
    timestamps: true
  });

module.exports= mongoose.model("Eater", eaterSchema)
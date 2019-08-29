var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var donutSchema = new Schema({
  name: {
  type: String
  },
  eaten: {
    type: String
  },
  eater: {
    type: Schema.Types.ObjectId,
    ref: "Eater"
  }
});
module.exports= mongoose.model("Donut", donutSchema)
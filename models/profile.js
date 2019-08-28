var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var profileSchema = new Schema({
  name: {
  type: String
  },
  eaten: {
    type: Date
  },
  where: {
      type: String
  },
  entry: {
      type: String 
  }
});
module.exports= mongoose.model("User", profileSchema)
var mongoose = require('mongoose');
let Schema = new mongoose.Schema({
  date:String,
  feedback:String,
  adId:String

});
let user = mongoose.model("user", Schema);
module.exports = user;

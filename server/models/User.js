const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

const UserSchema = mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  googleId: String,
  picture: String,
});

UserSchema.plugin(findOrCreate);

module.exports = mongoose.model('Users', UserSchema);

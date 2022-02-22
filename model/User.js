const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

const UserSchema = mongoose.Schema({
  googleId: String,
  name: String,
});

UserSchema.plugin(findOrCreate);

module.exports = mongoose.model('Users', UserSchema);

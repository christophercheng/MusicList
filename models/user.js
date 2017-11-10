const mongoose = require('mongoose');

const { Schema } = mongoose;

/*
const Schema = mongoose.Schema({
  path: { type: String, required: true },
  title: { type: String, required: true },
});
*/

const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  username: String,
  password: { type: String, select: false },
  firstName: String,
  lastName: String,
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);

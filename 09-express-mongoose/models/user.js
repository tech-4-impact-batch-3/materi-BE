const mongoose = require('mongoose');
const { Schema } = mongoose

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true
  },
  password: String,
  address: {
    name: String,
    no: Number,
    kecamatan: String
  }
})

const User = mongoose.model("User", userSchema)

module.exports = User
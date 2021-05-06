const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide Your name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  country: {
    type: String,
    required: [true, 'Please provide your Country'],
    lowercase: true,
    trim: true,
  },
})

module.exports = mongoose.model('User', userSchema)

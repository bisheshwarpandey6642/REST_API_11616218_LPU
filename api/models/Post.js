const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  first_name: {
      type:String,
      required: true
  },
  last_name: {
    type: String,
    required: true
  },
  
  phone: {
    type: String,
    required: true,
    unique: true
    
  },
  email: {
    type: String,
    required: true
    
  },
  diet: {
    type: String,
    required: true
    
  },
  isconfirmed: {
    type: Boolean,
    default:false
  },
  city: {
    type: String,
    required: true,
    
  },
  aadhar: {
    type: String,
    required: true
  
    
  },
  address: {
    type: String,
    required: true,
    
  },
  date: {
    type: Date,
    default: Date.now
    
  }
})

module.exports = mongoose.model('PostSchema', PostSchema)
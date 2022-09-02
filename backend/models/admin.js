import mongoose from 'mongoose'

const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide your admin email.'],
  },
  password: {
    type: String,
    required: [true, 'Please provide the password.'],
    maxlength: 50,
  },
})

export default mongoose.model('Admin', AdminSchema)

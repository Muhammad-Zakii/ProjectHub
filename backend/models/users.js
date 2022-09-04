// import mongoose from 'mongoose'
// import validator from 'validator'
// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'
// const userSchema = mongoose.Schema({
//   firstname: {
//     type: String,
//     required: [true, 'Please enter your first name'],
//     minlength: 5,
//     maxlength: 20,
//     trim: true,
//   },
//   lastname: {
//     type: String,
//     required: [true, 'Please enter your last name'],
//     minlength: 4,
//     maxlength: 20,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: [true, 'Please enter your email'],
//     validate: {
//       validator: validator.isEmail,
//       message: 'Please provide valid email',
//     },
//     unique: true,
//   },
//   city: {
//     type: String,
//     maxlength: 20,
//     trim: true,
//   },
//   phoneno: {
//     type: String,
//     required: [true, 'Please enter your phone number'],
//     maxlength: 13,
//   },
//   password: {
//     type: String,
//     required: [true, 'Please enter your password'],
//     maxlength: 20,
//   },
// })
// userSchema.pre('save', async function () {
//   const salt = await bcrypt.genSalt(10)
//   this.password = await bcrypt.hash(this.password, salt)
// })
// userSchema.methods.createJWT = function () {
//   return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_LIFETIME,
//   })
// }
// userSchema.methods.comparePassword = async function (candidatePassword) {
//   const isMatch = await bcrypt.compare(candidatePassword, this.password)
//   return isMatch
// }
// export default mongoose.model('User', userSchema)

//_______________________________________________________________________________________

import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  img: {
    type: String,
  },
  phoneNo: {
    type: Number,
    required: [true, 'Please provide Phone No'],
    minlength: 11,
    maxlength: 14,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
    maxlength: 20,
  },

  email: {
    type: String,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email',
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
    select: false,
  },
  // lastName: {
  //   type: String,
  //   trim: true,
  //   maxlength: 20,
  //   default: 'lastName',
  // },
})

UserSchema.pre('save', async function () {
  // console.log(this.modifiedPaths())
  if (!this.isModified('password')) return
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  })
}

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password)
  return isMatch
}

export default mongoose.model('User', UserSchema)

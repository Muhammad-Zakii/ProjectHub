// import User from '../models/users.js'
// import { StatusCodes } from 'http-status-codes'
// import BadRequestError from '../errors/bad-request.js'
// import Unauthenticated from '../errors/unauthenticatederror.js'

// const register = async (req, res) => {
//   const { firstname, lastname, email, city, phoneno, password } = req.body
//   if (!firstname || !lastname || !email || !city || !phoneno || !password) {
//     throw new BadRequestError('Please provide all values')
//   }
//   const alreadyexits = await User.findOne({ email })
//   if (alreadyexits) {
//     throw new BadRequestError('Email already exist')
//   }
//   const user = await User.create({
//     firstname,
//     lastname,
//     email,
//     city,
//     phoneno,
//     password,
//   })
//   const token = user.createJWT()
//   res.status(StatusCodes.CREATED).json({
//     user: {
//       firstname: user.firstname,
//       lastname: user.lastname,
//       email: user.email,
//       city: user.city,
//       phoneno: user.phoneno,
//     },
//     token,
//   })
// }

// const login = async (req, res) => {
//   const { email, password } = req.body
//   if (!email || !password) {
//     throw new BadRequestError('Please provide all values')
//   }
//   const user = await User.findOne({ email }).select('+password')
//   if (!user) {
//     throw new Unauthenticated('Invalid Credentials')
//   }
//   const isPasswordCorrect = await user.comparePassword(password)
//   if (!isPasswordCorrect) {
//     throw new Unauthenticated('Invalid Crediatls')
//   }

//   const token = user.createJWT()
//   user.password = undefined
//   res.status(StatusCodes.OK).json({ user, token, city: user.city })
// }
// const updateUser = async (req, res) => {
//   res.send('Update user')
// }
// export { register, login, updateUser }

//______________________________________________________________________________________

import User from '../models/users.js'
import { StatusCodes } from 'http-status-codes'
import BadRequestError from '../errors/bad-request.js'
import UnAuthenticatedError from '../errors/unauthenticatederror.js'

const register = async (req, res) => {
  const { name, phoneNo, location, email, password } = req.body

  if (!name || !phoneNo || !location || !email || !password) {
    throw new BadRequestError('please provide all values')
  }
  const userAlreadyExists = await User.findOne({ email })
  if (userAlreadyExists) {
    throw new BadRequestError('Email already in use')
  }
  const user = await User.create({ name, phoneNo, location, email, password })

  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
      phoneNo: user.phoneNo,
      location: user.location,
      email: user.email,
    },
    token,
  })
}
const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequestError('Please provide all values')
  }
  const user = await User.findOne({ email }).select('+password')
  if (!user) {
    throw new UnAuthenticatedError('Invalid Credentials')
  }

  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('Invalid Credentials')
  }
  const token = user.createJWT()
  user.password = undefined
  res.status(StatusCodes.OK).json({ user, token })
}
const updateUser = async (req, res) => {
  // res.send('UpdateUser')
  const { name, phoneNo, location, email } = req.body

  if (!name || !phoneNo || !location || !email) {
    throw new BadRequestError('Please provide all values')
  }
  const user = await User.findOne({ userId: req.user.userId })

  user.name = name
  user.phoneNo = phoneNo
  user.location = location
  user.email = email

  await user.save()

  const token = user.createJWT()

  res.status(StatusCodes.OK).json({ user, token })
}

export { register, login, updateUser }

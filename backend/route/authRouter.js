// import express from 'express'
// const router = express.Router()
// import { register, login, updateUser } from '../contoller/authController.js'

// router.route('/register').post(register)
// router.route('/login').post(login)
// router.route('/updateUser').patch(updateUser)

// export default router

//_____________________________________________________________________________________

import express from 'express'
const router = express.Router()

import rateLimiter from 'express-rate-limit'
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: 'Too many requests from this IP, please try again after 15 minutes',
})

import { register, login, updateUser } from '../contoller/authController.js'
import authenticateUser from '../middleware/auth.js'
router.route('/register').post(apiLimiter, register)
router.route('/login').post(apiLimiter, login)
router.route('/updateUser').patch(authenticateUser, updateUser)

export default router

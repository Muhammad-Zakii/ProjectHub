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
import multer from 'multer'
import fs from 'fs'
import { register, login, updateUser } from '../contoller/authController.js'
import authenticateUser from '../middleware/auth.js'

import rateLimiter from 'express-rate-limit'
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: 'Too many requests from this IP, please try again after 15 minutes',
})
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(req.body)
    if (!fs.existsSync('./uploads/profiles/')) {
      console.log('Not exist')
      fs.mkdirSync('./uploads/profiles/')
    }
    cb(null, 'uploads/profiles/')
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname +
        '-' +
        Date.now() +
        file.originalname.toLowerCase().split(' ').join('-')
    )
  },
})

const upload = multer({ storage: storage })

router.post('/register', [apiLimiter, upload.single('img')], register)
router.route('/login').post(apiLimiter, login)
router.route('/updateUser').patch(authenticateUser, updateUser)

export default router

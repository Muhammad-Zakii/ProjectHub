import express from 'express'
import multer from 'multer'
import fs from 'fs'

const router = express.Router()

import {
  createListing,
  getAllListing,
  updatelisting,
  deletelisting,
  getGlobalListing,
  showstats,
} from '../contoller/listingController.js'
import authenticateUser from '../middleware/auth.js'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync('./uploads/listings/')) {
      console.log('Not exist')
      fs.mkdirSync('./uploads/listings/')
    }
    cb(null, 'uploads/listings/')
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

router.get('/', getAllListing)
router.post('/', upload.single('image1'), createListing)
router.route('/:id').delete(deletelisting).patch(updatelisting)
router.get('/getgloballisting', getGlobalListing)
router.route('/stats').get(showstats)

export default router

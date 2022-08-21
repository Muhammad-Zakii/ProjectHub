import express from 'express'
const router = express.Router()

import {
  createListing,
  getAllListing,
  updatelisting,
  deletelisting,
} from '../contoller/listingController.js'
import authenticateUser from '../middleware/auth.js'

router.route('/').post(createListing).get(getAllListing)
router.route('/:id').delete(deletelisting).patch(updatelisting)

export default router

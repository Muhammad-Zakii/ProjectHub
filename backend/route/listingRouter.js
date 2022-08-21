import express from 'express'
const router = express.Router()

import { createListing, getAllListing } from '../contoller/listingController.js'
import authenticateUser from '../middleware/auth.js'

router.route('/').post(createListing).get(getAllListing)

export default router

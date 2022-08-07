import express from 'express'
const router = express.Router()

import { createListing } from '../contoller/listingController.js'
import authenticateUser from '../middleware/auth.js'

router.route('/').post(authenticateUser, createListing)

export default router

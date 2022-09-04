import express from 'express'

const router = express.Router()
import {
  loginAdmin,
  showStatsToAdmin,
  getAllListingByAdmin,
} from '../contoller/adminController.js'

router.post('/', loginAdmin)
router.route('/adminStats').get(showStatsToAdmin)
router.route('/adminGetListings').get(getAllListingByAdmin)

export default router

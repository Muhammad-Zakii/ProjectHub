import express from 'express'

const router = express.Router()
import {
  loginAdmin,
  showStatsToAdmin,
  getAllListingByAdmin,
  getAllUsersByAdmin,
  // getAllListingforOneUser,
} from '../contoller/adminController.js'

router.post('/', loginAdmin)
router.route('/adminStats').get(showStatsToAdmin)
router.route('/adminGetListings').get(getAllListingByAdmin)
router.route('/adminGetUsers').get(getAllUsersByAdmin)
// router.route('/adminGetSpecificUserListing').get(getAllListingforOneUser)
export default router

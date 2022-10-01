import express from 'express'

const router = express.Router()
import {
  loginAdmin,
  showStatsToAdmin,
  getAllListingByAdmin,
  getAllUsersByAdmin,
  deleteUserByAdmin,
  // getAllListingforOneUser,
} from '../contoller/adminController.js'

router.post('/', loginAdmin)
router.route('/:id').delete(deleteUserByAdmin)
router.route('/adminStats').get(showStatsToAdmin)
router.route('/adminGetListings').get(getAllListingByAdmin)
router.route('/adminGetUsers').get(getAllUsersByAdmin)
// router.route('/adminGetSpecificUserListing').get(getAllListingforOneUser)
export default router

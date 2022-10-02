import express from 'express'

const router = express.Router()
import {
  loginAdmin,
  showStatsToAdmin,
  getAllListingByAdmin,
  getAllUsersByAdmin,
  deleteUserByAdmin,
  deleteListingByAdmin,
  // getAllListingforOneUser,
} from '../contoller/adminController.js'

router.post('/', loginAdmin)
router.route('/admindeleteuser/:id').delete(deleteUserByAdmin)
router.route('/adminStats').get(showStatsToAdmin)
router.route('/adminGetListings').get(getAllListingByAdmin)
router.route('/admindeletelisting/:id').delete(deleteListingByAdmin)
router.route('/adminGetUsers').get(getAllUsersByAdmin)
// router.route('/adminGetSpecificUserListing').get(getAllListingforOneUser)
export default router

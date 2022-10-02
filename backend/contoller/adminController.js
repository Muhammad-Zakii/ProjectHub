import Admin from '../models/admin.js'
import Listing from '../models/listing.js'
import { StatusCodes } from 'http-status-codes'
import User from '../models/users.js'

const loginAdmin = async (req, res) => {
  const { email, password } = req.body
  try {
    if (!email || !password) {
      res.status(404).json({ message: 'Please provide all values' })
    }
    const admin = await Admin.findOne({ email, password }).select('+password')
    console.log(admin)
    if (!admin) {
      res.status(404).json({ message: 'Invalid Credientials' })
    } else {
      res.status(200).json(admin)
    }
  } catch (error) {
    res.status(404).json({ message: '404 Error' })
  }
}
const getListingByAdmin = async (req, res) => {
  const listing = await Listing.find()
  console.log(listing)

  res
    .status(StatusCodes.OK)
    .json({ listing, totalListing: listing.length, numOfPages: 1 })
}
const showStatsToAdmin = async (req, res) => {
  let stats = await Listing.aggregate([
    // { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: '$category', count: { $sum: 1 } } },
  ])
  stats = stats.reduce((acc, curr) => {
    const { _id: category, count } = curr
    acc[category] = count
    return acc
  }, {})

  const defaultStats = {
    Websites: stats.Websites || 0,
    Andriodapps: stats.Andriodapps || 0,
    iOSapps: stats.iOSapps || 0,
    Domains: stats.Domains || 0,
    Projects: stats.Projects || 0,
    Businesses: stats.Businesses || 0,
  }
  let monthlyApplications = []
  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications })
}
const getAllListingByAdmin = async (req, res) => {
  const listingadmin = await Listing.find()

  res
    .status(StatusCodes.OK)
    .json({ listingadmin, totallistingbyadmin: listingadmin.length })
}
const getAllUsersByAdmin = async (req, res) => {
  const users = await User.find()

  res.status(StatusCodes.OK).json({ users, totalUsers: users.length })
}
const deleteUserByAdmin = async (req, res) => {
  const { id: userId } = req.params
  const user = await User.findOne({ _id: userId })
  if (!user) {
    throw new NotFoundError(`No User with id :${userId}`)
  }

  await user.remove()
  res.status(StatusCodes.OK).json({ msg: 'User remove successfully.' })
}
const deleteListingByAdmin = async (req, res) => {
  const { id: listingId } = req.params
  const listing = await Listing.findOne({ _id: listingId })
  if (!listing) {
    throw new NotFoundError(`No User with id :${listingId}`)
  }

  await listing.remove()
  res.status(StatusCodes.OK).json({ msg: 'Listing remove successfully.' })
}

export {
  loginAdmin,
  getListingByAdmin,
  showStatsToAdmin,
  getAllListingByAdmin,
  getAllUsersByAdmin,
  deleteUserByAdmin,
  deleteListingByAdmin,
  // getAllListingforOneUser,
}

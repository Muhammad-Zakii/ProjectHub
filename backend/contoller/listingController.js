import Listing from '../models/listing.js'
import { StatusCodes } from 'http-status-codes'
import BadRequestError from '../errors/bad-request.js'
import NotFoundError from '../errors/not-found.js'
import checkpremissions from '../utils/checkpremissions.js'
import mongoose from 'mongoose'
const createListing = async (req, res) => {
  const {
    category,
    title,
    summary,
    description,
    siteage,
    profit,
    margin,
    fixedprice,
    startbid,
    reserveprice,
    duration,
  } = req.body
  console.log(req.body)
  let image1 = req.file?.filename
  console.log(image1)
  if (!category || !title || !summary || !description) {
    throw new BadRequestError('Please provide all values.')
  }
  req.body.createdBy = req.user.userId

  const listing = await Listing.create({ ...req.body, image1: image1 })
  res.status(StatusCodes.CREATED).json({ listing })
}
const getAllListing = async (req, res) => {
  const listing = await Listing.find({ createdBy: req.user.userId })
  console.log(req.user.userId)
  res
    .status(StatusCodes.OK)
    .json({ listing, totalListing: listing.length, numOfPages: 1 })
}
const getGlobalListing = async (req, res) => {
  const listing = await Listing.find()
  console.log(listing)

  res
    .status(StatusCodes.OK)
    .json({ listing, totalListing: listing.length, numOfPages: 1 })
}

const updatelisting = async (req, res) => {
  const { id: listingId } = req.params
  const {
    category,
    title,
    summary,
    description,
    image1,
    image2,
    siteage,
    profit,
    margin,
    fixedprice,
    startbid,
    reserveprice,
    duration,
  } = req.body
  if (!category || !title || !summary || !description) {
    throw new BadRequestError('Please provide all values.')
  }
  const list = await Listing.findOne({ _id: listingId })

  if (!list) {
    throw new NotFoundError(`No listing with id :${listingId}`)
  }
  // checkpremissions(req.user, listing.createdBy)
  const updatedListing = await Listing.findByIdAndUpdate(
    { _id: listingId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  )
  res.status(StatusCodes.OK).json({ updatedListing })
}
const deletelisting = async (req, res) => {
  const { id: listingId } = req.params
  const list = await Listing.findOne({ _id: listingId })
  if (!list) {
    throw new NotFoundError(`No listing with id :${listingId}`)
  }

  await list.remove()
  res.status(StatusCodes.OK).json({ msg: 'Listing remove successfully.' })
}

// Functionality for Admin Panel
const showstats = async (req, res) => {
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

export {
  createListing,
  getAllListing,
  updatelisting,
  deletelisting,
  getGlobalListing,
  showstats,
}

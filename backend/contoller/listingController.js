import Listing from '../models/listing.js'
import { StatusCodes } from 'http-status-codes'
import BadRequestError from '../errors/bad-request.js'
import NotFoundError from '../errors/not-found.js'
import checkpremissions from '../utils/checkpremissions.js'

const createListing = async (req, res) => {
  const { category, title, summary, description } = req.body

  if (!category || !title || !summary || !description) {
    throw new BadRequestError('Please provide all values.')
  }
  req.body.createdBy = req.user.userId

  const listing = await Listing.create(req.body)
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

export {
  createListing,
  getAllListing,
  updatelisting,
  deletelisting,
  getGlobalListing,
}

import Listing from '../models/listing.js'
import { StatusCodes } from 'http-status-codes'
import BadRequestError from '../errors/bad-request.js'

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
  res
    .status(StatusCodes.OK)
    .json({ listing, totalListing: listing.length, numOfPages: 1 })
}

export { createListing, getAllListing }

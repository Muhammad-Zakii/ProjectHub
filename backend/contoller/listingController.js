import Listing from '../models/listing.js'
import { StatusCodes } from 'http-status-codes'
import BadRequestError from '../errors/bad-request.js'
import NotFoundError from '../errors/not-found.js'

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

const updatelisting = async (req, res) => {
  const { id: jobId } = req.params
  const { category, title, summary, description } = req.body
  if (!category || !title || !summary || !description) {
    throw new BadRequestError('Please provide all values.')
  }
  const list = await Listing.findOne({ _id: jobId })

  if (!list) {
    throw new NotFoundError(`No listing with id ${jobId}`)
  }
  const updatedListing = await Listing.findByIdAndUpdate(
    { _id: jobId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  )
  res.status(StatusCodes.OK).json({ updatedListing })
}
const deletelisting = async () => {
  res.send('Listing deleted')
}

export { createListing, getAllListing, updatelisting, deletelisting }

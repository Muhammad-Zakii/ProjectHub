import Listing from '../models/listing.js'
import { StatusCodes } from 'http-status-codes'
import BadRequestError from '../errors/bad-request.js'

const createListing = async (req, res) => {
  const { category, name, summary, description } = req.body

  if (!category || !name || !summary || !description) {
    throw new BadRequestError('Please provide all values.')
  }
  req.body.createdBy = req.user.userId

  const listing = await Listing.create(req.body)
  res.status(StatusCodes.CREATED).json({ listing })
}

export { createListing }

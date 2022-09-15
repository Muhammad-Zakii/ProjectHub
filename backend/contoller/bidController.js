import Bid from '../models/bid.js'
import { StatusCodes } from 'http-status-codes'
import User from '../models/users.js'
// import checkpremissions from '../utils/checkpremissions.js'
// import mongoose from 'mongoose'
const createBid = async (req, res) => {
  console.log(req.body, req.user.userId)

  try {
    const bid = await Bid.create({ ...req.body, userId: req.user.userId })
    res.status(StatusCodes.CREATED).json({ bid })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
const getAllBid = async (req, res) => {
  console.log(req.body)
  try {
    const bids = await Bid.find({ listingId: req.body.listingId })

    res.status(StatusCodes.CREATED).json({ bids })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export { createBid, getAllBid }

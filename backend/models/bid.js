import mongoose from 'mongoose'

const BidSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
    listingId: {
      type: String,
      // required: true,
    },
    bidPrice: {
      type: String,
      required: true,
      default: '0',
    },
  },
  { timestamps: true }
)
export default mongoose.model('Bid', BidSchema)

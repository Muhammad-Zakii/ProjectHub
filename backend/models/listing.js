import mongoose from 'mongoose'

const ListingSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: [
        '--Please Select Category--',
        'Websites',
        'Andriod apps',
        'iOS apps',
        'Domains',
        'Businesses',
      ],
      default: '--Please Select Category--',
      // required: true,
    },
    title: {
      type: String,
      required: [true, 'Please provide the name of your category.'],
      maxlength: 50,
    },
    summary: {
      type: String,
      required: [true, 'Please provide the short summary of your category.'],
      maxlength: 100,
    },
    description: {
      type: String,
      required: [
        true,
        'Please provide the complete description of your category.',
      ],
      maxlength: 500,
    },
    siteage: {
      type: String,
      default: '-',
      required: true,
    },
    profit: {
      type: String,
      default: '-',
    },
    margin: {
      type: String,
      default: '-',
    },

    fixedprice: {
      type: Number,
      default: '0',
    },
    startbid: {
      type: Number,
      default: '0',
    },
    reserveprice: {
      type: Number,
      default: '0',
    },
    duartion: {
      type: Number,
      default: '30',
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
)
export default mongoose.model('Listing', ListingSchema)

import mongoose from 'mongoose'

const ListingSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: [
        '--Please Select Category--',
        'Websites',
        'Andriodapps',
        'iOSapps',
        'Domains',
        'Projects',
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
    image1: {
      type: String,
    },
    image2: {
      type: String,
    },
    cloudinary_id: {
      type: String,
    },
    summary: {
      type: String,
      required: [true, 'Please provide the short summary of your category.'],
      maxlength: 500,
    },
    description: {
      type: String,
      required: [
        true,
        'Please provide the complete description of your category.',
      ],
      maxlength: 1500,
    },
    demo: {
      type: String,
      default: '',
      // required: true,
    },
    siteage: {
      type: String,
      default: '-',
      // required: true,
    },
    profit: {
      type: String,
      default: '-',
    },
    margin: {
      type: String,
      default: '-',
    },
    views: {
      type: String,
      default: '-',
    },

    price: {
      type: String,
      default: '0',
    },
    startbid: {
      type: String,
      default: '0',
    },
    status: {
      type: Boolean,
      default: false,
    },

    duration: {
      type: String,
      default: '0',
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

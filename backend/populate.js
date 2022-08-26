import { readFile } from 'fs/promises'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './db/database.js'
import Listing from './models/listing.js'
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    await Listing.deleteMany()
    const jsonListing = JSON.parse(
      await readFile(new URL('./Random-Data.json', import.meta.url))
    )
    await Listing.create(jsonListing)
    console.log('success')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
start()

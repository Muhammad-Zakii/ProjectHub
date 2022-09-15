import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'
import morgan from 'morgan'
//Payment

import Stripe from 'stripe'
const stripe = new Stripe(
  'sk_test_51LevKgBwi9lkF3mIBV0F7LNjuCw7KhWyt0EdmFq69QD6jz9v8fTu796xUaFa8saCMl97HydDOoaZnXu4SSzl0nYY00dFNLlCYQ'
)

//uuid
import { v4 as uuidv4 } from 'uuid'

// DataBase
import connectDB from './db/database.js'
//router
import authRouter from './route/authRouter.js'
import listingRouter from './route/listingRouter.js'

import adminRouter from './route/adminRouter.js'
import bidRouter from './route/bidRouter.js'

//Middleware
import errorhandler from './middleware/errorhandler.js'
import Middleware from './middleware/middleware.js'
import authenticateUser from './middleware/auth.js'
import path from 'path'
import { fileURLToPath } from 'url'

import cors from 'cors'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

app.use(cors({ origin: true, credentials: true }))

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome!')
})
app.use('/api/v1/auth', authRouter)

app.use('/admin', adminRouter)
app.use('/api/v1/bid', authenticateUser, bidRouter)

app.use('/static', express.static(path.join(__dirname, 'uploads')))
app.use('/api/v1/listing', authenticateUser, listingRouter)
app.post('/payment', async (req, res) => {
  const { product, token } = req.body
  // console.log(listing)
  // console.log(listing.category)
  const idempontencyKey = uuid()

  return await stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })

    .then((customer) => {
      stripe.charges.create(
        {
          amount: product.price * 100,
          currency: 'usd',
          customer: customer.id,
          receipt_email: token.email,
          description: `purchase of ${product.name}`,
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_country,
            },
          },
        },
        { idempontencyKey }
      )
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err))
})

app.use(Middleware)
app.use(errorhandler)
const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}
start()

import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'
import morgan from 'morgan'
//Payment

// import Stripe from 'stripe'
// const stripe = new Stripe(
//   'sk_test_51LevKgBwi9lkF3mIBV0F7LNjuCw7KhWyt0EdmFq69QD6jz9v8fTu796xUaFa8saCMl97HydDOoaZnXu4SSzl0nYY00dFNLlCYQ'
// )

//uuid
// import { v4 as uuidv4 } from 'uuid'

// DataBase
import connectDB from './db/database.js'
//router
import authRouter from './route/authRouter.js'
import listingRouter from './route/listingRouter.js'
import adminRouter from './route/adminRouter.js'
import bidRouter from './route/bidRouter.js'
import paymentRouter from './route/paymentRouter.js'

//Middleware
import errorhandler from './middleware/errorhandler.js'
import Middleware from './middleware/middleware.js'
import authenticateUser from './middleware/auth.js'
import path from 'path'
import { fileURLToPath } from 'url'

import cors from 'cors'
import sendEmail from './utils/sendEmail.js'

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
app.use('/payment', paymentRouter)

app.post('/api/sendemail', async (req, res) => {
  const { name } = req.body
  const { email } = req.body

  const { message } = req.body
  try {
    const na = name
    const sent_to = email
    const sent_from = process.env.EMAIL_USER
    const reply_to = email
    const subject = 'Thanks for messaging'
    const mes = message
    await sendEmail(subject, na, mes, sent_to, sent_from, reply_to)
    res.status(200).json({ success: true, message: 'Email Sent' })
  } catch (error) {
    res.status(500).json(error.message)
  }
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

import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'
import morgan from 'morgan'
// DataBase
import connectDB from './db/database.js'
//router
import authRouter from './route/authRouter.js'
import listingRouter from './route/listingRouter.js'
//Middleware
import errorhandler from './middleware/errorhandler.js'
import Middleware from './middleware/middleware.js'
import authenticateUser from './middleware/auth.js'

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome!')
})
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/listing', authenticateUser, listingRouter)

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

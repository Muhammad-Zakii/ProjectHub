import express from 'express'

const router = express.Router()
import { loginAdmin } from '../contoller/adminController.js'

router.post('/', loginAdmin)

export default router

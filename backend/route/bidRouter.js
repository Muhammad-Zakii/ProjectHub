import express from 'express'

const router = express.Router()

import { createBid, getAllBid } from '../contoller/bidController.js'

router.post('/', createBid)
router.get('/:id', getAllBid)

export default router

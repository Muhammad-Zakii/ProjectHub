import express from 'express'
import Stripe from 'stripe'

import dotenv from 'dotenv'
const router = express.Router()

const stripe = new Stripe(
  'sk_test_51LevKgBwi9lkF3mIBV0F7LNjuCw7KhWyt0EdmFq69QD6jz9v8fTu796xUaFa8saCMl97HydDOoaZnXu4SSzl0nYY00dFNLlCYQ' ||
    '',
  null
)

router.post('/donate', async (req, res) => {
  const { token = {}, amount = 0 } = req.body

  if (!Object.keys(token).length || !amount) {
    res.status(400).json({ success: false })
  }

  const { id: customerId } = await stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .catch((e) => {
      console.log(e)
      return null
    })

  if (!customerId) {
    res.status(500).json({ success: false })
    return
  }

  const invoiceId = `${
    token.email
  }-${Math.random().toString()}-${Date.now().toString()}`

  const charge = await stripe.charges
    .create(
      {
        amount: amount * 100,
        currency: 'PKR',
        customer: customerId,
        receipt_email: token.email,
        description: 'Donation',
      },
      { idempotencyKey: invoiceId }
    )
    .catch((e) => {
      console.log(e)
      return null
    })

  if (!charge) {
    res.status(500).json({ success: false })
    return
  }

  res.status(201).json({ success: true })
})

export default router

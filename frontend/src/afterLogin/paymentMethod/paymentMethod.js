import React, { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { Button } from 'react-bootstrap'

const PaymentMethod = (props) => {
  const [product, setProduct] = useState({
    name: 'Website from ProjectHub',
    price: 10000,
    productBy: 'ProjectHub',
  })
  const makePayment = (token) => {
    const body = {
      token,
      product,
    }
    const headers = {
      'Content-Type': 'application/json',
    }
    return fetch(`https://localhost:7000/payment`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log('RESPONSE ', response)
        const { status } = response
        console.log('STATUS ', status)
      })
      .catch((error) => console.log(error))
  }
  return (
    <div>
      <h1>Payment integration</h1>
      <StripeCheckout
        stripeKey={process.env.REACT_APP_KEY}
        token={makePayment}
        name='Buy Listing'
      >
        <Button variant='primary' size='lg' active>
          Buy listing in just {product.price} PKR
        </Button>
      </StripeCheckout>
    </div>
  )
}

export default PaymentMethod

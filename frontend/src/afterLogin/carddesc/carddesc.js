import React, { useEffect, useState } from 'react'
import { Card, ListGroup, Alert, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/appcontext'
import '../../index.css'
import Swal from 'sweetalert2'
//Stripe
import StripeCheckout from 'react-stripe-checkout'

const Carddesc = (props) => {
  //stripe setup

  let amount = props.price
  if (props.bool) {
    amount = props.highest.bidPrice
  } else {
    amount = props.price
  }

  const handleToken = (token) => {
    fetch('/payment/donate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, amount }),
    })
      .then((res) => res.json())
      .then((_) => {
        Swal.fire(
          'Transaction Successful!',
          'Your transaction has been successful',
          'success'
        )

        setTimeout(() => {
          navigate(`/attachments/${props.listingId}`)
        }, 2000)

        // navigate('/attachments')
      })
      .catch((_) =>
        Swal.file('Transaction Failed.', 'Your transaction failed', 'error')
      )
  }

  // const handleAmountChange = (e) => {
  //   const value = price
  //   // setPrice(value)
  // }

  //stripe setup end
  const navigate = useNavigate()
  const { user, totalRevenue } = useAppContext()
  console.log(user, props.highest)

  const checkBidTime = () => {
    const createdDay = new Date(props.createdAt).getDate()
    const requiredDay = Number(createdDay) + Number(props.duration) + 1
    const currentDay = new Date().getDate()

    if (currentDay >= requiredDay) {
      props.setBool(true)
    } else {
      navigate(`/biddingPage/${props.listingId}`)
    }
  }

  return (
    <div
      className='shadow p-3 mb-5 bg-white rounded p-3'
      style={{ display: 'flex', justifyContent: 'center', width: '90%' }}
    >
      <Card>
        <Card.Img
          variant='top'
          src={`http://localhost:7000/static/listings/${props.img}`}
        />
        <Card.Body>
          <Card.Title> Price</Card.Title>
          <Card.Text>{props.price} PKR</Card.Text>
        </Card.Body>

        <ListGroup className='list-group-flush'>
          <Link to={`/ContactPage/${props.listingId}`} className='d-grid gap-2'>
            <Button
              style={{ flex: 3 }}
              className='btn btn-success btn-block mb-4 card-btn'
            >
              Contact Seller
            </Button>
          </Link>
          {/* {`/biddingPage/${props.listingId}`} */}
          {props.status ? (
            <div className='d-grid gap-2'>
              <Button
                disabled={props.bool}
                onClick={checkBidTime}
                style={{ flex: 3 }}
                className='btn btn-primary btn-block mb-4 card-btn'
              >
                {/* {props.bool ? <icon></icon> : <icon></icon>} */}
                {props.bool ? 'Bidding date ended' : 'Make bid'}
              </Button>
              {props.bool && user?._id === props.highest['0']._id && (
                <StripeCheckout
                  stripeKey={process.env.REACT_APP_STRIPE_KEY || ''}
                  token={handleToken}
                  name=''
                  panelLabel={`Listing Price`}
                  currency='PKR'
                  amount={amount * 100}
                >
                  <div className='d-grid gap-2'>
                    <Button
                      className='btn btn-primary btn-block mb-4 card-btn'
                      style={{ flex: 3 }}
                    >
                      Make Payment
                    </Button>
                  </div>
                </StripeCheckout>
              )}
            </div>
          ) : (
            <StripeCheckout
              stripeKey={process.env.REACT_APP_STRIPE_KEY || ''}
              token={handleToken}
              name=''
              panelLabel={`Listing Price`}
              currency='PKR'
              amount={amount * 100}
            >
              <div className='d-grid gap-2'>
                <Button
                  className='btn btn-primary btn-block mb-4 card-btn'
                  style={{ flex: 3 }}
                >
                  Make Payment
                </Button>
              </div>
            </StripeCheckout>
          )}
        </ListGroup>
        <Alert variant='info'>
          <Card.Body>
            Total biddings: <strong>{props.totalBid}</strong>
          </Card.Body>
        </Alert>
        <Alert variant='warning'>
          <Card.Body>
            Highest bid: <strong>{props.highest.bidPrice}</strong>
          </Card.Body>
        </Alert>

        {/* {totalBid} */}
      </Card>
    </div>
  )
}

export default Carddesc

import React, { useEffect, useState } from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/appcontext'
import '../../index.css'

const Carddesc = (props) => {
  const navigate = useNavigate()
  const { user } = useAppContext()
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
          <Link to='/ContactPage' className='d-grid gap-2'>
            <Button
              style={{ flex: 3 }}
              className='btn btn-success btn-block mb-4 card-btn'
            >
              Contact Seller
            </Button>
          </Link>
          {/* {`/biddingPage/${props.listingId}`} */}
          {props.status ? (
            <div>
              <Button
                disabled={props.bool}
                onClick={checkBidTime}
                style={{ flex: 3 }}
                className='btn btn-primary btn-block mb-4 card-btn'
              >
                {/* {props.bool ? <icon></icon> : <icon></icon>} */}
                Make Bid
              </Button>
              <br />
              {props.bool && user?._id === props.highest['0']._id && (
                <Button
                  style={{ flex: 3 }}
                  className='btn btn-primary btn-block mb-4 card-btn'
                >
                  Make Payment
                </Button>
              )}
            </div>
          ) : (
            <Button
              style={{ flex: 3 }}
              className='btn btn-primary btn-block mb-4 card-btn'
            >
              Fixed Price
            </Button>
          )}
        </ListGroup>
        <Card.Body>Total bidding: {props.totalBid} </Card.Body>
        <Card.Body>Highest bid: {props.highest.bidPrice} </Card.Body>
        {/* {totalBid} */}
      </Card>
    </div>
  )
}

export default Carddesc

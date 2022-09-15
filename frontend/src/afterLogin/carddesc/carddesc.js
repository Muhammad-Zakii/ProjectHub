import React, { useEffect, useState } from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/appcontext'
import '../../index.css'

const Carddesc = (props) => {
  // const { getAllBid } = useAppContext()
  // const [totalBid, setTotalBid] = useState(0)
  // console.log(props.listingId)
  // useEffect(async () => {
  //   const total = await getAllBid(props.listingId)
  //   setTotalBid(total.bids.length)
  // }, [])

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
          <Link to={`/biddingPage/${props.listingId}`} className='d-grid gap-2'>
            {/* {`/biddingPage/${props.listingId}`} */}
            {props.status ? (
              <Button
                style={{ flex: 3 }}
                className='btn btn-primary btn-block mb-4 card-btn'
              >
                Make Bid
              </Button>
            ) : (
              <Button
                style={{ flex: 3 }}
                className='btn btn-primary btn-block mb-4 card-btn'
              >
                Fixed Price
              </Button>
            )}
          </Link>
          <ListGroupItem></ListGroupItem>
        </ListGroup>
        <Card.Body>Total bidding: </Card.Body>
        {/* {totalBid} */}
      </Card>
    </div>
  )
}

export default Carddesc

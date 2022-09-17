import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import NavBarr from '../navbars/navbar'
import { InputGroup, Form, Button } from 'react-bootstrap'
import Footer from '../footer/footer2'
import { useAppContext } from '../../context/appcontext'
import { useParams } from 'react-router-dom'

const initialData = { bidPrice: '0' }

const BidPage = () => {
  const { createBid, listing } = useAppContext()
  const [bid, setBid] = useState(initialData)
  const { listingId } = useParams()
  const list = listing.find((l) => l._id === listingId)
  console.log(list)

  const handleChange = (e) => {
    const { name, value } = e.target
    setBid((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    createBid({ ...bid, listingId })
  }

  return (
    <>
      <NavBarr />

      <div style={{ width: '70%' }} className='form2'>
        <Row>
          <Col xs={8} md={12}>
            <h3>Place your bid</h3>
            <br />
            <p className='about-listing'>
              By placing this bid, you are committing to buy the specific
              category.
            </p>
            <br />
            <p className='about-listing'>
              The Current Price is <strong>{list.price} PKR</strong>. Listing
              ends in: <strong>{list.duration} days</strong>
            </p>
            <h4>Your Bid</h4>
            <br />
            <p className='about-listing'>Enter your maximum bid in PKR</p>
            <br />
            <form onSubmit={handleSubmit}>
              <InputGroup>
                <InputGroup.Text>PKR</InputGroup.Text>
                <Form.Control
                  onChange={handleChange}
                  name='bidPrice'
                  value={bid.bidPrice}
                  as='textarea'
                  aria-label='With textarea'
                />
              </InputGroup>
              <br />
              <Button type='submit' variant='primary' size='lg'>
                Place Bid
              </Button>
            </form>
            <br />
            <br />
            <h4>Buyer Safty</h4>
            <br />
            <p className='about-listing'>
              ProjectHub recommends completing thorough due diligence, before
              placing a bid on a listing. Make sure all claims (ownership,
              revenue, costs, traffic, etc.) are legitimate, and there are no
              hidden attributes associated to the asset. Ensure you ask all of
              your questions about the asset before placing a bid.
            </p>
          </Col>
        </Row>
      </div>

      <Footer />
    </>
  )
}

export default BidPage

import React from 'react'
import { Row, Col } from 'react-bootstrap'
import NavBarr from '../navbars/navbar'
import { InputGroup, Form, Button } from 'react-bootstrap'
import Footer from '../footer/footer2'
const BidPage = () => {
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
              The Current Price is <strong>20000 PKR</strong>. Listing ends in:{' '}
              <strong>5 days</strong>
            </p>
            <h4>Your Bid</h4>
            <br />
            <p className='about-listing'>Enter your maximum bid in PKR</p>
            <br />
            <InputGroup>
              <InputGroup.Text>PKR</InputGroup.Text>
              <Form.Control as='textarea' aria-label='With textarea' />
            </InputGroup>
            <br />
            <Button variant='primary' size='lg'>
              Place Bid
            </Button>
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

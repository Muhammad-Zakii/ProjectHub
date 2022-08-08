import React from 'react'
import Listingnavbar from '../navbars/listingnavbar'
import { Row, Col, Card } from 'react-bootstrap'
import Footer from '../footer/footer2'

const OptionForSelling = () => {
  return (
    <>
      <Listingnavbar />
      <h3>How would you like to sell?</h3>
      <Row>
        <Col className='justify-content-md-center' xs={12} md={6}>
          <Card border='success' className='w-75'>
            <Card.Header>Auction</Card.Header>
            <Card.Body>
              <Card.Title> What is this?</Card.Title>
              <Card.Text>
                Set a starting price, then accept bids from buyers.
                <br />
                <strong> Recommended if:</strong>
                <br />
                <ul>
                  <li>You want to sell your business quickly</li>
                </ul>
                <ul>
                  <li>
                    You want to drum up lots of interest and "buzz" in your
                    listing
                  </li>
                </ul>
                <ul>
                  <li>
                    You are comfortable managing bids from lots of different
                    bidders
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='justify-content-md-center' xs={12} md={6}>
          <Card border='success' className='w-75 '>
            <Card.Header>Asking Price</Card.Header>
            <Card.Body>
              <Card.Title>What is this?</Card.Title>
              Set a price, then negotiate directly with buyers.
              <br />
              <strong> Recommended if:</strong>
              <Card.Text>
                <ul>
                  <li>You don't mind waiting longer to find a buyer</li>
                </ul>
                <ul>
                  <li>
                    You want to reduce the number of inquiries on your listing
                  </li>
                </ul>
                <ul>
                  <li>
                    You are willing to negotiate the final price with buyers
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Footer />
    </>
  )
}

export default OptionForSelling

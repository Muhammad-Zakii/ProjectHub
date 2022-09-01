import React, { useEffect } from 'react'
import Header from './header'
import { Row, Col, Card, Button } from 'react-bootstrap'
import NavBarr from './navbar'
import Footer from './footer'
import Regist from './assets/test.png'
import Create from './assets/create.png'
import Manage from './assets/manage.svg'
export default function Howtosell() {
  return (
    <>
      <NavBarr />
      <Header />
      <Row xs={12} className='justify-content-md-center m-5 '>
        <Col className='p-2'>
          {' '}
          <Card border='warning' style={{ width: '18rem' }}>
            <Card.Header>
              <strong>Get Registered yourself</strong>
            </Card.Header>
            <Card.Body>
              <Card.Title>Give details.</Card.Title>
              <Card.Text>Give details to get registered.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='p-2'>
          {' '}
          <Card border='success' style={{ width: '18rem' }}>
            <Card.Header>
              <strong>Choose how you sell</strong>
            </Card.Header>
            <Card.Body>
              <Card.Title>Give listing details</Card.Title>
              <Card.Text>It hardly take 5 minutes.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='p-2'>
          {' '}
          <Card border='info' style={{ width: '18rem' }}>
            <Card.Header>
              <strong>Get Matched to buyers</strong>
            </Card.Header>
            <Card.Body>
              <Card.Title>Finding buyers</Card.Title>
              <Card.Text>We’ll bring you potential buyers.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row xs={12} className='justify-content-md-center m-5 '>
        <Col className='p-2'>
          <Card>
            <Card.Header>
              <strong>Quick links</strong>
            </Card.Header>
            <Card.Body>
              <Card.Link href='#'>Registration</Card.Link>

              <br />
              <Card.Link href='#'>Selling on ProjectHub</Card.Link>
              <br />
              <Card.Link href='#'>Method of listing</Card.Link>
              <br />
              <Card.Link href='#'>Create listing</Card.Link>
              <br />
              <Card.Link href='#'>Manage your account</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='m-5 '>
        <Col>
          <h1>Registration</h1>
          <p>
            Yes, to sell on ProjectHub, you will first need to establish a
            ProjectHub Account. You can do so here. Signing up is quick and
            easy. With your ProjectHub Account, you will be able to list your
            online asset or business for sale, keep track of selling activity,
            contact with buyers and complete a transaction. Be mindful that by
            registering for a ProjectHub Account, you acknowledge that you have
            read and agree to our Terms of Service and Privacy Policy.
          </p>
        </Col>
        <Col>
          <img src={Regist} alt='Registration' />
        </Col>
      </Row>
      <Row className='m-5 '>
        <Col>
          <Card
            bg='info'
            key='info'
            text={'info'.toLowerCase() === 'dark'}
            style={{ width: '18rem' }}
            className='mb-2'
          >
            <Card.Body>
              <Card.Title>
                <strong>1. Fixed price</strong>
              </Card.Title>
              <Card.Text>
                Fixed-price is a method of sale where a business is advertised
                with a set price or guide that is open to negotiation.
              </Card.Text>
              <Card.Title>
                <strong>2. Auction</strong>
              </Card.Title>
              <Card.Text>
                An auction is held for 30 days after the business or asset is
                listed for sale. It is a great way to generate immediate buyer
                interest and is commonly used as a way to achieve a high price
                in a set timeframe. Auctions often achieve the best results as
                they create a sense of urgency due to the reduced number of days
                that the online asset or business is listed for sale.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <h1>Method of listing</h1>

          <p>
            We are providing two options to our users weather they sell by fixed
            price or they choose auction method to sell.
          </p>
        </Col>
      </Row>
      <Row className='m-5 '>
        <Col>
          <h1>Create listing</h1>
          <p>
            When you’re ready to list,. You will be asked to provide the
            category of your listing, your title, , your summary ,your , annual
            revenue, annual expenses, and any other information asked to provide
            the category of your listing, your title,your summary ,your
            description, revenue, and any other information relevant to your
            business type. With an asking price in mind, you can now create a
            Listing. To get started, simply select ‘Sell Now’ from the
            ProjectHub Homepage.
          </p>
        </Col>
        <Col>
          <img src={Create} alt='Create Listing' />
        </Col>
      </Row>
      <Row className='m-5'>
        <Col>
          <img src={Manage} alt='' />
        </Col>
        <Col>
          <h1>Manage your account</h1>
          <p>
            Go to profile to manage all aspects of selling on ProjectHub. Here,
            you can update your ProjectHub Account, view your listings, manage
            your listings, update and delete your listings.
          </p>
        </Col>
      </Row>
      <Footer />
    </>
  )
}

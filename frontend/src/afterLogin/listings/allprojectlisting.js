import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { largedata } from '../../largedata'
import Navbar from '../navbars/navbar'
import Afternav from '../afternav/afternav'
import Flexbox from '../flexbox/flexbox'
import Carddesc from '../carddesc/carddesc'
import { Col, Row } from 'react-bootstrap'
import Footer from '../../footer'
import '../../index.css'

const Viewallprojectlisting = () => {
  let { id } = useParams()
  const [listing, setListing] = useState([])
  useEffect(() => {
    let listing = largedata.find((listing) => listing.id === parseInt(id))
    if (listing) {
      setListing(listing)
    }
  }, [])
  return (
    <>
      <Navbar />
      {/* <ViewallNavbar /> */}
      {listing ? (
        <div>
          <div className='blog-wrap'>
            <Afternav price={listing.price} />
          </div>
          <div style={{ margin: '60px' }}>
            <Row>
              <Col md='8' sm='12' className='justify-content-md-center'>
                <div className='list-header'>
                  <h4>{listing.category}</h4>
                  <br />
                  <br />
                  <h1>{listing.websitename}</h1>
                </div>
                <div className='list-desc'>
                  <p>{listing.description}</p>
                </div>
                <Flexbox />
                <div className='about-listing'>
                  <h4>
                    <strong>About the business</strong>
                  </h4>
                  <p>{listing.about}</p>
                </div>
              </Col>
              <Col md='4' sm='12' className='justify-content-md-center'>
                <div className='card-desc'>
                  <Carddesc img={listing.img} price={listing.price} />
                </div>
                <div className='about-seller'>
                  <Col className='justify-content-md-center mt-5'>
                    <h4>About the seller</h4>
                    <h6>Muhammad Zaki</h6>
                    <p>Location: gujranwala</p>
                  </Col>
                  <br />
                </div>
                <div className='payment-method'>
                  <hr />
                  <h4>Payment method</h4>
                  <h6>JazzCash</h6>
                </div>
              </Col>
            </Row>
          </div>
          <div className='footr'>
            <Footer />
          </div>
        </div>
      ) : (
        // <EmptyList />
        <h1>Nothing here</h1>
      )}
    </>
  )
}

export default Viewallprojectlisting

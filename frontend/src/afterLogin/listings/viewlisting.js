import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { datas } from '../../data'
import Navbar from '../navbars/navbar'

import Afternav from '../afternav/afternav'
import Flexbox from '../flexbox/flexbox'
import Carddesc from '../carddesc/carddesc'
import Footer from '../../footer'
import '../../index.css'
import { Col, Row } from 'react-bootstrap'
import Charts from '../chart/chart'
import { useAppContext } from '../../context/appcontext'
const Viewlisting = () => {
  let { _id } = useParams()

  const { listing } = useAppContext()

  const [listings, setListings] = useState([])
  useEffect(() => {
    let lest = listing.find((list) => list._id === _id)
    console.log(lest)
    if (lest) {
      setListings(lest)
    }
  }, [])

  return (
    <>
      <Navbar />
      {/* <ViewallNavbar /> */}
      {listings ? (
        <div>
          <div className='blog-wrap'>
            <Afternav price={listings.fixedprice} />
          </div>
          <div style={{ margin: '60px' }}>
            <Row>
              <Col md='8' sm='12' className='justify-content-md-center'>
                <div className='list-header'>
                  <h4>{listings.category}</h4>
                  <br />
                  <br />
                  <h1>{listings.title}</h1>
                </div>
                <div className='list-desc'>
                  <p>{listings.summary}</p>
                </div>
                <Flexbox
                  siteage={listings.siteage}
                  profit={listings.profit}
                  margin={listings.margin}
                />
                <div className='about-listing'>
                  <h4>
                    <strong>About the business</strong>
                  </h4>
                  <p>{listings.description}</p>
                </div>
                <div style={{ width: '500px', height: '500px' }}>
                  <Charts />
                </div>
              </Col>
              <Col md='4' sm='12' className='justify-content-md-center'>
                <div className='card-desc'>
                  <Carddesc img={listings.image1} price={listings.fixedprice} />
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

export default Viewlisting

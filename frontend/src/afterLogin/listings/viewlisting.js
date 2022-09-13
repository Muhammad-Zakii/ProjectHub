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
import { FaUser, FaLocationArrow, FaPhone, FaAt } from 'react-icons/fa'
const Viewlisting = () => {
  let { _id } = useParams()

  const { listing, user } = useAppContext()
  console.log(listing)

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
            <Afternav
              startbid={listings.startbid}
              duration={listings.duration}
              baseprice={listings.reserveprice}
            />
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
                  <Carddesc
                    img={listings.image1}
                    basePrice={listings.reserveprice}
                  />
                </div>
                <div className='about-seller'>
                  <Col className='justify-content-md-center mt-5'>
                    <h4>About the Seller</h4>

                    <div className='card-body'>
                      <div className='avatar'>
                        <img
                          src={`http://localhost:7000/static/profiles/${user.img}`}
                          className='card-img-top'
                          alt=''
                        />
                      </div>
                      <h5 className='card-title'>
                        <FaUser />
                        Name: {user.name}
                      </h5>
                      <p className='card-text'>
                        <FaLocationArrow />
                        Location: {user.location}
                        <br />
                        <p className='phone'>
                          <FaPhone />
                          PhoneNo: {user.phoneNo}
                        </p>
                      </p>

                      <p className='phone'>
                        <FaAt />
                        Email: {user.email}
                      </p>
                    </div>
                  </Col>
                  <br />
                </div>
                <div className='payment-method'>
                  <hr />
                  <h4>Payment method</h4>
                  <h6>
                    <Link to='/paymentmethod'>Stripe</Link>
                  </h6>
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

import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Navbar from '../navbars/navbar'

import Afternav from '../afternav/afternav'
import Flexbox from '../flexbox/flexbox'
import CardForSeller from './cardforseller'
import Footer from '../../footer'
import '../../index.css'
import { Col, Row, Table, Alert, Container } from 'react-bootstrap'
import Charts from '../chart/chart'
import { useAppContext } from '../../context/appcontext'
import PieChart from '../chart/chart'
import LineChart from '../chart/linechart'
import { FaUser, FaLocationArrow, FaPhone, FaAt } from 'react-icons/fa'
import Linksnavbar from '../navbars/linksnavbar'
import BarChartt from '../chart/barchart'

const ViewListingBySeller = () => {
  let { _id } = useParams()
  const [totalBid, setTotalBid] = useState(0)
  const [highest, setHighest] = useState({})
  const [bids, setBids] = useState([])
  const { listing, user, getAllBid } = useAppContext()
  console.log(listing)
  const [bool, setBool] = useState(false)
  const [listings, setListings] = useState([])
  const apiCall = async () => {
    let lest = listing.find((list) => list._id === _id)
    console.log(lest)
    if (lest) {
      setListings(lest)
      const data = await getAllBid(_id)
      setBids(data.bids)
      const hi = data.bids.reduce((firstItem, lastItem) =>
        firstItem.bidPrice > lastItem.bidPrice ? firstItem : lastItem
      )
      setHighest(hi)
      setTotalBid(data.bids.length)
    }
  }
  console.log(highest, 'this one')

  useEffect(() => {
    apiCall()
  }, [])
  // console.log(listings)
  console.log(bids)
  return (
    <>
      <Navbar />
      <Linksnavbar />
      {/* <ViewallNavbar /> */}
      {listings ? (
        <div>
          <div className='blog-wrap'>
            <Afternav
              startbid={listings.startbid}
              duration={listings.duration}
              price={listings.price}
            />
          </div>
          <div style={{ margin: '60px' }}>
            <Row>
              <Col md='8' sm='12' className='justify-content-md-center'>
                <div className='list-header'>
                  <Alert variant='primary'>
                    <h4>{listings.category}</h4>
                  </Alert>
                </div>
                <div className='list-header'>
                  <h1>{listings.title}</h1>
                </div>
                <div className='list-desc'>
                  <p>{listings.summary}</p>
                </div>
                <Flexbox
                  siteage={listings.siteage}
                  profit={listings.profit}
                  margin={listings.margin}
                  views={listings.views}
                />
                <div className='about-listing'>
                  <h4>
                    <strong>About the business</strong>
                  </h4>
                  <p>{listings.description}</p>
                </div>
                <Col>
                  <div className='about-listing'>
                    <h3>
                      <strong>Video demo</strong>
                    </h3>
                    <Container>
                      <div className='ratio ratio-16x9'>
                        <iframe
                          src={`https://www.youtube.com/embed/${listings.demo}`}
                          allowfullscreen
                        ></iframe>
                      </div>
                    </Container>
                  </div>
                </Col>
                <Col className='pt-5'>
                  <div>
                    <h3>Revenue & Profit</h3>
                    <PieChart
                      price={
                        parseInt(listings.price) + parseInt(listings.profit)
                      }
                      profit={listings.profit}
                    />
                  </div>
                </Col>
                <Col className='pt-5'>
                  {' '}
                  <div>
                    <h3>Site Age In Years</h3>
                    <br />
                    <BarChartt siteage={listings.siteage} />
                  </div>
                </Col>

                <Col className='pt-5'>
                  <div>
                    <h3>Page views</h3>
                    <br />
                    <LineChart views={listings.views} />
                  </div>
                </Col>
              </Col>

              <Col md='4' sm='12' className='justify-content-md-center'>
                <div className='card-desc'>
                  <CardForSeller
                    img={listings.image1}
                    price={listings.price}
                    status={listings.status}
                    createdAt={listings.createdAt}
                    duration={listings.duration}
                    totalBid={totalBid}
                    highest={highest}
                    bool={bool}
                    setBool={setBool}
                    listingId={_id}
                  />
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Bid Price</th>
                        <th>Bid Placed</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bids.map((bid, id) => (
                        <tr>
                          <td>{id + 1}</td>
                          <td>{bid['0'].name}</td>
                          <td>{bid.bidPrice}</td>
                          <td>{bid.createdAt}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
                {/* {users.map((us) => {
                  if (us._id === listings.createdBy) {
                    return (
                      <div className='about-seller'>
                        <Col className='justify-content-md-center mt-5'>
                          <h4>About the Seller</h4>

                          <div className='card-body'>
                            <div className='avatar'>
                              <img
                                src={`http://localhost:7000/static/profiles/${us.img}`}
                                className='card-img-top'
                                alt=''
                              />
                            </div>
                            <h5 className='card-title'>
                              <FaUser />
                              Name: {us.name}
                            </h5>
                            <p className='card-text'>
                              <FaLocationArrow />
                              Location: {us.location}
                              <br />
                              <p className='phone'>
                                <FaPhone />
                                PhoneNo: {us.phoneNo}
                              </p>
                            </p>

                            <p className='phone'>
                              <FaAt />
                              Email: {us.email}
                            </p>
                          </div>
                        </Col>
                        <br />
                      </div>
                    )
                  }
                })} */}
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

export default ViewListingBySeller

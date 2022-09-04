import { datas } from '../../data'
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Row,
  Col,
} from 'react-bootstrap'

import React from 'react'
import '../../index.css'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAppContext } from '../../context/appcontext'
import Wrapper from '../../wrappers'
import Loading from '../loadingSpinner/loading'

function Landingpageafterlogin() {
  const {
    getAllListing,
    listing,
    isLoading,
    page,
    totalListing,
    getGlobalListing,
  } = useAppContext()
  const [list, setList] = useState(listing)

  //datas
  console.log(listing)
  const filterItems = (cate) => {
    const reccategory = listing.filter((currentCategory) => {
      //datas
      return currentCategory.category === cate
    })
    setList(reccategory)
  }
  useEffect(() => {
    getGlobalListing()
  }, [])
  if (isLoading) {
    return <Loading center />
  }
  if (listing.length === 0) {
    return (
      <Wrapper>
        <h3>No listing to display...</h3>
      </Wrapper>
    )
  }
  return (
    <>
      <div className='cen'>
        <h4>Browese latest businesses,projects and websites,domains</h4>
        <p>
          You can find here selling webistes domains,projects and other online
          businesses
        </p>
      </div>

      <div class='container'>
        <nav className='fo'>
          <button
            className='btn btn-outline-secondary fo'
            onClick={() => filterItems('Websites')}
            href=''
          >
            Websites
          </button>
          <button
            className='btn btn-outline-secondary fo'
            onClick={() => filterItems('Andriod apps')}
            href=''
          >
            Andriod apps
          </button>
          <button
            className='btn btn-outline-secondary fo'
            onClick={() => filterItems('iOS apps')}
            href=''
          >
            iOS apps
          </button>
          <button
            className='btn btn-outline-secondary fo'
            onClick={() => filterItems('Domains')}
            href=''
          >
            Domains
          </button>
          <button
            className='btn btn-outline-secondary fo'
            onClick={() => filterItems('Projects')}
            href=''
          >
            Projects
          </button>
          <button
            className='btn btn-outline-secondary fo'
            onClick={() => filterItems('Businesses')}
            href=''
          >
            Businesses
          </button>
        </nav>
      </div>

      <Row>
        {listing.map((dataall) => {
          return (
            <Col xs={12} md={4}>
              <Data key={dataall._id} {...dataall}></Data>
            </Col>
          )
        })}
      </Row>
      {/* <section className='col-12 text-center'>
        <div className='pad'>
          <Link to='/viewallproj'>
            <Button variant='primary'>View more</Button>
          </Link>
        </div>
      </section> */}
    </>
  )
}
// const HandleClick = () => {
//   const navigate = useNavigate()
//   navigate('/viewlisting')
// }
function Data(props) {
  const navigate = useNavigate()

  const {
    _id,
    image1,
    image2,
    category,
    title,
    summary,
    description,
    fixedprice,
    bid,
  } = props

  return (
    <div>
      <div className='str'>
        <a className={'linkk'}>
          <Card style={{ minHeight: '35rem', overflow: 'auto' }}>
            <Card.Img
              variant='top'
              src={`http://localhost:7000/static/listings/${image1}`}
            />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{summary}</Card.Text>
            </Card.Body>
            <ListGroup className='list-group-flush'>
              <ListGroupItem>Category: {category}</ListGroupItem>
              <ListGroupItem>Asking Price: {fixedprice}</ListGroupItem>

              {/* <ListGroupItem>
                <Link to='/signup'>{status}</Link>
              </ListGroupItem> */}
            </ListGroup>
            <Card.Body
              style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
              <Button
                variant='outline-primary'
                style={{ flex: 1 }}
                // variant='primary'
                onClick={() => {
                  navigate(`/viewlisting/${_id}`)
                }}
              >
                View Listing
              </Button>
              {/* <Button variant='primary'>View Listing</Button> */}
              <Button variant='outline-danger' style={{ flex: 1 }}>
                Total Bids: {bid}
              </Button>
            </Card.Body>
          </Card>
        </a>
      </div>
    </div>
  )
}
export default Landingpageafterlogin

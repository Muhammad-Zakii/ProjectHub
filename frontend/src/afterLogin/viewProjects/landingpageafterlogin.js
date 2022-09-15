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
import SearchContainer from '../searchContainer/searchContainer'

function Landingpageafterlogin() {
  const {
    getAllListing,
    listing,
    isLoading,
    page,
    totalListing,
    getGlobalListing,
    search,
    sort,
    searchCategory,
  } = useAppContext()
  const [list, setList] = useState(listing)

  useEffect(() => {
    getGlobalListing()
  }, [search, searchCategory, sort])
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
        <SearchContainer />
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
    </>
  )
}

function Data(props) {
  const navigate = useNavigate()

  const { _id, image1, category, title, summary, price, bid } = props

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
              <ListGroupItem>Price: {price}</ListGroupItem>

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

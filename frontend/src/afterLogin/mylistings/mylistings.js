import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'

import React from 'react'
import '../../index.css'
import { Link, useNavigate } from 'react-router-dom'

import { useAppContext } from '../../context/appcontext'

const MyListings = () => {
  const { getAllListing, listing, page, totalListing } = useAppContext()
  return (
    <div>
      <section className='wrapper'>
        {listing.map((dataall) => {
          return <OwnListing key={dataall._id} {...dataall}></OwnListing>
        })}
      </section>
    </div>
  )
}

function OwnListing(props) {
  const navigate = useNavigate()
  const { deletelisting, seteditlisting } = useAppContext()

  const { _id, img, category, title, summary, description, fixedprice, bid } =
    props

  return (
    <div>
      <div className='str'>
        <a className={'linkk'}>
          <Card style={{ minHeight: '35rem', overflow: 'auto' }}>
            <Card.Img variant='top' src={img} />
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
              <Link to='/sellByPrice'>
                <Button
                  variant='outline-primary'
                  style={{ flex: 1 }}
                  onClick={() => seteditlisting(_id)}
                >
                  Edit Listing
                </Button>
              </Link>

              <Button
                variant='outline-danger'
                style={{ flex: 1 }}
                onClick={() => deletelisting(_id)}
              >
                Delete Listing
              </Button>
            </Card.Body>
          </Card>
        </a>
      </div>
    </div>
  )
}

export default MyListings

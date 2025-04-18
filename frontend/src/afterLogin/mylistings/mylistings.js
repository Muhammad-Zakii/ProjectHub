import { Alert, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'

import React, { useEffect } from 'react'
import Swal from 'sweetalert2'

import '../../index.css'
import { Link, useNavigate } from 'react-router-dom'

import { useAppContext } from '../../context/appcontext'
import NavBarr from '../navbars/navbar'
import Footer from '../footer/footer2'
import Wrapper from '../../wrappers'
import Loading from '../loadingSpinner/loading'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const MyListings = () => {
  const { getAllListing, listing, isLoading, page, totalListing } =
    useAppContext()
  useEffect(() => {
    getAllListing()
  }, [])
  if (isLoading) {
    return <Loading center />
  }
  if (listing.length === 0) {
    return (
      <Wrapper>
        <Alert variant='dark' className='m-5' style={{ textAlign: 'center' }}>
          <h3>No listing to display for this specific user.</h3>
          <p>
            You have to create listing that will display here on my listings
            page
          </p>
        </Alert>
      </Wrapper>
    )
  }

  return (
    <div>
      <NavBarr />
      <section className='wrapper'>
        {listing.map((dataall) => {
          return <OwnListing key={dataall._id} {...dataall}></OwnListing>
        })}
      </section>
      <Footer />
    </div>
  )
}

function OwnListing(props) {
  const navigate = useNavigate()
  const showdeletealert = () => {
    setTimeout(() => {
      toast.success('Listing has been deleted successfully!', {
        position: toast.POSITION.TOP_RIGHT,
      })
    }, 1000)
  }
  const { deletelisting, seteditlisting } = useAppContext()

  const { _id, image1, category, title, summary, price, bid } = props

  return (
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
            <ListGroupItem>Price: {price} PKR</ListGroupItem>
          </ListGroup>
          <Card.Body
            style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <Button
              variant='outline-primary'
              style={{ flex: 1 }}
              // variant='primary'
              onClick={() => {
                navigate(`/viewlistingbyseller/${_id}`)
              }}
            >
              View
            </Button>
            {/* <Button variant='primary'>View Listing</Button> */}
            {/* <Button variant='outline-danger' style={{ flex: 1 }}>
                Total Bids: {bid}
              </Button> */}
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
              onClick={() => {
                deletelisting(_id)
                showdeletealert()
              }}
            >
              Delete
            </Button>
            <ToastContainer />

            {/* <div className='d-grid gap-2'>
              <Button variant='primary' size='lg'>
                Block level button
              </Button>
            </div> */}
          </Card.Body>
        </Card>
      </a>
    </div>
  )
}

export default MyListings

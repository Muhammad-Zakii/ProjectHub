import React from 'react'

import '../../index.css'
import { useState } from 'react'
import { largedata } from '../../largedata'
// import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'
import { Card, ListGroup, ListGroupItem, Button, Navbar } from 'react-bootstrap'
import ViewallNavbar from '../header/viewallnav'
import Footer from '../../footer'
import NavBarr from '../navbars/navbar'

const Viewallproj = () => {
  const [data, setData] = useState(largedata)

  return (
    <div>
      <NavBarr />
      <ViewallNavbar />
      <section className='wrapper'>
        {data.map((dataall, index) => {
          return <Data key={index} {...dataall}></Data>
        })}
      </section>
      <section className='col-12 text-center'>
        <div className='pad'>
          <Link to='/afterlogin'>
            <Button variant='primary'>Back to home page</Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}

function Data(props) {
  const navigate = useNavigate()
  const { id, img, category, websitename, description, price, bid } = props

  return (
    <div>
      <div className='str'>
        <a className={'linkk'}>
          <Card style={{ minHeight: '40rem', overflow: 'auto' }}>
            <Card.Img variant='top' src={img} />
            <Card.Body>
              <Card.Title>{websitename}</Card.Title>
              <Card.Text>{description}</Card.Text>
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
                className='bt3'
                style={{ flex: 1 }}
                variant='primary'
                onClick={() => navigate(`/viewallprojectlisting/${id}`)}
              >
                View Listing
              </Button>
              {/* <Button variant='primary'>View Listing</Button> */}
              <Button className='bt3' style={{ flex: 1 }} variant='danger'>
                Bids: {bid}
              </Button>
            </Card.Body>
          </Card>
        </a>
      </div>
    </div>
  )
}

export default Viewallproj

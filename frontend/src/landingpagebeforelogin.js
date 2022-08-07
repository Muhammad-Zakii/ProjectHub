import { datas } from './data'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'

import React from 'react'
import './index.css'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
// import { useEffect } from 'react'

function Landingpagebeforelogin() {
  const [data, setData] = React.useState(datas)
  const [error, setError] = React.useState(false)
  const filterItems = (cate) => {
    const reccategory = datas.filter((currentCategory) => {
      return currentCategory.category === cate
    })
    setData(reccategory)
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
            onClick={() => filterItems('WEBSITE')}
            href=''
          >
            Websites
          </button>
          <button
            className='btn btn-outline-secondary fo'
            onClick={() => filterItems('Andriod app')}
            href=''
          >
            Andriod apps
          </button>
          <button
            className='btn btn-outline-secondary fo'
            onClick={() => filterItems('iOS app')}
            href=''
          >
            iOS apps
          </button>
          <button
            className='btn btn-outline-secondary fo'
            onClick={() => filterItems('DOMAIN')}
            href=''
          >
            Domains
          </button>
          <button
            className='btn btn-outline-secondary fo'
            onClick={() => filterItems('PROJECT')}
            href=''
          >
            Projects
          </button>
          <button
            className='btn btn-outline-secondary fo'
            onClick={() => setData(datas)}
            href=''
          >
            All
          </button>
        </nav>
      </div>
      <section className='wrapper'>
        {data.map((dataall, index) => {
          return <Data key={index} {...dataall}></Data>
        })}
      </section>
      <section className='col-12 text-center'>
        <div className='pad'>
          <Link to='/viewprojects'>
            <Button variant='primary'>View all projects</Button>
          </Link>
        </div>
      </section>
    </>
  )
}
const HandleClick1 = () => {
  Swal.fire({
    title: 'You should be login first to view the listing.',
  })
}
function Data(props) {
  const { img, category, websitename, description, price, status, bid } = props

  return (
    <div>
      <div className='str'>
        <a className={'linkk'}>
          <Card style={{ minHeight: '35rem', overflow: 'auto' }}>
            <Card.Img variant='top' src={img} />
            <Card.Body>
              <Card.Title>{websitename}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
            <ListGroup className='list-group-flush'>
              <ListGroupItem>Category: {category}</ListGroupItem>
              <ListGroupItem>Price: {price}</ListGroupItem>

              <ListGroupItem>
                <Link to='/signup'>{status}</Link>
              </ListGroupItem>
            </ListGroup>
            <Card.Body
              style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
              <Button
                className='bt3'
                style={{ flex: 1 }}
                variant='primary'
                onClick={HandleClick1}
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
export default Landingpagebeforelogin

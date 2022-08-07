import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import '../../index.css'

const Listingnavbar = () => {
  return (
    <>
      <Navbar expand='lg' variant='light' bg='light'>
        <Container className='listnav'>
          <h3>ProjectHub</h3>

          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
              {' '}
              <h5>Create your listing</h5>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Listingnavbar

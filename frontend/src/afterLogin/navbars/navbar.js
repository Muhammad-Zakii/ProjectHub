import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import { Link } from 'react-router-dom'
import '../../index.css'
import { useState } from 'react'
import Profile from '../../Profile'

const NavBarr = () => {
  const [showlogout, setShowLogout] = useState(false)
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      sticky='top'
      style={{ backgroundColor: '#f8f9fa' }}
    >
      <Container className='nave'>
        <Navbar.Brand>
          <Link className='linked' to='/'>
            ProjectHub
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link>
              <Link className='linked' to='/howtosell'>
                How to sell
              </Link>
            </Nav.Link>
            <Nav.Link className='me-auto'>
              <Link className='linked' to='/afterlogin'>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className='me-auto'>
              <Link className='linked' to='/chooseOption'>
                Sell Now
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Profile />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBarr

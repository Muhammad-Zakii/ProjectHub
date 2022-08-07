import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import { Link } from 'react-router-dom'
import './index.css'

const NavBarr = () => {
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

            {/* <NavDropdown title='Browse' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Websites</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Andriod apps
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>iOS apps</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Domains</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.4'>Projects</NavDropdown.Item>
            </NavDropdown> */}
            {/* <NavDropdown title='Join as' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.2'>Seller</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Buyer</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link>
              <Link className='linked' to='/register'>
                {' '}
                Login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='linked' to='/register'>
                Sign up
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBarr

import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'
import Profile from './Profile'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import { Link } from 'react-router-dom'
import './index.css'
import NavBarr from './afterLogin/navbars/navbar'
const ViewallNavbar = () => {
  return (
    <>
      <Navbar
        sticky='top'
        collapseOnSelect
        expand='lg'
        style={{ backgroundColor: '#141526' }}
        variant='dark'
      >
        <Container fluid>
          <Navbar.Brand>ProjectHub</Navbar.Brand>

          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to='/'>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Nav.Link>Pricing</Nav.Link>
              {/* <NavDropdown title='Categories' id='navbarScrollingDropdown'>
                <NavDropdown.Item href='#action4'>Websites</NavDropdown.Item>

                <NavDropdown.Item href='#action5'>Domains</NavDropdown.Item>
                <NavDropdown.Item href='#action5'>iOS Apps</NavDropdown.Item>
                <NavDropdown.Item href='#action5'>Andriod App</NavDropdown.Item>
                <NavDropdown.Item href='#action5'>Projects</NavDropdown.Item>
                <NavDropdown.Item href='#action5'>Businesses</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>

            <Form className='d-flex'>
              <FormControl
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='success'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default ViewallNavbar

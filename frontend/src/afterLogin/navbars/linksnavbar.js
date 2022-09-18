import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import '../../index.css'
import { Link } from 'react-router-dom'

function linksnavbar() {
  return (
    <>
      <Navbar className='clas1' variant='dark'>
        <Container>
          <Link to='/afterlogin'>
            <Navbar.Brand href='#home'>Home</Navbar.Brand>
          </Link>
          <Nav className='me-auto'>
            {/* <Link to='/afterlogin'>
              <Nav.Link href='#home'>Home</Nav.Link>
            </Link> */}
            <Link to='/chooseOption'>
              <Nav.Link href='#home'>Sell Now</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>{' '}
    </>
  )
}

export default linksnavbar

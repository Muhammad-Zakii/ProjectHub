import { Link } from 'react-router-dom'
import '../../index.css'
import { Row, Col, Button } from 'react-bootstrap'

const Head = () => {
  return (
    <div className='clas1 p-5 '>
      <Col md={12} xs={12}>
        <Row className='mt-2 ms-4'>
          <Col md={10} xs={8}>
            <h1>ProjectHub</h1>
          </Col>
          <Col md={2} xs={4}>
            <div className='align-items-right'>
              <Link to='/chooseOption'>
                <Button
                  size='lg'
                  variant='btn btn-secondary'
                  style={{ backgroundColor: '#ff8464' }}
                >
                  Sell Now
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
        <Col className='mt-2 ms-4'>
          <h1 style={{ fontSize: '70px' }}>
            A great marketplace <br /> to buy and sell
          </h1>
          <h4>Buy an online businesses, websites, domains, projects</h4>
        </Col>
      </Col>
    </div>
  )
}
export default Head

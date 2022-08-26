import { Link } from 'react-router-dom'
import { Col, Button, Row } from 'react-bootstrap'

const Head = () => {
  return (
    // <div className='clas1'>
    //   <Col md={8} xs={12} className='justify-content-md-center'>
    //     <h2 style={{ position: 'relative', top: '-40px' }}>ProjectHub</h2>{' '}
    //     <Link to='/register' className='pull-right'>
    //       <Button
    //         size='lg'
    //         variant='btn btn-secondary'
    //         style={{ backgroundColor: '#ff8464' }}
    //       >
    //         Sell Now
    //       </Button>
    //     </Link>
    //     <div className='pa'>
    //       <span style={{ fontSize: '70px' }}>
    //         A great marketplace
    //         <br /> to buy and sell
    //       </span>
    //       <p className='para'>
    //         Buy an online businesses,websites,domains,projects
    //       </p>
    //     </div>
    //     <div className='searbar'>
    //       <form action='/' method='get'>
    //         <label htmlFor='header-search'>
    //           <span className='visually-hidden'>Search blog posts</span>
    //         </label>
    //         <div>
    //           <input
    //             type='text'
    //             id='header-search'
    //             placeholder=' Search blog posts'
    //             name='s'
    //             className='searbar'
    //           />
    //           <button className='bt' type='submit'>
    //             Search
    //           </button>
    //         </div>
    //       </form>
    //     </div>

    //   </Col>
    // </div>
    <div className='clas1 p-5 '>
      <Col md={12} xs={12}>
        <Row className='mt-2 ms-4'>
          <Col md={10} xs={8}>
            <h1>ProjectHub</h1>
          </Col>
          <Col md={2} xs={4}>
            <div className='align-items-right'>
              <Link to='/register'>
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

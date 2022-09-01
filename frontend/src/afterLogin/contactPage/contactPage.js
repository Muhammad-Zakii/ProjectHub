import React from 'react'

import NavBarr from '../navbars/navbar'
import { Card, Row, Col, Button } from 'react-bootstrap'
import FormRow from '../../formrow'
import '../../index.css'
import Footer from '../footer/footer2'

const ContactPage = () => {
  return (
    <>
      <NavBarr />
      <Row className='m-5'>
        <Col>
          <h4>Profile</h4>
          <div className='clearfix'>
            <div className='row'>
              <div className='col-md-4 animated fadeIn'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='avatar'>
                      <img src='' className='card-img-top' alt='' />
                    </div>
                    <h5 className='card-title'>Muhammad Zaki</h5>
                    <p className='card-text'>
                      Gujranwala
                      <br />
                      <p className='phone'>03167141511</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <FormRow type='fname' name='fname' placeholder='First name' />
          <FormRow type='lname' name='lname' placeholder='Last name' />
          <FormRow
            type='email'
            name='email'
            placeholder='Email of the Seller'
          />
          <FormRow type='subject' name='subject' placeholder='Subject' />
          <div className='form-row'>
            <label className='form-label'>Message</label>

            <textarea
              className='form-textarea'
              type='text'
              name='summary'
              placeholder='Message'
            />
          </div>
          <Button variant='primary'>Send Message</Button>
        </Col>
      </Row>
      <Footer />
    </>
  )
}

export default ContactPage

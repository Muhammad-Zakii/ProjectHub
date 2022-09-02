import React, { useRef } from 'react'

import NavBarr from '../navbars/navbar'
import { Card, Row, Col, Button } from 'react-bootstrap'
import FormRow from '../../formrow'
import '../../index.css'
import Footer from '../footer/footer2'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

const ContactPage = () => {
  const refform = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_ve14ad7',
        'Contact_Page',
        refform.current,
        'YKUTnodPybQmuhl4g'
      )
      .then(
        () => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Message has been send successfully.',
            showConfirmButton: false,
            timer: 2000,
          })
        },
        () => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Failed to send a message,please try again.',
            showConfirmButton: false,
            timer: 2000,
          })
        }
      )
    refform.current.reset()
  }
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
          <form ref={refform} onSubmit={sendEmail}>
            <FormRow type='email' name='Your email' placeholder='Your Email' />
            <FormRow type='Name' name='Name' placeholder='Name' />

            <FormRow
              type='email'
              name='Seller email'
              placeholder='Email of the Seller'
            />

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
          </form>
        </Col>
      </Row>
      <Footer />
    </>
  )
}

export default ContactPage

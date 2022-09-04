import React, { useRef } from 'react'

import NavBarr from '../navbars/navbar'
import { Card, Row, Col, Button } from 'react-bootstrap'
import FormRow from '../../formrow'
import '../../index.css'
import Footer from '../footer/footer2'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import { useAppContext } from '../../context/appcontext'
import { FaUser, FaLocationArrow, FaPhone, FaAt } from 'react-icons/fa'

const ContactPage = () => {
  const { user, listing } = useAppContext()

  const refform = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_jegmtfb',
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
          <h4>Profile details</h4>
          <div className='clearfix'>
            <div className='row'>
              <div className='col-md-4 animated fadeIn bg'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='avatar'>
                      <img
                        src={`http://localhost:7000/static/profiles/${user.img}`}
                        className='card-img-top'
                        alt=''
                      />
                    </div>
                    <h5 className='card-title'>
                      <FaUser />
                      Name: {user.name}
                    </h5>
                    <p className='card-text'>
                      <FaLocationArrow />
                      Location: {user.location}
                      <br />
                      <p className='phone'>
                        <FaPhone />
                        PhoneNo: {user.phoneNo}
                      </p>
                    </p>
                    <br />
                    <p className='phone'>
                      <FaAt />
                      Email: {user.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='m-5'>
        <Col md={7}>
          <form ref={refform} onSubmit={sendEmail}>
            {' '}
            <div className='form-row'>
              <label className='form-label'>Seller Email</label>

              <input
                className='form-input'
                type='email'
                name='email1'
                placeholder='Seller email'
              />
            </div>
            <div className='form-row'>
              <label className='form-label'>Your name</label>

              <input
                className='form-input'
                type='text'
                name='name'
                placeholder='Name'
              />
            </div>{' '}
            <div className='form-row'>
              <label className='form-label'>Buyer Email</label>

              <input
                className='form-input'
                type='email'
                name='email2'
                placeholder='Buyer Email'
              />
            </div>
            <div className='form-row'>
              <label className='form-label'>Message</label>

              <textarea
                className='form-textarea'
                type='text'
                name='message'
                placeholder='Message'
              />
            </div>
            <Button type='submit' value='SEND' variant='primary'>
              Send Message
            </Button>
          </form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </>
  )
}

export default ContactPage

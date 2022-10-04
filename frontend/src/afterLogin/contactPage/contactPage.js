import React, { useEffect, useState } from 'react'

import NavBarr from '../navbars/navbar'
import { Card, Row, Col, Button } from 'react-bootstrap'
import FormRow from '../../formrow'
import '../../index.css'
import Footer from '../footer/footer2'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useAppContext } from '../../context/appcontext'
import { FaUser, FaLocationArrow, FaPhone, FaAt } from 'react-icons/fa'
import axios from 'axios'

const ContactPage = () => {
  const { users, listing, getUsersByAdmin } = useAppContext()
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const { listingId } = useParams()
  const list = listing.find((l) => l._id === listingId)
  console.log(list)

  const submitRequest = async (e) => {
    e.preventDefault()
    console.log({ name, email, message })
    const data = {
      name,
      email,
      message,
    }
    const response = await axios.post(
      'http://localhost:3000/api/sendemail',
      data
    )

    if (response.status === 200) {
      Swal.fire('Good job!', 'Your email has been sent', 'success')
    } else if (response.status === 404) {
      alert('Sorry')
    }
  }

  useEffect(() => {
    getUsersByAdmin()
  }, [])

  return (
    <>
      <NavBarr />
      {/* <Row className='m-5'></Row> */}
      <Row className='m-5'>
        <Col md={5}>
          {users.map((us) => {
            if (us._id === list.createdBy) {
              return (
                <div>
                  <h4>Profile details</h4>
                  <div className='clearfix'>
                    <div className='row'>
                      <div className='col-md-7 animated fadeIn bg'>
                        <div className='card'>
                          <div className='card-body'>
                            <div className='avatar'>
                              <img
                                src={`http://localhost:7000/static/profiles/${us.img}`}
                                className='card-img-top'
                                alt=''
                              />
                            </div>
                            <h5 className='card-title'>
                              <FaUser />
                              Name: {us.name}
                            </h5>
                            <p className='card-text'>
                              <FaLocationArrow />
                              Location: {us.location}
                              <br />
                              <p className='phone'>
                                <FaPhone />
                                PhoneNo: {us.phoneNo}
                              </p>
                            </p>
                            <br />
                            <p className='phone'>
                              <FaAt />
                              Email: {us.email}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          })}
        </Col>
        <Col md={7}>
          <form onSubmit={submitRequest}>
            {/* onSubmit={sendEmail}{' '} */}{' '}
            <div className='form-row'>
              <label className='form-label'>Seller Email</label>

              <input
                className='form-input'
                type='email'
                name='email'
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='form-row'>
              <label className='form-label'>Your name</label>

              <input
                className='form-input'
                type='text'
                value={name}
                name='name'
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>{' '}
            <div className='form-row'>
              <label className='form-label'>Message</label>

              <textarea
                className='form-textarea'
                type='text'
                name='message'
                value={message}
                placeholder='Message'
                style={{ height: '250px' }}
                onChange={(e) => setMessage(e.target.value)}
                required
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

import React, { useEffect, useState } from 'react'

import NavBarr from '../navbars/navbar'
import { Row, Col, Button } from 'react-bootstrap'
import '../../index.css'
import Footer from '../footer/footer2'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useAppContext } from '../../context/appcontext'
import { FaUser, FaLocationArrow, FaPhone, FaAt } from 'react-icons/fa'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
      toast.success('Message has been send successfully!', {
        position: toast.POSITION.TOP_RIGHT,
      })
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
            <ToastContainer />
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

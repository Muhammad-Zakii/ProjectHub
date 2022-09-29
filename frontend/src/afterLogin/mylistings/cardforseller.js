import React, { useState, useRef } from 'react'
import { Card, Form, Row, Col, Alert, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { useAppContext } from '../../context/appcontext'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Wrapper from '../../wrappers'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'
import '../../index.css'

const CardForSeller = (props) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const navigate = useNavigate()
  const { user } = useAppContext()
  // console.log(user, props.highest)

  const checkBidTime = () => {
    const createdDay = new Date(props.createdAt).getDate()
    const requiredDay = Number(createdDay) + Number(props.duration) + 1
    const currentDay = new Date().getDate()

    if (currentDay >= requiredDay) {
      props.setBool(true)
    } else {
      navigate(`/biddingPage/${props.listingId}`)
    }
  }
  //Email Integration...............

  const refform = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_569n8gp',
        'Notify_Buyer',
        refform.current,
        'oGAm4SdMlSlzvjSWp'
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
    <div
      className='shadow p-3 mb-5 bg-white rounded p-3'
      style={{ display: 'flex', justifyContent: 'center', width: '90%' }}
    >
      <Card>
        <Card.Img
          variant='top'
          src={`http://localhost:7000/static/listings/${props.img}`}
        />
        <Card.Body>
          <Card.Title> Price</Card.Title>
          <Card.Text>{props.price} PKR</Card.Text>
        </Card.Body>

        <Button
          variant='primary'
          onClick={handleShow}
          variant='outline-primary'
          className='me-2  btn-block mb-4 card-btn'
        >
          Notify highest bidder
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Notify bidder</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Wrapper>
              <Form ref={refform} onSubmit={sendEmail}>
                <Form.Group
                  as={Row}
                  className='mb-3'
                  controlId='formPlaintextEmail'
                >
                  <Form.Label column sm='2'>
                    Email
                  </Form.Label>

                  <Form.Control
                    type='email'
                    name='email'
                    value={
                      props.highest.bidPrice
                        ? props.highest['0'].email
                        : 'email'
                    }
                    placeholder='Email'
                  />
                </Form.Group>

                <Form.Group
                  as={Row}
                  className='mb-3'
                  controlId='formPlaintextPassword'
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control name='message' as='textarea' rows={5} />
                  <Button type='submit' value='SEND' variant='outline-primary'>
                    Notify
                  </Button>
                </Form.Group>
              </Form>{' '}
            </Wrapper>
          </Offcanvas.Body>
        </Offcanvas>

        <Alert variant='info'>
          <Card.Body>
            Total biddings: <strong>{props.totalBid}</strong>
          </Card.Body>
        </Alert>
        <Alert variant='warning'>
          <Card.Body>
            Highest bid: <strong>{props.highest.bidPrice}</strong>
          </Card.Body>
        </Alert>

        {/* {totalBid} */}
      </Card>
    </div>
  )
}

export default CardForSeller

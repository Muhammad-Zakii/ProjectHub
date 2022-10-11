import React, { useState } from 'react'
import { Alert, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { useAppContext } from '../../context/appcontext'

const Uploadattachments = () => {
  const navigate = useNavigate()

  const [show, setShow] = useState(false)

  // const navigatee = () => {
  //   setTimeout(() => {
  //     navigate('/afterlogin')
  //   }, 2000)
  // }
  const handleClick = () => {
    setShow(!show)
    setTimeout(() => {
      navigate('/afterlogin')
    }, 3000)
  }

  return (
    <>
      <div className='maindiv'>
        <Alert variant='primary  '>
          <h3 className='headerdiv'>Build listing</h3>

          <p className='parag'>
            Add your listing attachments in zip file also report of a particular
            listing in pdf.{' '}
          </p>
        </Alert>
      </div>
      <Row className='m-5'>
        <Alert show={show} variant='success'>
          Attachments has been uploaded
        </Alert>
        <Col md={6}>
          {' '}
          <div className='form-row'>
            <br />
            <Form.Label>
              {' '}
              Please select attachment(zip file)preferred
            </Form.Label>
            <Form.Control
              type='file'
              required
              name='file'

              // onChange={listingInput}
            />
          </div>
        </Col>
        <Col md={6}>
          {' '}
          <div className='form-row'>
            <br />
            <Form.Label>
              {' '}
              Please select attachment for full report(pdf)preferred{' '}
            </Form.Label>
            <Form.Control
              type='file'
              required
              name='attachment2'
              // onChange={listingInput}
            />
          </div>
        </Col>
        <div className='text-center'>
          <button
            type='button'
            className='btn btn-outline-success'
            onClick={handleClick}
          >
            Upload attachments
          </button>
        </div>
        {/* <Button onClick={() => setShow(false)} variant='outline-success'>
          Close me y'all!
        </Button> */}
      </Row>
    </>
  )
}

export default Uploadattachments

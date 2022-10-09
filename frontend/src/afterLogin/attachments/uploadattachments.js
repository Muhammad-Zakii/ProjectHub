import React, { useState } from 'react'
import { Alert, Row, Col, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Uploadattachments = () => {
  const navigate = useNavigate()
  // const [attachments, setAttachments] = useState('')
  // const [loading, setLoading] = useState(false)

  // const uploadImage = async (e) => {
  //   const files = e.target.files
  //   const data = new FormData()
  //   data.append('file', files[0])
  //   data.append('upload_preset', 'ml_default')
  //   setLoading(true)
  //   const res = await fetch('	https://res.cloudinary.com/dchhfc3sy/raw/upload', {
  //     method: 'POST',
  //     body: data,
  //   })
  //   const file = await res.json()

  //   setAttachments(file.secure_url)
  //   setLoading(false)
  // }
  // }
  const navigatee = () => {
    setTimeout(() => {
      navigate('/afterlogin')
    }, 2000)
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
            onClick={navigatee}
            // onClick={handleSubmit}
            // onClick={() => {
            //   handleSubmit redirecting()
            // }}
            // disabled={isLoading}
          >
            Upload attachments
          </button>
        </div>
      </Row>
    </>
  )
}

export default Uploadattachments

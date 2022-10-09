import React from 'react'

import fileDownload from 'js-file-download'
import axios from 'axios'
import { Col, Row, Button, Accordion, Alert } from 'react-bootstrap'

import { FaDownload } from 'react-icons/fa'
import { useParams } from 'react-router-dom'

export default function App() {
  let { _id } = useParams()
  console.log(_id)
  const handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: 'blob',
      })
      .then((res) => {
        fileDownload(res.data, filename)
      })
  }

  return (
    <>
      {/* <Navbar /> */}
      <div className='mt-5'>
        <Alert variant='warning' className='m-5'>
          <h3 style={{ textAlign: 'center' }}>Download Attachments</h3>
        </Alert>
        <Alert variant='success' className='m-3'>
          <h5 style={{ textAlign: 'center' }}>
            Find the attachments below you can download zip and pdf files for a
            particular listing. You can also contact seller in case of any
            query.
          </h5>
        </Alert>
      </div>
      <Row className='m-5'>
        <Col>
          <Accordion defaultActiveKey='0'>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>
                <strong>Download files </strong>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Click on the button below to download files of particular
                  listing.
                </p>
                <div className='mb-2'>
                  <Button
                    variant='outline-primary'
                    size='lg'
                    onClick={() => {
                      handleDownload(
                        'https://res.cloudinary.com/dchhfc3sy/raw/upload/v1665261296/ProjectHub/Task_ujhmlz.zip',
                        'sample.zip'
                      )
                    }}
                  >
                    Download files <FaDownload />
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col>
          <Accordion defaultActiveKey='0'>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>
                {' '}
                <strong>Download reports </strong>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Click on the button below to download report of particular
                  listing.
                </p>
                <div className='mb-2'>
                  <Button
                    variant='outline-primary'
                    size='lg'
                    onClick={() => {
                      handleDownload(
                        'https://res.cloudinary.com/dchhfc3sy/image/upload/v1665261891/ProjectHub/ProjectHub pdf files/PDC_qcojkx.pdf',
                        'sample.pdf'
                      )
                    }}
                  >
                    Download reports <FaDownload />
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </>
  )
}

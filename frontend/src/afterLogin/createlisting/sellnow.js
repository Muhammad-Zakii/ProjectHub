import React from 'react'
import Listingnavbar from '../navbars/listingnavbar'
import { Alert } from 'react-bootstrap'
import Listingform from './listingform'
import Footer from '../footer/footer2'
import Linksnavbar from '../navbars/linksnavbar'

const Sellnow = () => {
  return (
    <>
      <Listingnavbar />
      <Linksnavbar />
      <div className='maindiv'>
        <Alert variant='primary  '>
          <h3 className='headerdiv'>Build listing</h3>

          <p className='parag'>
            Add your projects, websites, domains and business details below to
            create your listing page.{' '}
          </p>
        </Alert>
      </div>
      <Listingform />
      <Footer />
    </>
  )
}

export default Sellnow

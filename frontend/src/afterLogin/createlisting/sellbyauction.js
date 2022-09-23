import React from 'react'
import Listingnavbar from '../navbars/listingnavbar'
import Auctionform from './auctionform'
import Footer from '../footer/footer2'
import Linksnavbar from '../navbars/linksnavbar'
import { Alert } from 'react-bootstrap'

const SellByAuction = () => {
  return (
    <>
      <Listingnavbar />
      <Linksnavbar />
      <div className='maindiv'>
        <Alert variant='secondary   '>
          <h3 className='headerdiv'>Build listing</h3>
          <p className='parag'>
            Add your projects, websites, domains and business details below to
            create your listing page.{' '}
          </p>
        </Alert>
      </div>
      <Auctionform />
      <Footer />
    </>
  )
}

export default SellByAuction

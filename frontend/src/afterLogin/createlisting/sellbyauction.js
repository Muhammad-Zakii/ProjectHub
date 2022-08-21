import React from 'react'
import Listingnavbar from '../navbars/listingnavbar'
import Auctionform from './auctionform'
import Footer from '../footer/footer2'

const SellByAuction = () => {
  return (
    <>
      <Listingnavbar />
      <div className='maindiv'>
        <h3 className='headerdiv'>Build listing</h3>
        <p className='parag'>
          Add your projects, websites, domains and business details below to
          create your listing page.{' '}
        </p>
      </div>
      <Auctionform />
      <Footer />
    </>
  )
}

export default SellByAuction

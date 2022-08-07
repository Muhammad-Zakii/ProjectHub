import React from 'react'
import '../../index.css'

const Afternav = (props) => {
  return (
    <div className='container afternav'>
      <div className='row'>
        <div className='col order-last'>
          <strong>Asking price: </strong>
          {props.price}
        </div>
        <div className='col order-first'>
          <strong>Description</strong>
        </div>
        <div className='col order-first'>
          <strong>Traffic</strong>
        </div>
        <div className='col order-first'>
          <strong>Financials</strong>
        </div>
      </div>
    </div>
  )
}

export default Afternav

import React from 'react'
import '../../index.css'

const Afternav = (props) => {
  return (
    <div className='container afternav'>
      <div className='row'>
        <div className='col order-last'>
          <strong>Bidding start at: </strong>
          {props.startbid} PKR
        </div>
        <div className='col order-first'>
          <strong>Description</strong>
        </div>
        <div className='col order-first'>
          <strong>Price: </strong>
          {props.price} PKR
        </div>
        <div className='col order-first'>
          <strong>Duration(Number of days): </strong>
          {props.duration}
        </div>
      </div>
    </div>
  )
}

export default Afternav

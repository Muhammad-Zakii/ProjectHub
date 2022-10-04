import React from 'react'
import '../../index.css'

const Flexbox = (props) => {
  return (
    <div
      className='d-flex align-items-stretch bd-highlight example-parent flex-desc'
      style={{ height: '150px' }}
    >
      <div className='p-3 bd-highlight col-example'>
        <h4>Site age</h4>
        <h6>{props.siteage} years</h6>
      </div>
      <div className='p-3 bd-highlight col-example'>
        <h4>Monthly profit</h4>
        <h6>{props.profit} PKR</h6>
      </div>
      <div className='p-3 bd-highlight col-example'>
        <h4>Profit margin</h4>
        <h6>{props.margin} %</h6>
      </div>
      <div className='p-3 bd-highlight col-example'>
        <h4>Views</h4>
        <h6>{props.views}</h6>
      </div>
    </div>
  )
}

export default Flexbox

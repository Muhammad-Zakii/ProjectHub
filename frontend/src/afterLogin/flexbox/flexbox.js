import React from 'react'
import '../../index.css'

const Flexbox = () => {
  return (
    <div
      className='d-flex align-items-stretch bd-highlight example-parent flex-desc'
      style={{ height: '150px' }}
    >
      <div className='p-2 bd-highlight col-example'>
        <h4>Site age</h4>
        <h6>2 years</h6>
      </div>
      <div className='p-2 bd-highlight col-example'>
        <h4>Monthly profit</h4>
        <h6>20000 PKR</h6>
      </div>
      <div className='p-2 bd-highlight col-example'>
        <h4>Profit margin</h4>
        <h6>100%</h6>
      </div>
    </div>
  )
}

export default Flexbox

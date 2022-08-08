import React from 'react'
import { Button } from 'react-bootstrap'
import { useAppContext } from '../../context/appcontext'
// import { useAppContext } from '../../context/appcontext'

const Pricing = () => {
  const {
    fixedprice,
    startbid,
    reserveprice,
    duration,
    isAunction,
    handleChange,
  } = useAppContext()
  const [choice, setChoice] = React.useState(useAppContext())

  const toggleMember = () => {
    setChoice({ ...choice, isMember: !choice.isMember })
  }

  const handleChang = (e) => {
    setChoice({ ...choice, [e.target.name]: e.target.value })
  }
  const listingInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }
  return (
    <>
      <div className='form-row'>
        {!choice.isMember && (
          <>
            <label className='form-label' htmlFor='fixedprice'>
              Fixed price
            </label>

            <input
              className='form-input'
              type='number'
              name='fixedprice'
              value={choice.fixedprice}
              handleChange={handleChang}
              onChange={listingInput}
              placeholder='PKR'
            />
          </>
        )}
      </div>
      <div className='form-row'>
        {choice.isMember && (
          <>
            <label className='form-label' htmlFor='startbid'>
              Start bid
            </label>

            <input
              className='form-input'
              type='number'
              name='startbid'
              value={choice.startbid}
              handleChange={handleChang}
              onChange={listingInput}
              placeholder='PKR'
            />
          </>
        )}
      </div>
      <div className='form-row'>
        {choice.isMember && (
          <>
            <label className='form-label' htmlFor='endbid'>
              Reserve Price
            </label>

            <input
              className='form-input'
              type='number'
              name='reserveprice'
              value={choice.reserveprice}
              handleChange={handleChang}
              onChange={listingInput}
              placeholder='PKR'
            />
          </>
        )}
      </div>
      <div className='form-row'>
        {choice.isMember && (
          <>
            <label className='form-label' htmlFor='duration'>
              Auction duration (days)
            </label>

            <input
              className='form-input'
              type='number'
              name='duartion'
              value={choice.duration}
              handleChange={handleChang}
              onChange={listingInput}
              placeholder='30'
            />
          </>
        )}
      </div>
      <Button
        variant='outline-success'
        type='button'
        onClick={toggleMember}
        className='member-btn'
      >
        {choice.isMember ? 'By Auction' : 'By Fixed price'}
      </Button>
    </>
  )
}

export default Pricing

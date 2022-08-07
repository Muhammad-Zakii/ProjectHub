import React from 'react'
import { Button } from 'react-bootstrap'
import { useAppContext } from '../../context/appcontext'

const {
  // startbid: '',
  // endbid: '',
  // fixedprice: '',
  // auctionduartion: '',
  fixedprice,
  startbid,
  reserveprice,
  duration,
  isAunction,
} = useAppContext
const Pricing = () => {
  const [choice, setChoice] = React.useState(useAppContext)
  const toggleMember = () => {
    setChoice({ ...choice, isMember: !choice.isMember })
  }

  const handleChange = (e) => {
    setChoice({ ...choice, [e.target.name]: e.target.value })
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
              handleChange={handleChange}
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
              handleChange={handleChange}
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
              handleChange={handleChange}
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
              handleChange={handleChange}
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

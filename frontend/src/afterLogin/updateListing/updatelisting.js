import React from 'react'
import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useAppContext } from '../../context/appcontext'
import Alert from '../../components/alert'

const Updatelisting = () => {
  const {
    listing,
    showAlert,
    displayAlert,
    editlisting,
    isLoading,
    clearValues,
    categoryoptions,
  } = useAppContext()
  const [category, setCategory] = useState(listing.category)
  const [title, setTitle] = useState(listing.title)
  const [summary, setSummary] = useState(listing?.summary)
  const [description, setDescription] = useState(listing?.description)
  const [siteage, setSiteAge] = useState(listing?.siteage)
  const [profit, setProfit] = useState(listing?.profit)
  const [margin, setMargin] = useState(listing?.margin)
  const [fixedprice, setFixedPrice] = useState(listing?.fixedprice)
  const [startbid, setStartBid] = useState(listing?.startbid)
  const [reserveprice, setReservePrice] = useState(listing?.reserveprice)
  const [duration, setDuration] = useState(listing?.duration)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      !category ||
      !title ||
      !summary ||
      !description ||
      !siteage ||
      !profit ||
      !margin ||
      !fixedprice ||
      !startbid ||
      !reserveprice ||
      !duration
    ) {
      // test and remove temporary
      displayAlert()
      return
    }

    editlisting({
      category,
      title,
      summary,
      description,
      siteage,
      profit,
      margin,
      fixedprice,
      startbid,
      reserveprice,
      duration,
    })
  }
  return (
    <div>
      <form className='m-3'>
        <h3 className='head3'></h3>
        {showAlert && <Alert />}
        <Row className='justify-content-md-center'>
          <Col className='p-5' xs={12} md={6}>
            <label className='form-label'>Select category</label>
            <select
              className='form-input'
              name='category'
              value={category}
              handleChange={(e) => setCategory(e.target.value)}
            >
              {categoryoptions.map((itemValue, index) => {
                return (
                  <option key={index} value={itemValue}>
                    {itemValue}
                  </option>
                )
              })}
            </select>
            <br />

            <div className='form-row'>
              <label className='form-label'>
                Please select atleast one image
              </label>
              <input className='form-input' type='file' />
            </div>
            <input className='form-input' type='file' />

            <div className='form-row'>
              <br />
              <label className='form-label'>Title</label>

              <input
                className='form-input'
                type='text'
                name='title'
                value={title}
                placeholder='title'
                handleChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='form-row'>
              <label className='form-label'>Summary</label>

              <textarea
                className='form-textarea'
                type='text'
                name='summary'
                value={summary}
                placeholder=' Add a summary to briefly introduce your project, business, website or domain. Keep it short and impactful.'
                handleChange={(e) => setSummary(e.target.value)}
              />
            </div>
            <div className='form-row'>
              <label className='form-label'>Description</label>

              <textarea
                className='form-textarea'
                type='text'
                name='description'
                value={description}
                placeholder=' This is where you tell buyers everything they need to know. Don’t hold back. The more detail you provide, the better value you will get.'
                handleChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </Col>
          <Col className='p-5' xs={12} md={6}>
            <div className='form-row'>
              <label className='form-label'>Site age</label>

              <input
                className='form-input'
                type='text'
                name='siteage'
                value={siteage}
                placeholder='Site Age'
                handleChange={(e) => setSiteAge(e.target.value)}
              />
            </div>
            <div className='form-row'>
              <label className='form-label'>Monthly profit</label>

              <input
                className='form-input'
                type='text'
                name='profit'
                value={profit}
                placeholder='Monthly Profit'
                handleChange={(e) => setProfit(e.target.value)}
              />
            </div>
            <div className='form-row'>
              <label className='form-label'>Profit margin</label>

              <input
                className='form-input'
                type='text'
                name='margin'
                value={margin}
                placeholder='Profit Margin'
                handleChange={(e) => setMargin(e.target.value)}
              />
            </div>
            <div className='form-row'>
              <label className='form-label' htmlFor='fixedprice'>
                Fixed price
              </label>

              <input
                className='form-input'
                type='text'
                name='fixedprice'
                value={fixedprice}
                handleChange={(e) => setFixedPrice(e.target.value)}
                placeholder='PKR'
              />
            </div>
            <div className='form-row'>
              <label className='form-label' htmlFor='startbid'>
                Start bid
              </label>

              <input
                className='form-input'
                type='text'
                name='startbid'
                value={startbid}
                handleChange={(e) => setStartBid(e.target.value)}
                placeholder='PKR'
              />
            </div>
            <div className='form-row'>
              <label className='form-label' htmlFor='endbid'>
                Reserve Price
              </label>

              <input
                className='form-input'
                type='text'
                name='reserveprice'
                value={reserveprice}
                handleChange={(e) => setReservePrice(e.target.value)}
                placeholder='PKR'
              />
            </div>
            <div className='form-row'>
              <label className='form-label' htmlFor='duration'>
                Auction duration (days)
              </label>

              <input
                className='form-input'
                type='text'
                name='duartion'
                value={duration}
                handleChange={(e) => setDuration(e.target.value)}
                placeholder='30'
              />
            </div>
            <div className='form-row'></div>
            <div className='text-center'>
              <button
                type='button'
                className='btn btn-outline-warning'
                disabled={isLoading}
              >
                {isLoading ? 'Please Wait...' : 'Update Listing'}
              </button>
            </div>
            <div className='text-center mt-5'>
              <button
                type='button'
                className='btn btn-outline-success'
                onClick={(e) => {
                  e.preventDefault()
                  clearValues()
                }}
              >
                Clear Listing
              </button>
            </div>
          </Col>
        </Row>
      </form>
    </div>
  )
}

export default Updatelisting

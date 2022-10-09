import React from 'react'
import '../../index.css'

import { Row, Col, Form } from 'react-bootstrap'
import { useAppContext } from '../../context/appcontext'
import Alert from '../../components/alert'
import FormSelect from '../../formSelect'
import { useNavigate } from 'react-router-dom'

const Auctionform = () => {
  const navigate = useNavigate()
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    category,
    categoryoptions,
    title,
    summary,
    description,
    demo,
    siteage,
    profit,
    margin,
    views,
    startbid,
    price,
    status,
    duration,
    handleChange,
    clearValues,
    createListing,
    image1,
    editlisting,
  } = useAppContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title || !summary || !description) {
      displayAlert()
      return
    }
    if (isEditing) {
      editlisting()

      return
    }
    createListing()

    setTimeout(() => {
      navigate('/uploadattachments')
    }, 3000)
  }
  const listingInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    if (name === 'image1') {
      handleChange({ name, value: e.target.files[0] })
    } else {
      handleChange({ name, value })
    }
  }

  return (
    <>
      <form className='m-3'>
        <h3 className='head3'>
          {isEditing ? 'Edit your listing' : 'Create your listing.'}
        </h3>
        {showAlert && <Alert />}
        <Row className='justify-content-md-center'>
          <Col className='p-5' xs={12} md={6}>
            <label className='form-label'>Select category</label>
            <select
              className='form-input'
              name='category'
              value={category}
              onChange={listingInput}
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
              <br />
              <Form.Label> Please select atleast one image</Form.Label>
              <Form.Control
                type='file'
                required={isEditing ? false : true}
                name='image1'
                onChange={listingInput}
              />
            </div>
            {/* <input className='form-input' type='file' /> */}

            <div className='form-row'>
              <label className='form-label'>Title</label>

              <input
                className='form-control'
                type='text'
                name='title'
                value={title}
                placeholder='title'
                onChange={listingInput}
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
                onChange={listingInput}
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
                onChange={listingInput}
              />
            </div>
            <div className='form-row'>
              <label className='form-label'>Video demo</label>

              <input
                className='form-control'
                type='text'
                name='demo'
                value={demo}
                placeholder=' Add a video link.'
                onChange={listingInput}
              />
            </div>
          </Col>
          <Col className='p-5' xs={12} md={6}>
            <div className='form-row'>
              <label className='form-label'>Site age</label>

              <input
                className='form-control'
                type='text'
                name='siteage'
                value={siteage}
                placeholder='Site Age'
                onChange={listingInput}
              />
            </div>
            <div className='form-row'>
              <label className='form-label'>Monthly profit</label>

              <input
                className='form-control'
                type='text'
                name='profit'
                value={profit}
                placeholder='Monthly Profit'
                onChange={listingInput}
              />
            </div>
            <div className='form-row'>
              <label className='form-label'>Profit margin</label>

              <input
                className='form-control'
                type='text'
                name='margin'
                value={margin}
                placeholder='Profit Margin'
                onChange={listingInput}
              />
            </div>
            <div className='form-row'>
              <label className='form-label'>Number of views</label>

              <input
                className='form-control'
                type='text'
                name='views'
                value={views}
                placeholder='Number of views'
                onChange={listingInput}
              />
            </div>
            <div className='form-row'>
              <label className='form-label' htmlFor='startbid'>
                Start bid
              </label>

              <input
                className='form-control'
                type='text'
                name='startbid'
                value={startbid}
                onChange={listingInput}
                placeholder='PKR'
              />
            </div>
            <div>
              <div className='form-row'>
                <label className='form-label' htmlFor='endbid'>
                  Base price
                </label>

                <input
                  className='form-control'
                  type='text'
                  name='price'
                  value={price}
                  onChange={listingInput}
                  placeholder='PKR'
                />
              </div>
              <Form.Check
                aria-label='option 1'
                name='status'
                value={true}
                required
                onChange={listingInput}
              />
            </div>
            <div className='form-row'>
              <label className='form-label' htmlFor='duration'>
                Auction duration(days)
              </label>

              <input
                className='form-control'
                type='text'
                name='duration'
                value={duration}
                onChange={listingInput}
                placeholder='Days'
              />
            </div>
            <div className='form-row'></div>
            <div className='text-center'>
              <button
                type='button'
                className='btn btn-outline-warning'
                onClick={handleSubmit}
                disabled={isLoading}
              >
                Upload Listing
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
      {/* </Wrapper> */}
    </>
  )
}

export default Auctionform

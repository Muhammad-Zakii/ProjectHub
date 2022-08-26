import React from 'react'
import '../../index.css'

import { Row, Col } from 'react-bootstrap'
import { useAppContext } from '../../context/appcontext'
import Alert from '../../components/alert'
import Wrapper from '../../wrappers'

const Listingform = () => {
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
    siteage,
    profit,
    margin,
    fixedprice,
    handleChange,
    clearValues,
    createListing,
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
  }
  const listingInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
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

              {/* <option selected value='--Please Select Category--'>
                --Choose Category--
              </option>
              <option value='Websites'>Websites</option>
              <option value='Andriod apps'>Andriod apps</option>
              <option value=' iOS apps'>iOS apps</option>
              <option value='Domains'>Domains</option>
              <option value='Businesses'>Businesses</option> */}
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
                onChange={listingInput}
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
                onChange={listingInput}
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
                onChange={listingInput}
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
                onChange={listingInput}
                placeholder='PKR'
              />
            </div>
            <div className='form-row'>
              {/* <p className='form-label'>
                How would you like to sell? Click on the button to select the
                option.
              </p> */}
              {/* <Pricing /> */}
            </div>
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

export default Listingform

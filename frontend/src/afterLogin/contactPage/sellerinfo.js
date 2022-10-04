import React from 'react'

import { useEffect, useState } from 'react'

import '../../index.css'
import { Card, Row, Col, Button } from 'react-bootstrap'

import { useAppContext } from '../../context/appcontext'
import { FaUser, FaLocationArrow, FaPhone, FaAt } from 'react-icons/fa'

const SellerInfo = () => {
  const { listing, user, users, getAllBid, getUsersByAdmin } = useAppContext()
  console.log(listing)

  useEffect(() => {
    getUsersByAdmin()
  }, [])

  return (
    <>
      {users.map((us) => {
        if (us._id === listing.createdBy) {
          return (
            <div className='about-seller'>
              <Col className='justify-content-md-center mt-5'>
                <h4>About the Seller</h4>

                <div className='card-body'>
                  <div className='avatar'>
                    <img
                      src={`http://localhost:7000/static/profiles/${us.img}`}
                      className='card-img-top'
                      alt=''
                    />
                  </div>
                  <h5 className='card-title'>
                    <FaUser />
                    Name: {us.name}
                  </h5>
                  <p className='card-text'>
                    <FaLocationArrow />
                    Location: {us.location}
                    <br />
                    <p className='phone'>
                      <FaPhone />
                      PhoneNo: {us.phoneNo}
                    </p>
                  </p>

                  <p className='phone'>
                    <FaAt />
                    Email: {us.email}
                  </p>
                </div>
              </Col>
              <br />
            </div>
          )
        }
      })}
    </>
  )
}

export default SellerInfo

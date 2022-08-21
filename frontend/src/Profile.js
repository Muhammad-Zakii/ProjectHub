import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from './context/appcontext'
import { FaUser, FaSignOutAlt, FaRegSun, FaAddressBook } from 'react-icons/fa'

const Profile = () => {
  const { user, logoutUser } = useAppContext()
  const [showDropDown, setShowDropDown] = useState(false)
  return (
    <div className='profile'>
      <div className='profile-name'>{user?.name}</div>
      <div>
        <img
          onClick={() => setShowDropDown((prev) => !prev)}
          className='profile-img'
          src='https://www.jing.fm/clipimg/full/398-3981675_avatar-for-login-form.png'
          alt=''
        />
        <div
          style={{ display: showDropDown ? 'flex' : 'none' }}
          className='profile-dropdown'
        >
          <Link to='/updateUser' className='menu'>
            {' '}
            <FaUser />
            Profile
          </Link>

          <Link to='/mylistings' className='menu'>
            {' '}
            <FaAddressBook />
            My Listings
          </Link>

          <a className='menu'>
            <FaRegSun />
            Settings
          </a>
          <a className='menu' onClick={logoutUser}>
            <FaSignOutAlt />
            Logout
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile

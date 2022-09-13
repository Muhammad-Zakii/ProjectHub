import React from 'react'
import { useState } from 'react'
import Alert from '../../components/alert'
import FormRow from '../../formrow'
import Wrapper from '../../wrappers'
import { useAppContext } from '../../context/appcontext'
import NavBarr from '../navbars/navbar'
import Footer from '../footer/footer2'

const ProfilePage = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext()
  const [name, setName] = useState(user?.name)
  const [phoneNo, setPhoneNo] = useState(user?.phoneNo)
  const [location, setLocation] = useState(user?.location)
  const [email, setEmail] = useState(user?.email)
  const [img, setImg] = useState(user?.img)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !phoneNo || !location || !email || !img) {
      // test and remove temporary
      displayAlert()
      return
    }

    updateUser({ name, phoneNo, location, email, img })
    console.log(updateUser)
  }
  return (
    <>
      <NavBarr />
      <Wrapper>
        <form className='form2' onSubmit={handleSubmit}>
          <h3>Profile Page </h3>
          {showAlert && <Alert />}

          {/* name */}
          <div className='form-center'>
            <FormRow
              type='text'
              name='name'
              value={name}
              handleChange={(e) => setName(e.target.value)}
            />
            <FormRow
              labelText='Phone No'
              type='tel'
              name='phoneNo'
              value={phoneNo}
              handleChange={(e) => setPhoneNo(e.target.value)}
            />
            <FormRow
              type='text'
              name='location'
              value={location}
              handleChange={(e) => setLocation(e.target.value)}
            />
            <FormRow
              type='email'
              name='email'
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
            />
            <FormRow
              type='file'
              name='img'
              labelText='Image'
              handleChange={(e) => setImg(e.target.files[0])}
            />
            <button
              className='btn btn-block'
              type='submit'
              disabled={isLoading}
            >
              {isLoading ? 'Please Wait...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </Wrapper>
      <Footer />
    </>
  )
}

export default ProfilePage

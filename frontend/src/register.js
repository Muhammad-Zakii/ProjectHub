import { useState, useEffect } from 'react'
import Alert from './components/alert'
import FormRow from './formrow'
import Wrapper from './wrappers'
import { useAppContext } from './context/appcontext'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import './index.css'
const initialState = {
  name: '',
  phoneNo: '',
  location: '',
  img: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialState)
  const { user, isLoading, showAlert, displayAlert, setupUser, logoutUser } =
    useAppContext()

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }
  // const handleChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value })
  // }
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    if (name === 'img') {
      {
        setValues((prev) => ({ ...prev, [name]: e.target.files[0] }))
      }
    } else {
      {
        setValues((prev) => ({ ...prev, [name]: value }))
      }
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, phoneNo, location, email, password, isMember, img } = values
    if (!email || !password || (!isMember && !name && !phoneNo && !location)) {
      displayAlert()
      return
    }
    const currentUser = {
      name,
      phoneNo,
      location,
      img,
      email,
      password,
    }
    console.log(img)
    if (isMember) {
      setupUser({
        currentUser: { email, password },
        endPoint: 'login',
        alertText: 'Login Successful! Redirecting...',
      })
    } else {
      const formData = new FormData()

      for (const key in currentUser) {
        if (Object.hasOwnProperty.call(currentUser, key)) {
          formData.append(key, currentUser[key])
        }
      }
      setupUser({
        currentUser: formData,
        endPoint: 'register',
        alertText: 'User Created! Redirecting...',
      })
    }
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/afterlogin')
      }, 3000)
    }
  }, [user, navigate])

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <h3>ProjectHub</h3>
        <br />
        <h3>{values.isMember ? 'Welcome back' : 'Create your account'}</h3>
        <br />
        {showAlert && <Alert />}
        {/* name input */}
        {!values.isMember && (
          <>
            <FormRow
              type='text'
              name='name'
              value={values.name}
              handleChange={handleChange}
              placeholder='Full Name'
            />
            <FormRow
              type='tel'
              name='phoneNo'
              value={values.phoneNo}
              handleChange={handleChange}
              placeholder='+92'
            />
            <FormRow
              type='text'
              name='location'
              value={values.location}
              handleChange={handleChange}
              placeholder='City'
            />
            <Form.Label> Please select atleast one image</Form.Label>
            {/* <Form.Control
              type='file'
              required
              name='img'
              handleChange={handleChange}
            /> */}
            <FormRow type='file' name='img' handleChange={handleChange} />
          </>
        )}

        {/* email input */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
          placeholder='Email'
        />

        {/* password input */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
          placeholder='Password'
        />
        <div className='d-grid gap-2'>
          <button type='submit' className='btn btn-block' disabled={isLoading}>
            Submit
          </button>
        </div>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register

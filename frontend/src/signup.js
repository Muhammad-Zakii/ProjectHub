import { useState, useEffect } from 'react'
import Wrapper from './wrappers'
import { Link } from 'react-router-dom'
import './index.css'
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import { useAppContext } from './context/appcontext'
import Alert from './components/alert'

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  city: '',
  phoneno: '',
  password: '',
  isMember: false,
}

function Register() {
  const [values, setValues] = useState(initialState)
  const { isLoading, showAlert, displayAlert, registerUser, loginUser } =
    useAppContext()

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  // global context and useNavigate later
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { firstname, lastname, email, city, phoneno, password, isMember } =
      values
    if (!firstname || !lastname || !email || !city || !phoneno || !password) {
      displayAlert()
      return
    }
    const currentUser = { firstname, lastname, email, city, phoneno, password }
    if (isMember) {
      loginUser(currentUser)
    } else {
      registerUser(currentUser)
    }
  }
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <h3>ProjectHub</h3>
        <h5 style={{ padding: '20px', textAlign: 'center' }}>
          Create your account
        </h5>
        {showAlert && <Alert />}
        {/* name field */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            FirstName
          </label>

          <input
            type='text'
            value={values.firstname}
            name='firstname'
            onChange={handleChange}
            className='form-input'
            placeholder='First Name'
          />
        </div>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            LastName
          </label>

          <input
            type='text'
            value={values.lastname}
            name='lastname'
            onChange={handleChange}
            className='form-input'
            placeholder='Last Name'
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>

          <input
            type='text'
            value={values.email}
            name='email'
            onChange={handleChange}
            className='form-input'
            placeholder='Email'
          />
        </div>
        <div className='form-row'>
          <label htmlFor='city' className='form-label'>
            City
          </label>

          <input
            type='text'
            value={values.city}
            name='city'
            onChange={handleChange}
            className='form-input'
            // placeholder='Karachi'
          />
        </div>
        <br />

        <div className='form-row'>
          <label htmlFor='phoneNo' className='form-label'>
            Phone No
          </label>

          <input
            type='text'
            value={values.phoneno}
            name='phoneno'
            onChange={handleChange}
            className='form-input'
            placeholder='+92'
          />
        </div>
        <div>
          <Form.Label htmlFor='inputPassword5'></Form.Label>
          <div className='form-row'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>

            <input
              type='password'
              value={values.password}
              name='password'
              onChange={handleChange}
              className='form-input'
              placeholder='Password'
            />
          </div>
          <Form.Text id='passwordHelpBlock' muted>
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </Form.Text>
        </div>
        <Button type='submit' variant='success' disabled={isLoading}>
          Submit
        </Button>
        <p>
          Already have an account?<Link to='/login'>Login here</Link>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register
// <Wrapper className='full-page'>
//   <form className='form'>
//     <FormRow
//       type='textArea'
//       name='full name'
//       // value={values.name}
//       // handleChange={handleChange}
//       placeholder='Full Name'
//     />

//     <FormRow
//       type='text'
//       name='PhoneNo'
//       // value={values.phoneNo}
//       // handleChange={handleChange}
//       placeholder='+92'
//     />

//     <FormRow
//       type='text'
//       name='location'
//       // value={values.location}
//       // handleChange={handleChange}
//       placeholder='City'
//     />

//     {/* email input */}
//     <FormRow
//       type='email'
//       name='email'
//       // value={values.email}
//       // handleChange={handleChange}
//       placeholder='Email'
//     />

//     {/* password input */}
//     <FormRow
//       type='password'
//       name='password'
//       // value={values.password}
//       // handleChange={handleChange}
//       placeholder='Password'
//     />
//     <div className='d-grid gap-2'>
//       <button type='submit' className='btn btn-block'>
//         Submit
//       </button>
//     </div>
//   </form>
// </Wrapper>

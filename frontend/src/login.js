import { useState, useEffect } from 'react'
import Wrapper from './wrappers'
import { Link } from 'react-router-dom'
import './index.css'
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import Alert from './components/alert'
import { useAppContext } from './context/appcontext'
import { useNavigate } from 'react-router-dom'

const initialState = {
  email: '',
  password: '',
  isMember: true,
}

export default function Login() {
  const navigate = useNavigate()
  const [val, setVal] = useState(initialState)
  const { user, showAlert, displayAlert, loginUser, registerUser } =
    useAppContext()

  const handleChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value })
  }

  console.log(loginUser)

  const toggleMember = () => {
    setVal({ ...val, isMember: !val.isMember })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const { email, password, isMember } = val
    const currentUser = { email, password }
    if (isMember) {
      loginUser(currentUser)
      if (loginUser) {
        setTimeout(() => {
          navigate('/afterlogin')
        }, 3000)
      }
    } else {
      registerUser(currentUser)
    }

    if (!email || !password) {
      displayAlert()
      return
    }
  }

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <h3>ProjectHub</h3>
        <h5 style={{ padding: '20px', textAlign: 'center' }}>Welcome Back</h5>
        {showAlert && <Alert />}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='text'
            value={val.email}
            name='email'
            onChange={handleChange}
            className='form-input'
            placeholder='Email'
          />
        </div>
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            value={val.password}
            name='password'
            onChange={handleChange}
            className='form-input'
            placeholder='Password'
          />
        </div>
        <br />
        <Link to=''>Forget my password</Link>
        <div className='d-grid gap-2'>
          <Button variant='primary' size='lg' onClick={onSubmit}>
            Sign in
          </Button>
          <p>
            Don't have an account?<Link to='/signup'>Sign up</Link>
          </p>
        </div>
      </form>
    </Wrapper>
  )
}

// import React, { useReducer, useContext } from 'react'
// import reducer from '../reducer'
// import axios from 'axios'
// import {
//   DISPLAY_ALERT,
//   CLEAR_ALERT,
//   REGISTER_USER_BEGIN,
//   REGISTER_USER_SUCCESS,
//   REGISTER_USER_ERROR,
//   LOGIN_USER_BEGIN,
//   LOGIN_USER_SUCCESS,
//   LOGIN_USER_ERROR,
// } from './action'

// const user = localStorage.getItem('user')
// // const token = localStorage.getItem('token')
// // const city = localStorage.getItem('city')
// export const initialState = {
//   isLoading: false,
//   showAlert: false,
//   alertText: '',
//   alertType: '',
//   user: user ? JSON.parse(user) : null,
//   // token: token,
//   // city: city || '',
// }
// const AppContext = React.createContext()
// const AppProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState)

//   const displayAlert = () => {
//     dispatch({
//       type: DISPLAY_ALERT,
//     })
//     clearAlert()
//   }

//   const clearAlert = () => {
//     setTimeout(() => {
//       dispatch({
//         type: CLEAR_ALERT,
//       })
//     }, 3000)
//   }
//   const addUsertolocatStorage = ({ user, token, city }) => {
//     localStorage.setItem('user', JSON.stringify(user))
//     // localStorage.setItem('token', token)
//     // localStorage.setItem('city', city)
//   }
//   const removerUserfromlocalStorage = () => {
//     localStorage.removeItem('user')
//     // localStorage.removeItem('token')
//     // localStorage.removeItem('city')
//   }
//   const registerUser = async (currentUser) => {
//     dispatch({ type: REGISTER_USER_BEGIN })
//     try {
//       const response = await axios.post('api/v1/auth/register', currentUser)

//       const { user, token, city } = response.data
//       dispatch({
//         type: REGISTER_USER_SUCCESS,
//         payload: {
//           user,
//           token,
//           city,
//         },
//       })
//       addUsertolocatStorage({
//         user,
//         token,
//         city,
//       })
//     } catch (error) {
//       dispatch({
//         type: REGISTER_USER_ERROR,
//         payload: { msg: error.response.data.msg },
//       })
//     }
//     clearAlert()
//   }
//   const loginUser = async (currentUser) => {
//     dispatch({ type: LOGIN_USER_BEGIN })
//     try {
//       const { data } = await axios.post('api/v1/auth/login', currentUser)

//       const { user, token, city } = data
//       dispatch({
//         type: LOGIN_USER_SUCCESS,
//         payload: {
//           user,
//           token,
//           city,
//         },
//       })
//     } catch (error) {
//       dispatch({
//         type: LOGIN_USER_ERROR,
//         payload: { msg: error.response.data.msg },
//       })
//     }
//     clearAlert()
//   }

//   return (
//     <AppContext.Provider
//       value={{
//         ...state,
//         displayAlert,
//         registerUser,
//         loginUser,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   )
// }
// // make sure use
// export const useAppContext = () => {
//   return useContext(AppContext)
// }

// export { AppProvider }

//______________________________________________________________________________________
import React, { useReducer, useContext } from 'react'

import reducer from '../reducer'
import axios from 'axios'
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from './action'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
// const userLocation = localStorage.getItem('location')

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  // userLocation: userLocation || '',
  //Listing initial values starts from here.
  categoryoptions: [
    '--Please Select Category--',
    'Websites',
    'Andriod apps',
    'iOS apps',
    'Domains',
    'Businesses',
  ],
  category: '--Please Select Category--',
  title: '',
  summary: '',
  description: '',
  siteage: '-',
  profit: '-',
  margin: '-',
  fixedprice: 0,
  startbid: 0,
  reserveprice: 0,
  duration: 30,
  isAunction: true,
}
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const authFetch = axios.create({
    baseURL: '/api/v1',
  })

  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common['Authorization'] = `Bearer ${state.token}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  // response interceptor
  authFetch.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser()
      }
      return Promise.reject(error)
    }
  )

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
    clearAlert()
  }

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 3000)
  }

  const addUserToLocalStorage = ({ user, token }) => {
    //location
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    // localStorage.setItem('location', location)
  }

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    // localStorage.removeItem('location')
  }

  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN })
    try {
      const { data } = await axios.post(`/api/v1/auth/${endPoint}`, currentUser)

      const { user, token } = data //location
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, alertText }, //location
      })
      addUserToLocalStorage({ user, token }) //location
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }
  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER })
    removeUserFromLocalStorage()
  }
  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN })
    try {
      const { data } = await authFetch.patch('/auth/updateUser', currentUser)

      const { user, token } = data
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, token }, //location
      })
      addUserToLocalStorage({ user, token })
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        })
      }
    }
    clearAlert()
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        setupUser,
        logoutUser,
        updateUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }

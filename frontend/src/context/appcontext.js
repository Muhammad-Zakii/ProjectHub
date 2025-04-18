import React, { useReducer, useContext } from 'react'

import reducer from '../reducer'

import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_LISTING_BEGIN,
  CREATE_LISTING_SUCCESS,
  CREATE_LISTING_ERROR,
  GET_LISTING_BEGIN,
  GET_LISTING_SUCCESS,
  SET_EDIT_LISTING,
  SET_FILTER_CATEGORY,
  DELETE_LISTING_BEGIN,
  EDIT_LISTING_BEGIN,
  EDIT_LISTING_SUCCESS,
  EDIT_LISTING_ERROR,
  CLEAR_FILTERS,
  CHANGE_PAGE,
  GET_USER_BY_ADMIN_BEGAN,
  GET_USER_BY_ADMIN_SUCCESS,
  // SHOW_ALERT_ATTACHMENTS,
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

  //Listing initial values starts from here.
  isEditing: false,
  editCategoryId: '',
  categoryoptions: [
    '--Please Select Category--',
    'Websites',
    'Andriodapps',
    'iOSapps',
    'Domains',
    'Projects',
    'Businesses',
  ],
  categoryoptionss: [
    'Websites',
    'Andriodapps',
    'iOSapps',
    'Domains',
    'Projects',
    'Businesses',
  ],

  category: '--Please Select Category--',
  image1: '',
  image2: '',
  title: '',
  summary: '',
  description: '',
  demo: '',
  siteage: '-',
  profit: '-',
  margin: '-',
  views: '-',
  status: false,
  startbid: 0,
  price: 0,
  duration: 0,
  // isAunction: true,
  listing: [],
  totalListing: 0,
  numOfPages: 1,
  page: 1,
  search: '',
  searchCategory: 'All',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
  users: [],
  totalRevenue: 0,
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
      const { data } = await authFetch.post(`/auth/${endPoint}`, currentUser)
      console.log(data)

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
      const formData = new FormData()

      for (const key in currentUser) {
        if (Object.hasOwnProperty.call(currentUser, key)) {
          formData.append(key, currentUser[key])
        }
      }

      const { data } = await authFetch.patch('/auth/updateUser', formData)

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
  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } })
  }
  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES })
  }
  const createListing = async () => {
    dispatch({ type: CREATE_LISTING_BEGIN })
    try {
      const formData = new FormData()

      for (const key in state) {
        if (Object.hasOwnProperty.call(state, key)) {
          formData.append(key, state[key])
        }
      }

      await authFetch.post('/listing', formData)
      dispatch({ type: CREATE_LISTING_SUCCESS })
      clearValues()
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: CREATE_LISTING_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }
  const getAllListing = async () => {
    const url = `/listing`
    dispatch({ type: GET_LISTING_BEGIN })
    try {
      const { data } = await authFetch.get(url)
      const { listing, totalListing, numOfPages } = data
      dispatch({
        type: GET_LISTING_SUCCESS,
        payload: {
          listing,
          totalListing,
          numOfPages,
        },
      })
    } catch (error) {
      console.log(error.response)
    }
    clearAlert()
  }
  const getGlobalListing = async () => {
    const { page, search, sort, searchCategory } = state
    let url = `/listing/getgloballisting?page=${page}&searchCategory=${searchCategory}&sort=${sort}`
    if (search) {
      url = url + `&search=${search}`
    }
    dispatch({ type: GET_LISTING_BEGIN })
    try {
      const { data } = await authFetch.get(url)
      const { listing, totalListing, numOfPages } = data
      dispatch({
        type: GET_LISTING_SUCCESS,
        payload: {
          listing,

          totalListing,
          numOfPages,
        },
      })
    } catch (error) {
      console.log(error.response)
    }
    clearAlert()
  }
  const seteditlisting = (id) => {
    dispatch({ type: SET_EDIT_LISTING, payload: { id } })
  }
  const editlisting = async () => {
    dispatch({ type: EDIT_LISTING_BEGIN })

    try {
      const formData = new FormData()

      for (const key in state) {
        if (Object.hasOwnProperty.call(state, key)) {
          formData.append(key, state[key])
        }
      }
      await authFetch.patch(`/listing/${state.editCategoryId}`, formData)
      dispatch({ type: EDIT_LISTING_SUCCESS })
      dispatch({ type: CLEAR_VALUES })
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: EDIT_LISTING_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }
  const deletelisting = async (listingId) => {
    dispatch({ type: DELETE_LISTING_BEGIN })
    try {
      await authFetch.delete(`/listing/${listingId}`)
      getAllListing()
    } catch (error) {
      logoutUser()
    }
  }

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  }

  const createBid = async (bid) => {
    try {
      // ;<ToastContainer />
      const { data } = await authFetch.post(`/bid`, bid)
      if (data) {
        toast.success('Your bid has been placed successfully!', {
          position: toast.POSITION.TOP_RIGHT,
        })
      } else {
        toast.error('oops something went wrong!', {
          position: toast.POSITION.TOP_RIGHT,
        })
      }
    } catch (error) {
      alert(error.message)
    }
  }

  const getAllBid = async (listingId) => {
    try {
      const { data } = await authFetch.get(`/bid/${listingId}`)
      if (data) {
        return data
      } else {
        console.log('Not Sended Successfully')
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  const changePage = (page) => {
    dispatch({ type: CHANGE_PAGE, payload: { page } })
  }
  const getUsersByAdmin = async () => {
    dispatch({ type: GET_USER_BY_ADMIN_BEGAN })
    try {
      const { data } = await axios.get(
        'http://localhost:7000/admin/adminGetUsers'
      )
      dispatch({
        type: GET_USER_BY_ADMIN_SUCCESS,
        payload: {
          users: data.users,
          // totalUsers: data.totalUsers,
        },
      })
    } catch (error) {
      console.log(error.response)
    }
    clearAlert()
  }
  // const showAlert = () => {
  //   dispatch({ type: SHOW_ALERT_ATTACHMENTS })
  // }

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        setupUser,
        logoutUser,
        updateUser,
        handleChange,
        clearValues,
        createListing,
        getAllListing,
        seteditlisting,
        deletelisting,
        editlisting,
        getGlobalListing,
        clearFilters,
        createBid,
        getAllBid,
        changePage,
        getUsersByAdmin,
        // showAlert,

        // filteritems,
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

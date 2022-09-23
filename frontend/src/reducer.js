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
} from './context/action'

import { initialState } from './context/appcontext'

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please provide all values!',
    }
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    }
  }

  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: true,
      token: action.payload.token,
      user: action.payload.user,
      // userLocation: action.payload.location,
      // jobLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: action.payload.alertText,
    }
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      userLocation: '',
    }
  }
  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      // userLocation: action.payload.location,
      // jobLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: 'User Profile Updated!',
    }
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      page: 1,
      [action.payload.name]: action.payload.value,
    }
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
      editCategoryId: '',
      category: '--Please Select Category--',
      image1: '',
      title: '',
      summary: '',
      description: '',
      siteage: '-',
      profit: '-',
      margin: '-',
      price: 0,
      startbid: 0,
      status: false,
      duration: 0,
    }
    return {
      ...state,
      ...initialState,
    }
  }
  if (action.type === CREATE_LISTING_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === CREATE_LISTING_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Listing has been created',
    }
  }
  if (action.type === CREATE_LISTING_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === GET_LISTING_BEGIN) {
    return { ...state, isLoading: true, showAlert: false }
  }
  if (action.type === GET_LISTING_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      listing: action.payload.listing,
      totalListing: action.payload.totalListing,
      numOfPages: action.payload.numOfPages,
    }
  }
  if (action.type === SET_EDIT_LISTING) {
    const list = state.listing.find((list) => list._id === action.payload.id)
    const {
      _id,
      category,
      image1,
      title,
      summary,
      description,
      siteage,
      profit,
      margin,
      price,
      startbid,
      status,
      duration,
    } = list
    return {
      ...state,
      isEditing: true,
      editCategoryId: _id,
      category,
      image1,
      title,
      summary,
      description,
      siteage,
      profit,
      margin,
      price,
      startbid,
      status,
      duration,
    }
  }
  if (action.type === DELETE_LISTING_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === EDIT_LISTING_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }
  if (action.type === EDIT_LISTING_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Listing has been updated successfully.',
    }
  }
  if (action.type === EDIT_LISTING_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      search: '',
      searchCategory: 'all',
      sort: 'latest',
    }
  }
  if (action.type === CHANGE_PAGE) {
    return { ...state, page: action.payload.page }
  }
}

export default reducer

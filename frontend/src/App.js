import './App.css'

import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { datas } from './data'
// import { Component } from 'react'
import Howtosell from './howtosell'
import Landing from './landing'
// import Login from './login'
// import SignUp from './signup'
import Register from './register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from './error'
import Sellnow from './afterLogin/createlisting/sellnow'
import Projects from './viewallprojects'
// import Alert from './components/alert'
import Afterlogin from './afterLogin/afterlogin'
import ProtectedRoute from './afterLogin/protectedRoutes/protectedRoute'
import Viewallproj from './afterLogin/viewProjects/viewallproj'
import Viewlisting from './afterLogin/listings/viewlisting'
import Viewallprojectlisting from './afterLogin/listings/allprojectlisting'
import ProfilePage from './afterLogin/ProfilePage/profilePage'
import ContactPage from './afterLogin/contactPage/contactPage'
import BidPage from './afterLogin/bidPage/bidPage'

function App() {
  // const [data, setData] = React.useState(datas)

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path='/howtosell' element={<Howtosell />} />
        <Route path='/register' element={<Register />} />
        {/* <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} /> */}
        <Route path='*' element={<Error />} />
        <Route
          path='/sellnow'
          element={
            <ProtectedRoute>
              <Sellnow />
            </ProtectedRoute>
          }
        />
        <Route path='/viewprojects' element={<Projects />} />

        <Route
          path='/afterlogin'
          element={
            <ProtectedRoute>
              <Afterlogin />
            </ProtectedRoute>
          }
        />
        <Route
          path='/viewallproj'
          element={
            <ProtectedRoute>
              <Viewallproj />
            </ProtectedRoute>
          }
        />
        <Route
          path='/viewlisting/:id'
          element={
            <ProtectedRoute>
              <Viewlisting />
            </ProtectedRoute>
          }
        />
        <Route
          path='/viewallprojectlisting/:id'
          element={
            <ProtectedRoute>
              <Viewallprojectlisting />
            </ProtectedRoute>
          }
        />
        <Route
          path='/updateUser'
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/ContactPage'
          element={
            <ProtectedRoute>
              <ContactPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/biddingPage'
          element={
            <ProtectedRoute>
              <BidPage />
            </ProtectedRoute>
          }
        />
        {/* Dummy will be removed  */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

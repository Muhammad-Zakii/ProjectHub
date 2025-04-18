import './App.css'

import Howtosell from './howtosell'
import Landing from './landing'

import Register from './register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from './error'
import Sellnow from './afterLogin/createlisting/sellnow'
import Projects from './viewallprojects'

import Afterlogin from './afterLogin/afterlogin'
import ProtectedRoute from './afterLogin/protectedRoutes/protectedRoute'
import Viewallproj from './afterLogin/viewProjects/viewallproj'
import Viewlisting from './afterLogin/listings/viewlisting'
import Viewallprojectlisting from './afterLogin/listings/allprojectlisting'
import ProfilePage from './afterLogin/ProfilePage/profilePage'
import ContactPage from './afterLogin/contactPage/contactPage'
import BidPage from './afterLogin/bidPage/bidPage'
import OptionForSelling from './afterLogin/optionForSelling/optionForSelling'
import SellByAuction from './afterLogin/createlisting/sellbyauction'
import MyListings from './afterLogin/mylistings/mylistings'

import ViewListingBySeller from './afterLogin/mylistings/viewlistingbyseller'
import Attachments from './afterLogin/attachments/attachments'
import Navbar from './afterLogin/navbars/navbar'
import Footer from './footer'
import Uploadattachments from './afterLogin/attachments/uploadattachments'

function App() {
  // const [data, setData] = React.useState(datas)

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path='/howtosell' element={<Howtosell />} />
        <Route path='/register' element={<Register />} />

        <Route path='*' element={<Error />} />
        <Route
          path='chooseOption/' //sellnow route name
          element={
            <ProtectedRoute>
              <OptionForSelling /> {/* Sellnow // Component Name */}
            </ProtectedRoute>
          }
        />
        <Route
          path='/sellByPrice' // route name
          element={
            <ProtectedRoute>
              <Sellnow /> {/* Sellnow // Component Name */}
            </ProtectedRoute>
          }
        />
        <Route
          path='/sellByAuction' // route name
          element={
            <ProtectedRoute>
              <SellByAuction /> {/* Sellnow // Component Name */}
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
          path='/viewlisting/:_id'
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
          path='/ContactPage/:listingId'
          element={
            <ProtectedRoute>
              <ContactPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/biddingPage/:listingId'
          element={
            <ProtectedRoute>
              <BidPage />
            </ProtectedRoute>
          }
        />
        {/* My listings route */}
        <Route
          path='/mylistings'
          element={
            <ProtectedRoute>
              <MyListings />
            </ProtectedRoute>
          }
        />

        {/* View listing by seller */}
        <Route
          path='/viewlistingbyseller/:_id'
          element={
            <ProtectedRoute>
              <ViewListingBySeller />
            </ProtectedRoute>
          }
        />

        {/* Attachments after payment route */}

        <Route
          path='/attachments/:_id'
          element={
            <ProtectedRoute>
              <Navbar />
              <Attachments />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path='/uploadattachments'
          element={
            <ProtectedRoute>
              <Navbar />
              <Uploadattachments />
              <Footer />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

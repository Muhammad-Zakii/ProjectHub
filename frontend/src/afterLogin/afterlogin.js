import React from 'react'
import Header from '../header'
import NavBarr from './navbars/navbar'
import Landingpageafterlogin from './viewProjects/landingpageafterlogin'
import Footer from '../footer'
const afterlogin = () => {
  return (
    <div>
      <NavBarr />
      <Header />
      <Landingpageafterlogin />
      <Footer />
    </div>
  )
}

export default afterlogin

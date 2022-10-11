import React from 'react'
import Header from './header/header'
import NavBarr from './navbars/navbar'
import Landingpageafterlogin from './viewProjects/landingpageafterlogin'
import Footer from '../footer'
import Linksnavbar from './navbars/linksnavbar'
const afterlogin = () => {
  return (
    <div>
      <NavBarr />
      {/* <Linksnavbar /> */}
      <Header />
      <Landingpageafterlogin />
      <Footer />
    </div>
  )
}

export default afterlogin

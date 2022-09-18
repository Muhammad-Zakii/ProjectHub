import React from 'react'
import Nave from './navbar'
import Head from './header'
import Langingpagebefore from './landingpagebeforelogin'
import Footer from './footer'
import linksnavbar from './afterLogin/navbars/linksnavbar'
export default function landing() {
  return (
    <div style={{ backgroundColor: '#F6F9FA' }}>
      <Nave />
      {/* <linksnavbar /> */}
      <Head />
      <Langingpagebefore />
      <Footer />
    </div>
  )
}

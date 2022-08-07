import React from 'react'
import Nave from './navbar'
import Head from './header'
import Langingpagebefore from './landingpagebeforelogin'
import Footer from './footer'
export default function landing() {
  return (
    <div style={{ backgroundColor: '#F6F9FA' }}>
      <Nave />
      <Head />
      <Langingpagebefore />
      <Footer />
    </div>
  )
}

import React from 'react'
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from 'cdbreact'
const Footer = () => {
  return (
    <CDBFooter style={{ backgroundColor: ' #141526' }} className='shadow'>
      <CDBBox
        display='flex'
        justifyContent='between'
        alignItems='center'
        className='  mx-auto py-5 flex-wrap'
        style={{ width: '90%' }}
      >
        <CDBBox display='flex' alignItems='center'></CDBBox>
        <CDBBox color='white'>
          <small className='ml-2'>
            &copy; ProjectHub, 2022. All rights reserved.
          </small>
        </CDBBox>
        <CDBBox display='flex'>
          <CDBBtn flat color='dark' className='p-2'>
            <CDBIcon fab icon='facebook-f' />
          </CDBBtn>
          <CDBBtn flat color='dark' className='mx-3 p-2'>
            <CDBIcon fab icon='twitter' />
          </CDBBtn>
          <CDBBtn flat color='dark' className='p-2'>
            <CDBIcon fab icon='instagram' />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  )
}
export default Footer

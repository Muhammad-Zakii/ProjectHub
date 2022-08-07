import React from 'react'
import { Box, Container, Row, Column, FooterLink, Heading } from './footerstyle'

const Footer = () => {
  return (
    <Box>
      {/* <h1 style={{ color: 'white', textAlign: 'center', marginTop: '-50px' }}>
        ProjectHub
      </h1> */}
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href='#'>About ProjectHub</FooterLink>
            <FooterLink href='#'>Privacy Policy</FooterLink>
            <FooterLink href='#'>Terms and Conditions</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href='#'>Projects</FooterLink>
            <FooterLink href='#'>iOS Applications</FooterLink>
            <FooterLink href='#'>Andriod Applications</FooterLink>
            <FooterLink href='#'>Websites</FooterLink>
            <FooterLink href='#'>Businesses</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href='#'>projectHub@gmail.com</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href='#'>
              <i className='fab fa-facebook-f'>
                <span style={{ marginLeft: '10px' }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href='#'>
              <i className='fab fa-instagram'>
                <span style={{ marginLeft: '10px' }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href='#'>
              <i className='fab fa-twitter'>
                <span style={{ marginLeft: '10px' }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href='#'>
              <i className='fab fa-youtube'>
                <span style={{ marginLeft: '10px' }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  )
}
export default Footer

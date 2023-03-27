import React from 'react'
import Footerlinks from '../FooterLinks/Footerlinks'
import Newsletter from '../NewsletterSection/Newsletter'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer mt-auto'>
      <Footerlinks />
      <Newsletter />
    </div>
  )
}
export default Footer
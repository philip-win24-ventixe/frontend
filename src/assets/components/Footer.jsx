import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <p className='copyright-text'>Copyright © 2025 Peterdraw</p>
        <Link className='footer-link' to='#'>Private Policy</Link>
        <Link className='footer-link' to='#'>Term and conditions</Link>
        <Link className='footer-link' to='#'>Contact</Link>
      </div>
    </footer>
  )
}

export default Footer
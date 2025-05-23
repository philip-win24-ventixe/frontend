import React from 'react'
import { Link } from 'react-router-dom'

 

const Logo = () => {
  return (
    <Link id="logo" to="/">
        <div className='logo'>
            <img src='src/assets/images/ventixe-logo-symbol.svg' alt="Ventixe Logo symbol" />
            <span className='logo-text'>Ventixe</span>
        </div>
    </Link>
  )
}

export default Logo
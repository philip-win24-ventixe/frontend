import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Nav/Logo'

const Nav = () => {
  return (
    <nav>
      <Logo />
      <NavLink to='/' className="navlink">
        <i className="fa-solid fa-ticket-perforated"></i>
        <span>Events</span>
      </NavLink>
    </nav>
  )
}

export default Nav
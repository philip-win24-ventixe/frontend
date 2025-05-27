import React from 'react'
import { useTitle } from '../contexts/TitleContext'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const PortalLayout = () => {
  const { title } = useTitle()

  return (
    <div className='portal-wrapper'>
        <Nav />
        <Header title={title} />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default PortalLayout
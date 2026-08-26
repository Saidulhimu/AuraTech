import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../components/Navber'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div>
      <Navber />
      
      <div className='min-h-screen'>
        <Outlet />
      </div>

      <Footer />
    </div>
  )


}

export default MainLayout
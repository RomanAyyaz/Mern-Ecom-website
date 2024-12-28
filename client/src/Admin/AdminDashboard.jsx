import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Navbar from './Navbar/Navbar'
import FrontPage from './FrontPage/FrontPage'
function AdminDashboard() {
  return (
    <div className='bg-adminDashborad h-screen'>
      <Navbar/>
      <div className='flex'>
      <Sidebar/>
      <FrontPage/>
      </div>
    </div>
  )
}

export default AdminDashboard
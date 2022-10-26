import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Dashboard from './Dashboard'

const Home = () => {
  return (
    <div className="g-sidenav-show bg-gray-200">
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar name="Dashboard" />
        <Dashboard />
      </main>
    </div>
  )
}

export default Home



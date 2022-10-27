import React from 'react'
import Customer from './Customer'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Customers = () => {
  return (
    <div className="g-sidenav-show bg-gray-200">
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar name="Customers" />
        <Customer />
      </main>
    </div>
  )
}

export default Customers

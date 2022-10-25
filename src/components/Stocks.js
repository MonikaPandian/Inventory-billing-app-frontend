import React from 'react'
import Stock from './Stock'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Stocks = () => {
  return (
    <div className="g-sidenav-show bg-gray-200">
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar name="Stocks" />
        <Stock />
      </main>
    </div>
  )
}

export default Stocks

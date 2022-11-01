import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Invoice from './Invoice'

const Invoices = () => {
    return (
        <div className="g-sidenav-show bg-gray-200">
            <Sidebar />
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <Navbar name="Invoices" />
                <Invoice />
            </main>
        </div>
    )
}

export default Invoices

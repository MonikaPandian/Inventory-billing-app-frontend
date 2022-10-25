import React from 'react'
import Payment from './Payment'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Payments = () => {
    return (
        <div>
            <div className="g-sidenav-show bg-gray-200">
                <Sidebar />
                <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                    <Navbar name="Payments" />
                    <Payment />
                </main>
            </div>
        </div>
    )
}

export default Payments

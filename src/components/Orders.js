import Navbar from './Navbar'
import React from 'react'
import Order from './Order'
import Sidebar from './Sidebar'

const Orders = () => {
    return (      
            <div className="g-sidenav-show bg-gray-200">
                <Sidebar />
                <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
                    <Navbar name="Orders" />
                    <Order />
                </main>
            </div>        
    )
}

export default Orders

import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Notification from './Notification'

const Notifications = () => {
    return (
        <div className="g-sidenav-show bg-gray-200">
            <Sidebar />
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
                <Navbar name="Notifications" />
                <Notification />
            </main>
        </div>
    )
}

export default Notifications

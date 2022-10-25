import React from 'react'
import ProfileDetails from './ProfileDetails'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Profile = () => {
    return (
        <div className="g-sidenav-show bg-gray-200">
            <Sidebar />
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <Navbar name="Profile" />
                 <ProfileDetails/>
            </main>
        </div>
    )
}

export default Profile

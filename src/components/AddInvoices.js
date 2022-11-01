import React from 'react'

const AddInvoices = () => {
    return (
        <div className="g-sidenav-show bg-gray-200">
            <Sidebar />
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <Navbar name="Create Invoice" />
                <Customer />
            </main>
        </div>
    )
}

export default AddInvoices

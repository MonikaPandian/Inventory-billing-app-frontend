import React, { useState, useEffect } from 'react'
import { Modal } from '@mantine/core';

const Notification = () => {
    const [notifications, setNotifications] = useState([])
    const [addModal, setAddModal] = useState(false);
    const [newNotification, setNewNotification] = useState("")
    const [newCustomerName, setNewCustomerName] = useState("")

    const getNotifications = () => {
        fetch("https://inventory-billing-app-backend.vercel.app/notifications", {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => setNotifications(res))
            .catch((e) => console.log(e));
    }

    useEffect(() => getNotifications(), [notifications]);

    const addNotification = (e) => {
        e.preventDefault()
        setAddModal(false);
        const newMessage = {
            customerName: newCustomerName,
            message: newNotification
        }
        fetch("https://inventory-billing-121.herokuapp.com/notifications", {
            method: "POST",
            body: JSON.stringify(newMessage),
            headers: {
                "Content-Type": "application/json",
            }
        })
    }

    return (
        <div className="container-fluid py-4">
            <div className='d-flex float-end me-5'>
                <button onClick={() => setAddModal(true)} className="text-white text-md me-5 p-2 text-capitalize font-weight-bold btn-outline-white bg-gradient-primary opacity-6"><i className="fa-solid fa-plus"></i>&nbsp;&nbsp;Add Notification</button>
            </div>
            <div className="card m-5" style={{ width: "70rem" }}>
                <div className="card-header bg-gradient-primary opacity-6 text-white">
                    Notifications
                </div>
                <ul className="list-group list-group-flush">
                    {notifications.map((notification) => {
                        return (
                            <li className="list-group-item"><span className='font-weight-bolder text-md me-5'>{notification.customerName}</span>&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;{notification.message}</li>
                        )
                    })}
                </ul>
            </div>
            <Modal
                opened={addModal}
                onClose={() => setAddModal(false)}
                title="New Notification">
                <form onSubmit={addNotification}>
                    <div className="mb-1">
                        <label>Your name</label>
                        <input onChange={(e) => setNewCustomerName(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-1">
                        <label>Message</label>
                        <input onChange={(e) => setNewNotification(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Enter Message"
                        />
                    </div>
                    <div className="d-grid mt-4">
                        <button className="btn bg-gradient-primary text-white text-capitalize">
                            Create
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default Notification

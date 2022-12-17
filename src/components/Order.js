import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import { Modal } from '@mantine/core';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit'

const Order = () => {
    const [updateModal, setUpdateModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [orders, setOrders] = useState([])
    const [customerName, setCustomerName] = useState("")
    const [contact, setContact] = useState("")
    const [ordered, setOrdered] = useState("")
    const [deliveryDate, setDeliveryDate] = useState("")
    const [status, setStatus] = useState("")
    const [orderId, setOrderId] = useState("")
    const [newCustomerName, setNewCustomerName] = useState("")
    const [newContact, setNewContact] = useState("")
    const [newOrdered, setNewOrdered] = useState("")
    const [newStatus, setNewStatus] = useState("")
    const [newDeliveryDate, setNewDeliveryDate] = useState("")

    const [userDetails, setUserDetails] = useState({});
    const {isAdmin} = userDetails;
  
    useEffect(() => {
        const userDetails = JSON.parse(localStorage.getItem('userDetails'));          
            setUserDetails(userDetails);      
    }, [userDetails.id]);

    const updateOrder=(e)=> {
        e.preventDefault()
        setUpdateModal(false)
        const updatedOrder = {
            customerName: customerName,
            contact: contact,
            orderedItems: ordered,
            status: status,
            deliveryDate: deliveryDate
        }
        fetch(`https://inventory-billing-app-backend.vercel.app/orders/${orderId}`, {
            method: "PUT",
            body: JSON.stringify(updatedOrder),
            headers: {
                "Content-Type": "application/json",
            }
        })
    }

    const addOrder=(e)=> {
        e.preventDefault()
        setAddModal(false);
        const newOrder = {
            customerName: newCustomerName,
            contact: newContact,
            orderedItems: newOrdered,
            status: newStatus,
            deliveryDate: newDeliveryDate
        }
        fetch("https://inventory-billing-app-backend.vercel.app/orders", {
            method: "POST",
            body: JSON.stringify(newOrder),
            headers: {
                "Content-Type": "application/json",
            }
        })
    }

    const getOrder=(id)=> {
        fetch(`https://inventory-billing-app-backend.vercel.app/orders/${id}`, {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => { setCustomerName(res.customerName); setContact(res.contact); setOrdered(res.orderedItems); setOrderId(res._id); setStatus(res.status);setDeliveryDate(res.deliveryDate) })
            .catch((e) => console.log(e));
    }

    const getOrders=()=> {
        fetch("https://inventory-billing-app-backend.vercel.app/orders", {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => setOrders(res))
            .catch((e) => console.log(e));
    }

    useEffect(() => getOrders(), [orders]);

     return(
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-12">
                    <div className="card my-4">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="bg-gradient-primary shadow-primary border-radius-lg p-2 d-flex justify-content-between align-items-center">
                                <h6 className="text-white text-capitalize ps-3 pt-2">Orders table</h6>                             
                                <button onClick={() => {setAddModal(true)}} className="text-white text-md me-5 p-2 text-capitalize font-weight-bold btn-outline-white bg-gradient-primary"><i className="fa-solid fa-plus"></i>&nbsp;&nbsp;Add Order</button>
                            </div>
                        </div>
                        <div className="card-body px-0 pb-2">
                            <div className="table-responsive p-0">
                                <table className="table align-items-center mb-0">
                                    <thead>
                                        <tr>
                                            <th className="text-uppercase text-secondary text-md font-weight-bold">customer Name</th>
                                            <th className="text-uppercase text-secondary text-md font-weight-bolder ps-2">Contact</th>
                                            <th className="text-center text-uppercase text-secondary text-md font-weight-bolder">Orders</th>
                                            <th className="text-center text-uppercase text-secondary text-md font-weight-bolder">Delivery Date</th>                                            
                                            <th className="text-center text-uppercase text-secondary text-md font-weight-bolder">Delivery status</th>                                            
                                            { isAdmin &&
                                            <th className="text-center text-uppercase text-secondary text-md font-weight-bolder">Actions</th>}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((order) => {
                                            return (
                                                <tr key={order._id}>
                                                     <td>
                                                        <span className="text-sm font-weight-bold ms-3">{order.customerName}</span>
                                                    </td>
                                                    <td>
                                                        <p className="text-sm font-weight-bold">{order.contact}</p>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <p className="text-sm font-weight-bold">{order.orderedItems}</p>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <span className="text-sm font-weight-bold">{order.deliveryDate}</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <span className="text-sm font-weight-bold">{order.status}</span>
                                                    </td>
                                                    { isAdmin &&                                                    
                                                    <td className="align-middle text-center">
                                                        <IconButton onClick={() =>{setUpdateModal(true);getOrder(order._id)}} color="primary">
                                                            <EditIcon />
                                                        </IconButton>
                                                    </td>}
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <Modal
                opened={updateModal}
                onClose={() => setUpdateModal(false)}
                title="Order Update">
                <form onSubmit={updateOrder}>
                    <div className="mb-1">
                        <label>Customer name</label>
                        <input value={customerName} onChange={(e) => setCustomerName(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Enter customer name"
                        />
                    </div>
                    <div className="mb-1">
                        <label>Contact</label>
                        <input value={contact} onChange={(e) => setContact(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Enter customer contact"
                        />
                    </div>                   
                    <div className="mb-1">
                        <label>Ordered items</label>
                        <input value={ordered} onChange={(e) => setOrdered(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Ordered items"
                        />
                    </div>
                    <div className="mb-1">
                        <label>Delivery Date</label>
                        <input value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Delivery date"
                        />
                    </div>
                    <div className="mb-1">
                        <label>Delivery status</label>
                        <input value={status} onChange={(e) => setStatus(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="status"
                        />
                    </div>
                    <div className="d-grid mt-4">
                        <button className="btn bg-gradient-primary text-white text-capitalize">
                            Update
                        </button>
                    </div>
                </form>
            </Modal>
            <Modal
                opened={addModal}
                onClose={() => setAddModal(false)}
                title="New Order">
                 <form onSubmit={addOrder}>
                    <div className="mb-1">
                        <label>Customer name</label>
                        <input value={newCustomerName} onChange={(e) => setNewCustomerName(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Enter customer name"
                        />
                    </div>
                    <div className="mb-1">
                        <label>Contact</label>
                        <input value={newContact} onChange={(e) => setNewContact(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Enter customer contact"
                        />
                    </div>                   
                    <div className="mb-1">
                        <label>Ordered items</label>
                        <input value={newOrdered} onChange={(e) => setNewOrdered(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Ordered items"
                        />
                    </div>
                    <div className="mb-1">
                        <label>Delivery status</label>
                        <input value={newDeliveryDate} onChange={(e) => setNewDeliveryDate(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Delivery date"
                        />
                    </div>
                    <div className="mb-1">
                        <label>Delivery status</label>
                        <input value={newStatus} onChange={(e) => setNewStatus(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="status"
                        />
                    </div>
                    <div className="d-grid mt-4">
                        <button className="btn bg-gradient-primary text-white text-capitalize">
                            Add order
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
     )
    }

export default Order;





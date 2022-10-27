import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import { Modal } from '@mantine/core';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit'

const Customer = () => {
    const [opened, setOpened] = useState(false);
    const [modal, setModal] = useState(false);
    const [customerId, setCustomerId] = useState("")
    const [customerName, setCustomerName] = useState("")
    const [contact, setContact] = useState("")
    const [email, setEmail] = useState("")
    const [lastOrder, setLastOrder] = useState("")
    const [image, setImage] = useState("")
    const [customers, setCustomers] = useState([])
    const [newCustomerName, setNewCustomerName] = useState("")
    const [newCustomerContact, setNewCustomerContact] = useState("")
    const [newCustomerEmail, setNewCustomerEmail] = useState("")
    const [newCustomerLastOrder, setNewCustomerLastOrder] = useState("")
    const [newCustomerImage, setNewCustomerImage] = useState("")

    function updateCustomer(e) {
        e.preventDefault()
        setOpened(false)
        const updatedCustomer = {
            name: customerName,
            email: email,
            contact: contact,
            lastOrder: lastOrder,
            img: image
        }
        fetch(`https://inventory-billing-121.herokuapp.com/customers/${customerId}`, {
            method: "PUT",
            body: JSON.stringify(updatedCustomer),
            headers: {
                "Content-Type": "application/json",
            }
        })
    }

    function addCustomer(e) {
        e.preventDefault()
        setModal(false);
        const newCustomer = {
            name: newCustomerName,
            email: newCustomerEmail,
            contact: newCustomerContact,
            lastOrder: newCustomerLastOrder,
            img: newCustomerImage
        }
        fetch("https://inventory-billing-121.herokuapp.com/customers", {
            method: "POST",
            body: JSON.stringify(newCustomer),
            headers: {
                "Content-Type": "application/json",
            }
        })
    }

    function getCustomer(id) {
        fetch(`https://inventory-billing-121.herokuapp.com/customers/${id}`, {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => { setCustomerName(res.name); setContact(res.contact); setEmail(res.email); setLastOrder(res.lastOrder); setCustomerId(res._id); setImage(res.img) })
            .catch((e) => console.log(e));
    }

    function getCustomers() {
        fetch("https://inventory-billing-121.herokuapp.com/customers", {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => setCustomers(res))
            .catch((e) => console.log(e));
    }

    useEffect(() => getCustomers(), [customers]);

    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-12">
                    <div className="card my-4">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="bg-gradient-primary shadow-primary border-radius-lg p-2 d-flex justify-content-between">
                                <h6 className="text-white text-capitalize ps-3 pt-2">Customers table</h6>
                                <button onClick={() => setModal(true)} className="text-white text-md me-5 p-2 text-capitalize font-weight-bold btn-outline-white bg-gradient-primary"><i className="fa-solid fa-plus"></i>&nbsp;&nbsp;Add Customer</button>
                            </div>
                        </div>
                        <div className="card-body px-0 pb-2">
                            <div className="table-responsive p-0">
                                <table className="table align-items-center mb-0">
                                    <thead>
                                        <tr>
                                            <th className="text-uppercase text-secondary text-md font-weight-bold">Customer Name</th>
                                            <th className="text-uppercase text-secondary text-md font-weight-bolder ps-2">Contact</th>
                                            <th className="text-center text-uppercase text-secondary text-md font-weight-bolder">Email</th>
                                            <th className="text-center text-uppercase text-secondary text-md font-weight-bolder">Last Order</th>
                                            <th className="text-center text-uppercase text-secondary text-md font-weight-bolder">Edit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {customers.map((cust) => {
                                            return (
                                                <tr key={cust._id}>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src={cust.img} className="avatar avatar-sm me-3 border-radius-lg" alt="user1" />
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="font-weight-bold text-sm">{cust.name}</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="text-sm font-weight-bold">{cust.contact}</p>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <p className="text-sm font-weight-bold">{cust.email}</p>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <span className="text-sm font-weight-bold">{cust.lastOrder}</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <IconButton onClick={() =>{ setOpened(true);getCustomer(cust._id)}} color="primary">
                                                            <EditIcon />
                                                        </IconButton>
                                                    </td>
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
            <Footer />
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Customer Update">
                <form onSubmit={updateCustomer}>
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
                        <label>Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="mb-1">
                        <label>Last order</label>
                        <input value={lastOrder} onChange={(e) => setLastOrder(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Last order"
                        />
                    </div>
                    <div className="mb-1">
                        <label>Profile Image</label>
                        <input value={image} onChange={(e) => setImage(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Image"
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
                opened={modal}
                onClose={() => setModal(false)}
                title="New customer">
                <form onSubmit={addCustomer}>
                    <div className="mb-1">
                        <label>Customer name</label>
                        <input onChange={(e) => setNewCustomerName(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Enter customer name"
                        />
                    </div>
                    <div className="mb-1">
                        <label>Contact</label>
                        <input onChange={(e) => setNewCustomerContact(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Enter customer contact"
                        />
                    </div>
                    <div className="mb-1">
                        <label>Email</label>
                        <input onChange={(e) => setNewCustomerEmail(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="mb-1">
                        <label>Last order</label>
                        <input onChange={(e) => setNewCustomerLastOrder(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Last order"
                        />
                    </div>
                    <div className="mb-1">
                        <label>Profile Image</label>
                        <input onChange={(e) => setNewCustomerImage(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Image"
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

export default Customer




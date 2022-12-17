import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import { Modal } from '@mantine/core';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit'

const Supplier = () => {
    const [userDetails, setUserDetails] = useState({});
    const { isAdmin} = userDetails;
  
    useEffect(() => {
        const userDetails = JSON.parse(localStorage.getItem('userDetails'));          
            setUserDetails(userDetails);      
    }, [userDetails.id]);

    const [updateModal, setUpdateModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [supplierId, setSupplierId] = useState("")
    const [supplierName, setSupplierName] = useState("")
    const [contact, setContact] = useState("")
    const [email, setEmail] = useState("")
    const [lastOrder, setLastOrder] = useState("")
    const [image, setImage] = useState("")
    const [suppliers, setSuppliers] = useState([])
    const [newSupplierName, setNewSupplierName] = useState("")
    const [newSupplierContact, setNewSupplierContact] = useState("")
    const [newSupplierEmail, setNewSupplierEmail] = useState("")
    const [newSupplierLastOrder, setNewSupplierLastOrder] = useState("")
    const [newSupplierImage, setNewSupplierImage] = useState("")

    const updateSupplier=(e)=> {
        e.preventDefault()
        setUpdateModal(false)
        const updatedSupplier = {
            name: supplierName,
            email: email,
            contact: contact,
            lastOrder: lastOrder,
            img: image
        }
        fetch(`https://inventory-billing-app-backend.vercel.app/suppliers/${supplierId}`, {
            method: "PUT",
            body: JSON.stringify(updatedSupplier),
            headers: {
                "Content-Type": "application/json",
            }
        })
    }

    const addSupplier=(e)=> {
        e.preventDefault()
        setAddModal(false);
        const newSupplier = {
            name: newSupplierName,
            email: newSupplierEmail,
            contact: newSupplierContact,
            lastOrder: newSupplierLastOrder,
            img: newSupplierImage
        }
        fetch("https://inventory-billing-app-backend.vercel.app/suppliers", {
            method: "POST",
            body: JSON.stringify(newSupplier),
            headers: {
                "Content-Type": "application/json",
            }
        })
    }

    const getSupplier=(id)=> {
        fetch(`https://inventory-billing-app-backend.vercel.app/suppliers/${id}`, {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => { setSupplierName(res.name); setContact(res.contact); setEmail(res.email); setLastOrder(res.lastOrder); setSupplierId(res._id); setImage(res.img) })
            .catch((e) => console.log(e));
    }

    const getSuppliers=()=> {
        fetch("https://inventory-billing-app-backend.vercel.app/suppliers", {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => setSuppliers(res))
            .catch((e) => console.log(e));
    }

    useEffect(() => getSuppliers(), [suppliers]);

    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-12">
                    <div className="card my-4">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="bg-gradient-primary shadow-primary border-radius-lg p-2 d-flex justify-content-between align-items-center">
                                <h6 className="text-white text-capitalize ps-3 pt-2">Suppliers table</h6>
                                {isAdmin && 
                                <button onClick={() => setAddModal(true)} className="text-white text-md me-5 p-2 text-capitalize font-weight-bold btn-outline-white bg-gradient-primary"><i className="fa-solid fa-plus"></i>&nbsp;&nbsp;Add Supplier</button>}
                            </div>
                        </div>
                        <div className="card-body px-0 pb-2">
                            <div className="table-responsive p-0">
                                <table className="table align-items-center mb-0">
                                    <thead>
                                        <tr>
                                            <th className="text-uppercase text-secondary text-md font-weight-bold">Supplier Name</th>
                                            <th className="text-uppercase text-secondary text-md font-weight-bolder ps-2">Contact</th>
                                            <th className="text-center text-uppercase text-secondary text-md font-weight-bolder">Email</th>
                                            <th className="text-center text-uppercase text-secondary text-md font-weight-bolder">Last Order</th>
                                            {isAdmin && 
                                            <th className="text-center text-uppercase text-secondary text-md font-weight-bolder">Edit</th>}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {suppliers.map((supplier) => {
                                            return (
                                                <tr key={supplier._id}>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src={supplier.img} className="avatar avatar-sm me-3 border-radius-lg" alt="user1" />
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="font-weight-bold text-sm">{supplier.name}</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="text-sm font-weight-bold">{supplier.contact}</p>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <p className="text-sm font-weight-bold">{supplier.email}</p>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <span className="text-sm font-weight-bold">{supplier.lastOrder}</span>
                                                    </td>
                                                    {isAdmin && 
                                                    <td className="align-middle text-center">
                                                        <IconButton onClick={() =>{ setUpdateModal(true);getSupplier(supplier._id)}} color="primary">
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
            <Footer />
            <Modal
                opened={updateModal}
                onClose={() => setUpdateModal(false)}
                title="Supplier Update">
                <form onSubmit={updateSupplier}>
                    <div className="mb-1">
                        <label>Supplier name</label>
                        <input value={supplierName} onChange={(e) => setSupplierName(e.target.value)}
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
                            placeholder="Enter supplier contact"
                        />
                    </div>
                    <div className="mb-1">
                        <label>Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)}
                            type="email"
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
                opened={addModal}
                onClose={() => setAddModal(false)}
                title="New supplier">
                <form onSubmit={addSupplier}>
                    <div className="mb-1">
                        <label>Supplier name</label>
                        <input onChange={(e) => setNewSupplierName(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Enter supplier name"
                        />
                    </div>
                    <div className="mb-1">
                        <label>Contact</label>
                        <input onChange={(e) => setNewSupplierContact(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Enter supplier contact"
                        />
                    </div>
                    <div className="mb-1">
                        <label>Email</label>
                        <input onChange={(e) => setNewSupplierEmail(e.target.value)}
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="mb-1">
                        <label>Last order</label>
                        <input onChange={(e) => setNewSupplierLastOrder(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Last order"
                        />
                    </div>
                    <div className="mb-1">
                        <label>Profile Image</label>
                        <input onChange={(e) => setNewSupplierImage(e.target.value)}
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

export default Supplier




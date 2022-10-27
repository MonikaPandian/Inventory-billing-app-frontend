import React,{useState} from 'react'
import Footer from './Footer'
import { Modal } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import {useForm} from '@mantine/core';
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';

const Supplier = () => {
    const navigate = useNavigate();
    const [opened, setOpened] = useState(false);
    const [customerName, setCustomerName] = useState("")
    const [contact, setContact] = useState("")
    const [email, setEmail] = useState("")
    const [lastOrder, setLastOrder] = useState("")
    const[deliveryDate, setDeliveryDate] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
      }    
    
    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-12">
                    <div className="card my-4">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                <h6 className="text-white text-capitalize ps-3">Suppliers table</h6>
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
                                            <th className="text-center text-uppercase text-secondary text-md font-weight-bolder">Last Supply</th>
                                            <th className="text-center text-uppercase text-secondary text-md font-weight-bolder">Supplied Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div>
                                                        <img src="../assets/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user1" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">4 Seasons Market</h6>
                                                        <p className="text-xs text-secondary mb-0"></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-sm font-weight-bold mb-0">8475436789</p>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <p className="text-sm font-weight-bold mb-0">4seasonsmarket@gmail.com</p>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-xs font-weight-bold">23/04/22</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span style={{ textDecoration: "underline" }} className="font-weight-bold text-sm" data-toggle="tooltip" data-original-title="Edit user">
                                                    Edit
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div>
                                                        <img src="../assets/img/team-3.jpg " className="avatar avatar-sm me-3 border-radius-lg" alt="user1" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">AAA Grocery</h6>
                                                        <p className="text-xs text-secondary mb-0"></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-sm font-weight-bold mb-0">6789542345</p>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <p className="text-sm font-weight-bold mb-0">aaagrocery123@gmail.com</p>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-xs font-weight-bold">16/07/22</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span style={{ textDecoration: "underline" }} className="font-weight-bold text-sm" data-toggle="tooltip" data-original-title="Edit user">
                                                    Edit
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div>
                                                        <img src="../assets/img/team-3.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user1" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Bravo Supermarkets</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-sm font-weight-bold mb-0">7894321789</p>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <p className="text-sm font-weight-bold mb-0">bravosupermarket@gmail.com</p>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-xs font-weight-bold">25/04/22</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span style={{ textDecoration: "underline" }} className="font-weight-bold text-sm" data-toggle="tooltip" data-original-title="Edit user">
                                                    Edit
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div>
                                                        <img src="../assets/img/team-4.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user1" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Dollar Pantry</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-sm font-weight-bold mb-0">2345690871</p>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <p className="text-sm font-weight-bold mb-0">dollarpantry123@gmail.com</p>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-xs font-weight-bold">05/06/22</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span style={{ textDecoration: "underline" }} className="font-weight-bold text-sm" data-toggle="tooltip" data-original-title="Edit user">
                                                    Edit
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div>
                                                        <img src="../assets/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user1" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Better Bites Food Mart</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-sm font-weight-bold mb-0">736438493</p>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <p className="text-sm font-weight-bold mb-0">betterbites678@gmail.com</p>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-xs font-weight-bold">23/04/22</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span style={{ textDecoration: "underline" }} className="font-weight-bold text-sm" data-toggle="tooltip" data-original-title="Edit user">
                                                    Edit
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div>
                                                        <img src="../assets/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user1" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Apache Food Mart</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-sm font-weight-bold mb-0">123489745</p>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <p className="text-sm font-weight-bold mb-0">apachefoodmart@gmail.com</p>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-xs font-weight-bold">23/04/22</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span style={{ textDecoration: "underline" }} className="font-weight-bold text-sm" data-toggle="tooltip" data-original-title="Edit user">
                                                    Edit
                                                </span>
                                            </td>
                                        </tr>
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
                title="Stock Update">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>Customer name</label>
                        <input value={customerName} onChange={(e) => setCustomerName(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Enter product name"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Contact</label>
                        <input value={contact} onChange={(e) => setContact(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Enter product name"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Enter product name"
                        />
                    </div>
                    <div className="mb-1">
                        <label>Last order</label>
                        <input value={lastOrder} onChange={(e) => setLastOrder(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Enter product price"
                        />
                    </div>
                    <div className="mb-1">
                        <label>Delivery Date</label>
                        <input value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)}
                            type="password"
                            className="form-control"
                            placeholder="Enter availability"
                        />
                    </div>
                    <div className="d-grid mt-4">
                        <button className="btn bg-gradient-primary text-white text-capitalize">
                            Update
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default Supplier

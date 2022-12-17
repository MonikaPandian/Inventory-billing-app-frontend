import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Modal } from '@mantine/core';

const AddInvoice = () => {
    const [stock, setStock] = useState("")
    const [addModal, setAddModal] = useState(false);
    const [stocks, setStocks] = useState([])
    const [quantity, setQuantity] = useState(null)
    const [pricePerKg, setPricePerKg] = useState(null)
    const [list, setList] = useState([])
    const [grandTotal, setGrandTotal] = useState(0)
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

    const handleChange = (event) => {
        setStock(event.target.value);
    };

    const handlePrint = () => {
        window.print()
    }

    const addListItem = (e) => {
        e.preventDefault();
        setAddModal(false);
        const newListItem = {
            itemName: stock,
            pricePerKg: pricePerKg,
            quantity: quantity,
            total: quantity * pricePerKg
        }
        setList([...list, newListItem])
        setGrandTotal(grandTotal + quantity * pricePerKg)
        setStock("")
        setPricePerKg("")
        setQuantity("")
    }

    const getStocks = () => {
        fetch("https://inventory-billing-app-backend.vercel.app/stocks", {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => setStocks(res))
            .catch((e) => console.log(e));
    }

    useEffect(() => getStocks(), [stocks])

    return (
        <div className="container-fluid py-4">
            <h3 className='text-center'>Invoice</h3>
            <div className='d-flex justify-content-between mb-3'>
                <div>
                    <h5>From : admin@example.com</h5>
                    <h5>Date:{today}</h5>
                </div>
                <button onClick={() => setAddModal(true)} className="text-white text-md mb-3 me-5 p-2 text-capitalize font-weight-bold btn-outline-white bg-gradient-primary"><i className="fa-solid fa-plus"></i>&nbsp;&nbsp;Add Item</button>
            </div>
            <div className='table-responsive p-0 bg-white'>
                <table className="table align-items-center mb-0">
                    <thead>
                        <tr>
                            <th className="text-center text-uppercase text-secondary text-md font-weight-bolder">Item Name</th>
                            <th className="text-center text-uppercase text-secondary text-md font-weight-bolder">Price Per Kg</th>
                            <th className="text-center text-uppercase text-secondary text-md font-weight-bolder">Quantity</th>
                            <th className="text-center text-uppercase text-secondary text-md font-weight-bolder">Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((lst, index) => {
                            return (
                                <tr key={index}>
                                    <td className="align-middle text-center text-md">
                                        {lst.itemName}
                                    </td>
                                    <td className="align-middle text-center text-md">
                                        {lst.pricePerKg}
                                    </td>
                                    <td className="align-middle text-center text-md">
                                        {lst.quantity}
                                    </td>
                                    <td className="align-middle text-center text-md">
                                        {lst.total}
                                    </td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td></td>
                            <td></td>
                            <td className='align-middle text-center text-md font-weight-bolder'>Grand Total</td>
                            <td className='align-middle text-center text-md font-weight-bolder'>{grandTotal}</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={handlePrint} className="text-white text-md mb-3 ms-5 p-2 text-capitalize font-weight-bold btn-outline-white bg-gradient-primary"><i className="fa-solid fa-plus"></i>&nbsp;&nbsp;Print Invoice</button>
            </div>
            <Modal
                opened={addModal}
                onClose={() => setAddModal(false)}
                title="New List Item">
                <form onSubmit={addListItem}>
                    <div className="mb-1">
                        <Box sx={{ maxWidth: 200 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Stock</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={stock}
                                    label="Stock"
                                    onChange={handleChange}>
                                    {stocks.map((stoc) => {
                                        return (
                                            <MenuItem onClick={() => { setPricePerKg(stoc.pricePerKg) }} key={stoc._id} value={stoc.name}>{stoc.name}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className="mb-1">
                        <label>Item price per kg</label>
                        <input onChange={(e) => { }}
                            type="text" value={pricePerKg}
                            className="form-control"
                            placeholder="Enter price per kg"
                        />
                    </div>
                    <div className="mb-1">
                        <label>Quantity</label>
                        <input onChange={(e) => { setQuantity(e.target.value) }}
                            type="text" value={quantity}
                            className="form-control"
                            placeholder="Enter quantity"
                        />
                    </div>
                    <div className="mb-1">
                        <label>Total</label>
                        <input value={quantity * pricePerKg}
                            type="text"
                            className="form-control"
                            placeholder="Total"
                        />
                    </div>
                    <div className="d-grid mt-4">
                        <button className="btn bg-gradient-primary text-white text-capitalize">
                            Add List Item
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default AddInvoice


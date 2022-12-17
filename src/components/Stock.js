import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Modal } from '@mantine/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Stock = () => {
  const [userDetails, setUserDetails] = useState({});
  const {isAdmin} = userDetails;

  useEffect(() => {
      const userDetails = JSON.parse(localStorage.getItem('userDetails'));          
          setUserDetails(userDetails);      
  }, [userDetails.id]);

  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [stockId, setStockId] = useState("")
  const [stockName, setStockName] = useState("")
  const [pricePerKg, setPricePerKg] = useState("")
  const [availability, setAvailability] = useState("")
  const [requirement, setRequirement] = useState("")
  const [stocks, setStocks] = useState([])
  const [newStockName, setNewStockName] = useState("")
  const [newStockPricePerKg, setNewStockPricePerKg] = useState("")
  const [newStockAvailability, setNewStockAvailability] = useState("")
  const [newStockRequirement, setNewStockRequirement] = useState("")

  const updateStock = (e) => {
    e.preventDefault()
    setUpdateModal(false)
    const updatedStock = {
      name: stockName,
      pricePerKg: pricePerKg,
      availability: availability,
      requirement: requirement
    }
    fetch(`https://inventory-billing-app-backend.vercel.app/stocks/${stockId}`, {
      method: "PUT",
      body: JSON.stringify(updatedStock),
      headers: {
        "Content-Type": "application/json",
      }
    })
  }

  const removeStock = (id) => {
    fetch(`https://inventory-billing-app-backend.vercel.app/stocks/${id}`, {
      method: "DELETE"
    })
      .then((data) => data.json())
      .then(toast.success('Deleted successfully!', {
        autoClose: 3000,
        theme: "colored",
      })
      )
      .catch((e) => console.log(e))
  }

  const addStock = (e) => {
    e.preventDefault()
    setAddModal(false);
    const newStock = {
      name: newStockName,
      pricePerKg: newStockPricePerKg,
      availability: newStockAvailability,
      requirement: newStockRequirement
    }
    fetch("https://inventory-billing-app-backend.vercel.app/stocks", {
      method: "POST",
      body: JSON.stringify(newStock),
      headers: {
        "Content-Type": "application/json",
      }
    })
  }

  const getStock = (id) => {
    fetch(`https://inventory-billing-app-backend.vercel.app/stocks/${id}`, {
      method: "GET"
    })
      .then((data) => data.json())
      .then((res) => { setStockName(res.name); setPricePerKg(res.pricePerKg); setAvailability(res.availability); setStockId(res._id); setRequirement(res.requirement) })
      .catch((e) => console.log(e));
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
    <div className="container-fluid ps-3 pe-3">
      {isAdmin === true  &&
      <div className='container-fluid d-flex justify-content-end'>
        <button onClick={() => setAddModal(true)} className='btn bg-gradient-primary'><i className="fa-solid fa-plus"></i>&nbsp;&nbsp;Add Stock</button>
      </div>}
      {stocks ? 
      <div>
        <div className="row g-4">
          {stocks.map((stock) => {
            return (
              <div key={stock._id} className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                  <div className="card-header p-3 pt-2">
                    <div className="text-center pt-1">
                      <h4 className="mb-0 text-capitalize">{stock.name}</h4>
                      <h5 className="mb-0 pt-1">Price per kg : ₹ {stock.pricePerKg}</h5>
                    </div>
                  </div>
                  <hr className="dark horizontal my-0" />
                  <div className="card-footer text-center p-3">
                    <div>
                      <div>Availability : {stock.availability} kg</div>
                      <div>Requirement : {stock.requirement} kg</div>
                    </div>
                    {isAdmin === true &&
                    <div>
                    <IconButton onClick={() => { setUpdateModal(true); getStock(stock._id) }} color="secondary">
                      <EditIcon />
                    </IconButton>&nbsp;&nbsp;&nbsp;&nbsp;
                    <IconButton onClick={() => { removeStock(stock._id) }} color="error">
                      <DeleteIcon />
                    </IconButton>
                    </div>}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <Footer />
        <Modal
          opened={updateModal}
          onClose={() => setUpdateModal(false)}
          title="Stock Update">
          <form onSubmit={updateStock}>
            <div className="mb-3">
              <label>Stock name</label>
              <input value={stockName} onChange={(e) => setStockName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter stock name"
              />
            </div>
            <div className="mb-1">
              <label>Stock price per kg</label>
              <input value={pricePerKg} onChange={(e) => setPricePerKg(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter stock price per kg"
              />
            </div>
            <div className="mb-1">
              <label>Availability</label>
              <input value={availability} onChange={(e) => setAvailability(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter availability"
              />
            </div>
            <div className="mb-1">
              <label>Requirement</label>
              <input value={requirement} onChange={(e) => setRequirement(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter requirement"
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
          title="New Stock">
          <form onSubmit={addStock}>
            <div className="mb-2">
              <label>Stock name</label>
              <input onChange={(e) => setNewStockName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter stock name"
              />
            </div>
            <div className="mb-2">
              <label>Price per kg</label>
              <input onChange={(e) => setNewStockPricePerKg(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter price"
              />
            </div>
            <div className="mb-2">
              <label>Availability</label>
              <input onChange={(e) => setNewStockAvailability(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter availability"
              />
            </div>
            <div className="mb-2">
              <label>Requirement</label>
              <input onChange={(e) => setNewStockRequirement(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter requirement"
              />
            </div>
            <div className="d-grid mt-4">
              <button className="btn bg-gradient-primary text-white text-capitalize">
                Create
              </button>
            </div>
          </form>
        </Modal>
        <ToastContainer />
      </div> : <h1>Loading...</h1>}

    </div>
  )
}

export default Stock

import React, { useState } from 'react'
import Footer from './Footer'
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { Modal } from '@mantine/core';

const Stock = () => {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const [productName, setProductName] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [availability, setAvailability] = useState("")
  const [requirement, setRequirement] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="container-fluid py-4">
      <div className="row g-4">
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="text-center pt-1">
                <h4 className="mb-0 text-capitalize">Browntop millet</h4>
                <h5 className="mb-0 pt-1">Price per kg : ₹ 55</h5>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer text-center p-3">
              <div>
                <div>Availability : {availability} kg</div>
                <div>Requirement : {requirement} kg</div>
              </div>
              <IconButton onClick={() => setOpened(true)} color="secondary">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => { navigate() }} color="error">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="text-center pt-1">
                <h4 className="mb-0 text-capitalize">Urad Dal</h4>
                <h5 className="mb-0 pt-1">Price per kg : ₹ 45</h5>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer text-center p-3">
              <div>
                <div>Availability : {availability} kg</div>
                <div>Requirement : {requirement} kg</div>
              </div>
              <IconButton onClick={() => setOpened(true)} color="secondary">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => { navigate() }} color="error">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="text-center pt-1">
                <h4 className="mb-0 text-capitalize">Semolina</h4>
                <h5 className="mb-0 pt-1">Price per kg : ₹ 36</h5>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer text-center p-3">
              <div>
                <div>Availability : {availability} kg</div>
                <div>Requirement : {requirement} kg</div>
              </div>
              <IconButton onClick={() => setOpened(true)} color="secondary">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => { navigate() }} color="error">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="text-center pt-1">
                <h4 className="mb-0 text-capitalize">Rice</h4>
                <h5 className="mb-0 pt-1">Price per kg : ₹ 25</h5>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer text-center p-3">
              <div>
                <div>Availability : 60 kg</div>
                <div>Requirement : 50 kg</div>
              </div>
              <IconButton onClick={() => setOpened(true)} color="secondary">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => { navigate() }} color="error">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="text-center pt-1">
                <h4 className="mb-0 text-capitalize">Toor Dal</h4>
                <h5 className="mb-0 pt-1">Price per kg : ₹ 43</h5>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer text-center p-3">
              <div>
                <div>Availability : 56 kg</div>
                <div>Requirement : 45 kg</div>
              </div>
              <IconButton onClick={() => setOpened(true)} color="secondary">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => { navigate() }} color="error">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="text-center pt-1">
                <h4 className="mb-0 text-capitalize">wheat</h4>
                <h5 className="mb-0 pt-1">Price per kg : ₹ 25</h5>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer text-center p-3">
              <div>
                <div>Availability : 60 kg</div>
                <div>Requirement : 55 kg</div>
              </div>
              <IconButton onClick={() => setOpened(true)} color="secondary">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => { navigate() }} color="error">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="text-center pt-1">
                <h4 className="mb-0 text-capitalize">Ragi flour</h4>
                <h5 className="mb-0 pt-1">Price per kg : ₹ 35</h5>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer text-center p-3">
              <div>
                <div>Availability : 10 kg</div>
                <div>Requirement : 10 kg</div>
              </div>
              <IconButton onClick={() => setOpened(true)} color="secondary">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => { navigate() }} color="error">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="text-center pt-1">
                <h4 className="mb-0 text-capitalize">Brown Basmati Rice</h4>
                <h5 className="mb-0 pt-1">Price per kg : ₹ 40</h5>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer text-center p-3">
              <div>
                <div>Availability : 25 kg</div>
                <div>Requirement : 35 kg</div>
              </div>
              <IconButton onClick={() => setOpened(true)} color="secondary">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => { navigate() }} color="error">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Stock Update">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Product name</label>
              <input value={productName} onChange={(e) => setProductName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter product name"
              />
            </div>
            <div className="mb-1">
              <label>Product price per kg</label>
              <input value={productPrice} onChange={(e) => setProductPrice(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter product price"
              />
            </div>
            <div className="mb-1">
              <label>Availability</label>
              <input value={availability} onChange={(e) => setAvailability(e.target.value)}
                type="password"
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
      </div>
      <Footer />
    </div>
  )
}

export default Stock

import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { Modal } from '@mantine/core';
import Footer from './Footer';

const Product = () => {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);

  return (
   
      <div className="container-fluid py-4">
        <div className="row g-4">
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div className="card-header p-3 pt-2">
                <div className="text-center pt-1">
                  <h4 className="mb-0 text-capitalize">Browntop millet</h4>

                </div>
              </div>
              <hr className="dark horizontal my-0" />
              <div className="card-footer text-center p-3">
                <div>

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
            <form>
              <div className="mb-3">
                <label>Product name</label>
                <input value="" onChange={(e) => ("")}
                  type="text"
                  className="form-control"
                  placeholder="Enter product name"
                />
              </div>
              <div className="mb-1">
                <label>Product price per kg</label>
                <input value="" onChange={(e) => ("")}
                  type="text"
                  className="form-control"
                  placeholder="Enter product price"
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

export default Product

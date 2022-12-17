import React, { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Modal } from '@mantine/core';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => { 
  const [userDetails, setUserDetails] = useState({});
  const {isAdmin} = userDetails;

  useEffect(() => {
      const userDetails = JSON.parse(localStorage.getItem('userDetails'));          
          setUserDetails(userDetails);      
  }, [userDetails.id]);

  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [productId, setProductId] = useState("")
  const [ProductImage, setProductImage] = useState("")
  const [productName, setProductName] = useState("")
  const [products, setProducts] = useState([])
  const [newProductName, setNewProductName] = useState("")
  const [newProductImage, setNewProductImage] = useState("")

  const updateProduct = (e) => {
    e.preventDefault()
    setUpdateModal(false)
    const updatedProduct = {
      name: productName,
      image: ProductImage
    }
    fetch(`https://inventory-billing-app-backend.vercel.app/products/${productId}`, {
      method: "PUT",
      body: JSON.stringify(updatedProduct),
      headers: {
        "Content-Type": "application/json",
      }
    })
  }

  const removeProduct = (id) => {
    fetch(`https://inventory-billing-app-backend.vercel.app/products/${id}`, {
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

  const addProduct = (e) => {
    e.preventDefault()
    setAddModal(false);
    const newStock = {
      name: newProductName,
      image: newProductImage
    }
    fetch("https://inventory-billing-app-backend.vercel.app/products", {
      method: "POST",
      body: JSON.stringify(newStock),
      headers: {
        "Content-Type": "application/json",
      }
    })
  }

  const getProduct = (id) => {
    fetch(`https://inventory-billing-app-backend.vercel.app/products/${id}`, {
      method: "GET"
    })
      .then((data) => data.json())
      .then((res) => { setProductName(res.name); setProductImage(res.image); setProductId(res._id);})
      .catch((e) => console.log(e));
  }

  const getProducts = () => {
    fetch("https://inventory-billing-app-backend.vercel.app/products", {
      method: "GET"
    })
      .then((data) => data.json())
      .then((res) => setProducts(res))
      .catch((e) => console.log(e));
  }

  useEffect(() => getProducts(), [products])

  return (
    <div className="container-fluid ps-3 pe-3">
      {isAdmin && 
       <div className='container-fluid d-flex justify-content-end'>
        <button onClick={() => setAddModal(true)} className='btn bg-gradient-primary'><i className="fa-solid fa-plus"></i>&nbsp;&nbsp;Add Product</button>
      </div>}
     {products ? 
      <div>
      <div className="row g-4">
        {products.map((product) => {
          return (
            <div key={product._id} className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card h-100" style={{ width: "15rem" }}>
                <img src={product.image} className="card-img-top product-image" alt="..." />
                <div className="card-body text-center p-2">
                  <h6 className="card-title">{product.name}</h6>
                  {isAdmin && 
                  <div>
                  <IconButton onClick={() => { setUpdateModal(true); getProduct(product._id) }} color="secondary">
                    <EditIcon />
                  </IconButton>&nbsp;&nbsp;&nbsp;&nbsp;
                  <IconButton onClick={() => removeProduct(product._id)} color="error">
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
        title="Product Update">
        <form onSubmit={updateProduct}>
          <div className="mb-3">
            <label>Product name</label>
            <input value={productName} onChange={(e) => setProductName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter product name"
            />
          </div>
          <div className="mb-1">
            <label>Product Image</label>
            <input value={ProductImage} onChange={(e) => setProductImage(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter product image"
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
        <form onSubmit={addProduct}>
          <div className="mb-2">
            <label>Stock name</label>
            <input onChange={(e) => setNewProductName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter product name"
            />
          </div>
          <div className="mb-2">
            <label>Price per kg</label>
            <input onChange={(e) => setNewProductImage(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter product image"
            />
          </div>
          <div className="d-grid mt-4">
            <button className="btn bg-gradient-primary text-white text-capitalize">
              Create
            </button>
          </div>
        </form>
      </Modal>
      <ToastContainer/>
      </div> : <h1>Loading...</h1>}
    </div>

  )
}

export default Product


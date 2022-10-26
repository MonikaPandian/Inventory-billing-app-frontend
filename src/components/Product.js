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
  const [image, setImage] = useState("")
  const [name, setName] = useState("")

  return (   
    <div className="container-fluid py-4">
      <div className="row g-4">
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card h-100" style={{width: "15rem"}}>
            <img src="https://5.imimg.com/data5/HS/PB/MY-17091867/brown-top-millet-korle-500x500.jpg" className="card-img-top h-75" alt="..." />
            <div className="card-body text-center p-2">
              <h6 className="card-title">Brown-top millet</h6> 
              <IconButton onClick={() =>{setOpened(true)}} color="secondary">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => { navigate("") }} color="error">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card h-100" style={{width: "15rem"}}>
            <img src="https://thumbs.dreamstime.com/b/bottle-sunflower-oil-seeds-yellow-beautiful-background-123857513.jpg" className="card-img-top h-75" alt="..." />
            <div className="card-body text-center p-2">
              <h6 className="card-title">sunflower oil</h6> 
              <IconButton onClick={() =>{setOpened(true)}} color="secondary">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => { navigate("") }} color="error">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card h-100" style={{width: "15rem"}}>
            <img  src="https://m.economictimes.com/thumb/msid-90791140,width-1200,height-900,resizemode-4,imgsize-230408/wheat-.jpg" className="card-img-top h-75" alt="..." />
            <div className="card-body text-center p-2">
              <h5 className="card-title">Wheat</h5> 
              <IconButton onClick={() =>{setOpened(true)}} color="secondary">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => { navigate("") }} color="error">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card h-100" style={{width: "15rem"}}>
            <img  src="https://img.freepik.com/free-photo/milled-rice-bowl-wooden-spoon-black-cement-floor_1150-20054.jpg?w=2000" className="card-img-top h-75" alt="..." />
            <div className="card-body text-center p-2">
              <h5 className="card-title">Rice</h5> 
              <IconButton onClick={() =>{setOpened(true)}} color="secondary">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => { navigate("") }} color="error">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card h-100" style={{width: "15rem"}}>
            <img src="https://media.istockphoto.com/photos/macro-closeup-of-organic-green-gram-or-whole-green-moong-dal-on-a-picture-id1310279351?k=20&m=1310279351&s=612x612&w=0&h=wTTsyo9C5rWhtzf0i48SG0dg4eJD0Ag0BPiiFy9fxZ0=" className="card-img-top h-75" alt="..." />
            <div className="card-body text-center p-2">
              <h5 className="card-title">Wheat</h5> 
              <IconButton onClick={() =>{setOpened(true)}} color="secondary">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => { navigate("") }} color="error">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card h-100" style={{width: "15rem"}}>
            <img src="https://www.thespruceeats.com/thmb/4f4z8htcPWAtBaGmxy_km88Ee5c=/1732x1299/smart/filters:no_upscale()/Basmati-rice-583f907f3df78c0230257ac3.jpg" className="card-img-top h-75" alt="..." />
            <div className="card-body text-center p-2">
              <h5 className="card-title">Basmati Rice</h5> 
              <IconButton onClick={() =>{setOpened(true)}} color="secondary">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => { navigate("") }} color="error">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card h-100" style={{width: "15rem"}}>
            <img src="https://5.imimg.com/data5/NG/SF/MY-12683566/bengal-gram-dal-500x500.jpg" className="card-img-top h-75" alt="..." />
            <div className="card-body text-center p-2">
              <h5 className="card-title">Bengal gram</h5> 
              <IconButton onClick={() =>{ setOpened(true)}} color="secondary">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => { navigate("") }} color="error">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card h-100" style={{width: "15rem"}}>
            <img src="https://media.istockphoto.com/photos/whole-wheat-flour-picture-id172876049?k=20&m=172876049&s=612x612&w=0&h=-hPTUvyY-pwDGNcmizPfs8Xvn2Ly8JjUUscy4fRDgtk=" className="card-img-top h-75" alt="..." />
            <div className="card-body text-center p-2">
              <h5 className="card-title">Wheat flour</h5> 
              <IconButton onClick={() =>{ setOpened(true)}} color="secondary">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => { navigate("") }} color="error">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div>      
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Product Update">
          <form>
            <div className="mb-3">
              <label>Product name</label>
              <input value={image} onChange={(e) => setImage(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter product image"
              />
            </div>
            <div className="mb-1">
              <label>Product price per kg</label>
              <input value={name} onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter product name"
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

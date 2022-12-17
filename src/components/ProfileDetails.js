import Footer from './Footer'
import React, { useState, useEffect } from 'react'

const ProfileDetails = () => {
    const [userDetails, setUserDetails] = useState({});
    
    const { username, firstName, lastName, isAdmin, id } = userDetails;

    useEffect(() => {
        const userDetails = JSON.parse(localStorage.getItem('userDetails'));
        setUserDetails(userDetails);      
    }, [userDetails.id]);

    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [pincode, setPincode] = useState("")
    const [dob, setDob] = useState("")
    const [description, setDescription] = useState("")
    const [gender, setGender] = useState("")
    const [adminDetails, setAdminDetails] = useState("")

    const updateAdminProfile = (id) => {      
        const updateProfile = {           
            city: city,
            country: country,
            gender: gender,
            dob: dob,
            pincode: pincode,
            description: description
        }
        fetch(`https://inventory-billing-app-backend.vercel.app/admin/profile/${id}`, {
            method: "PUT",
            body: JSON.stringify(updateProfile),
            headers: {
                "Content-Type": "application/json",
            }
        })
    }

    const getAdminDetails = () => {
        const username = {
            username: "admin@example.com"
        }
        fetch("https://inventory-billing-app-backend.vercel.app/admin/profile", {
            method: "POST",
            body: JSON.stringify(username),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((data) => data.json())
        .then((res) => {setAdminDetails(res);setCity(res.city);setCountry(res.country);setDob(res.dob);setDescription(res.description);setGender(res.gender);setPincode(res.pincode)})
        .catch((e) => console.log(e));
    }

    useEffect(() => getAdminDetails(), []);

    return (
        <div className="container-fluid px-2 px-md-4">
            <div className="page-header min-height-100 border-radius-xl" style={{ backgroundImage: 'https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80' }}>
                <span className="mask  bg-gradient-primary  opacity-6"></span>
            </div>
            <div className="card card-body mx-3 mx-md-4 mt-n6">
                <div className="row gx-4 mb-2">
                    <div className="col-auto">
                        <div className="avatar avatar-xl position-relative">
                            <img src="../assets/img/bruce-mars.jpg" alt="profile_image" className="w-100 border-radius-lg shadow-sm" />
                        </div>
                    </div>
                    <div className="col-auto my-auto">
                        <div className="h-100">
                            <h5 className="mb-1">
                                {firstName}&nbsp;{lastName}
                            </h5>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="row">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" value={username}  className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">City</label>
                            <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} className="form-control" id="exampleFormControlInput1" placeholder="Enter city name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Country</label>
                            <input type="text" value={country} onChange={(e)=>{setCountry(e.target.value)}} className="form-control" id="exampleFormControlInput1" placeholder="Enter country name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Date of Birth</label>
                            <input type="text" value={dob} onChange={(e)=>{setDob(e.target.value)}} className="form-control" id="exampleFormControlInput1" placeholder="Enter your date of birth" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Pincode</label>
                            <input type="text" value={pincode} onChange={(e)=>{setPincode(e.target.value)}} className="form-control" id="exampleFormControlInput1" placeholder="Enter pincode" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Gender</label>
                            <input type="text" value={gender} onChange={(e)=>{setGender(e.target.value)}} className="form-control" id="exampleFormControlInput1" placeholder="Enter your gender" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea className="form-control" value={description} onChange={(e)=>{setDescription(e.target.value)}} id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button onClick={()=>updateAdminProfile(id)} className="btn bg-gradient-primary text-white text-capitalize w-25 opacity-8">
                                Update profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default ProfileDetails

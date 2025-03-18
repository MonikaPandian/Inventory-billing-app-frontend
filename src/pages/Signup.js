import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            username: email,
            password: password
        };
        fetch("https://inventory-billing-app-backend.vercel.app/users/sign-up", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((data) => data.json())
            .then((data) => {
                if (data.acknowledged === true) {
                    window.alert("Account created successfully.Please login to continue")
                    navigate("/sign-in")
                }
                else if (data.message === "Username already taken") {
                    window.alert("Username already taken.")
                }
                else {
                    window.alert("something went wrong")
                }
            })
    }

    return (
        <div className='App'>
            <nav className="navbar bg-gradient-primary fixed-top">
                <div className="container">
                    <button className="navbar-brand text-white app-name btn text-capitalize m-2">Inventory Billing Application</button>
                    <form className="d-flex" role="search">
                        <button onClick={() => navigate("/sign-in-admin")} className="btn navbar-btn btn-light text-capitalize"> Admin Login</button>
                        <button onClick={() => navigate("/sign-in")} className="btn navbar-btn btn-light text-capitalize">Login</button>
                        <button onClick={() => navigate("/sign-up")} className="btn navbar-btn btn-light text-capitalize">Signup</button>
                    </form>
                </div>
            </nav>
            <div className="auth-wrapper mt-5">
                <div className="auth-inner">
                    <form onSubmit={handleSubmit}>
                        <h3>Sign Up</h3>
                        <div className="mb-3">
                            <label>First name</label>
                            <input value={firstName} onChange={(e) => setFirstName(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="First name" required
                            />
                        </div>
                        <div className="mb-3">
                            <label>Last name</label>
                            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" placeholder="Last name" required />
                        </div>
                        <div className="mb-3">
                            <label>Email address</label>
                            <input
                                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                placeholder="Enter email" required
                            />
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className="form-control"
                                placeholder="Enter password" autoComplete='off' required
                            />
                        </div>
                        <div className="d-grid">
                            <button className="btn bg-gradient-primary text-white text-capitalize">
                                Sign Up
                            </button>
                        </div>
                        <div className="forgot-password text-black">
                            Already registered ?  <span onClick={() => navigate("/sign-in")} className="auth-span">sign in</span>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer toastStyle={{ backgroundColor: "#18CD30", color: "white" }} />
        </div>
    )
}

export default Signup

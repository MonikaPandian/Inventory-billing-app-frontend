import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ResetPassword = () => {
    const[newPassword, setNewPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const { id, token} = useParams();
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(newPassword !== confirmPassword){
            window.alert("passwords does not match!!")
            return;
        }      
        const userEmail = {
            password: newPassword,                                      
        };
        fetch(`https://inventory-billing-121.herokuapp.com/users/reset-password/${id}/:${token}`, {
            method: "POST",
            body: JSON.stringify(userEmail),
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((data) => data.json())
            .then((data) => { 
                if (data.message === "success") {
                    window.alert("Password reset link has been sent to your mail. Please check your mail")
                    navigate("/sign-in")                                                                    
                }
                else if(data.message === "Enter a valid and registered email Id"){
                    window.alert("Enter a valid and registered email Id")
                }
                else{
                    window.alert("something went wrong")
                }
            })
    }


    return (
        <div className='App'>
            <nav className="navbar bg-primary fixed-top">
                <div className="container">
                    <button className="navbar-brand text-white app-name btn text-capitalize m-2">Inventory Billing Application</button>
                    <form className="d-flex" role="search">
                        <button onClick={() => navigate("/sign-in")} className="btn navbar-btn btn-light text-capitalize">Login</button>
                        <button onClick={() => navigate("/sign-up")} className="btn navbar-btn btn-light text-capitalize">Signup</button>
                    </form>
                </div>
            </nav>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={handleSubmit}>
                        <h3>Reset Password</h3>
                        <div className="mb-3">
                            <label>New Password</label>
                            <input value={newPassword}
                                type="password" onChange={(e)=>setNewPassword(e.target.value)}
                                className="form-control"
                                placeholder="Enter new password" autoComplete='off'
                            />
                        </div>
                        <div className="mb-3">
                            <label>Confirm Password</label>
                            <input value={confirmPassword}
                                type="password"  onChange={(e)=>setConfirmPassword(e.target.value)}
                                className="form-control"
                                placeholder="Enter confirm password" autoComplete='off'
                            />
                        </div>

                        <div className="d-grid">
                            <button className="btn bg-primary text-white text-capitalize">
                                Update password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword

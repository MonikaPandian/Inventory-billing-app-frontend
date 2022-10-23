import React from 'react'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {

    const navigate = useNavigate();

    return (
        <div>
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
                    <form>
                        <h3>Reset Password</h3>
                        <div className="mb-3">
                            <label>New Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter new password" autoComplete='off'
                            />
                        </div>
                        <div className="mb-3">
                            <label>Confirm Password</label>
                            <input
                                type="password"
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

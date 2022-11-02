import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({});
    const { isAdmin } = userDetails;

    useEffect(() => {
        const userDetails = JSON.parse(localStorage.getItem('userDetails'));          
            setUserDetails(userDetails);      
    }, [userDetails.id]);
 
    return (           
            <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark" id="sidenav-main">
                <div className="sidenav-header">
                    <span className="nav-link text-white navbar-brand ms-0 ps-3 cursor-pointer">                       
                        <i className="material-icons opacity-10">dashboard</i>&nbsp;&nbsp;
                        <span className="ms-1 font-weight-bold text-white">Inventory Billing Dashboard</span>                       
                    </span>
                </div>
                <hr className="horizontal text-white mt-0 mb-2" />
                <div className="w-auto" id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span onClick={()=>{navigate("/home")}} className="nav-link text-white cursor-pointer">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">dashboard</i>&nbsp;&nbsp;&nbsp;
                                </div>
                                <span className="nav-link-text ms-1">Dashboard</span>
                            </span>
                        </li>
                        <li className="nav-item">
                            <span onClick={()=>navigate("/stocks")} className="nav-link text-white cursor-pointer">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="fa-solid fa-cubes-stacked"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <span className="nav-link-text ms-1">Stocks</span>
                            </span>
                        </li>
                        <li className="nav-item">
                            <span onClick={()=>navigate("/products")} className="nav-link text-white cursor-pointer">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">table_view</i>&nbsp;&nbsp;
                                </div>
                                <span className="nav-link-text ms-1">Products</span>
                            </span>
                        </li>
                        <li className="nav-item">
                            <span onClick={()=>navigate("/customers")} className="nav-link text-white cursor-pointer">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                {<i className="fa-solid fa-users"></i>}&nbsp;&nbsp;&nbsp;
                                </div>
                                <span className="nav-link-text ms-1">Customers</span>
                            </span>
                        </li>
                        <li className="nav-item">
                            <span onClick={()=>navigate("/suppliers")} className="nav-link text-white cursor-pointer">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="fa-solid fa-users"></i>&nbsp;&nbsp;&nbsp;
                                </div>
                                <span className="nav-link-text ms-1">Suppliers</span>
                            </span>
                        </li>
                        <li className="nav-item">
                            <span onClick={()=>navigate("/payments")}  className="nav-link text-white cursor-pointer">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="fa-solid fa-money-bill-wave"></i>&nbsp;&nbsp;&nbsp;
                                </div>
                                <span className="nav-link-text ms-1">Payments</span>
                            </span>
                        </li>
                        <li className="nav-item">
                            <span onClick={()=>navigate("/invoices")}  className="nav-link text-white cursor-pointer">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">receipt_long</i>&nbsp;&nbsp;
                                </div>
                                <span className="nav-link-text ms-1">Invoices</span>
                            </span>
                        </li>
                        {isAdmin && 
                        <li className="nav-item">
                            <span onClick={()=>navigate("/create-invoice")} className="nav-link text-white cursor-pointer">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons">add</i>&nbsp;&nbsp;
                                </div>
                                <span className="nav-link-text ms-1">Create Invoice</span>
                            </span>
                        </li> }                    
                        <li className="nav-item">
                            <span onClick={()=>navigate("/orders")}  className="nav-link text-white cursor-pointer">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">format_textdirection_r_to_l</i>&nbsp;&nbsp;
                                </div>
                                <span className="nav-link-text ms-1">Orders</span>
                            </span>
                        </li>                      
                        <li className="nav-item">
                            <span onClick={()=>navigate("/notifications")} className="nav-link text-white cursor-pointer">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">notifications</i>&nbsp;&nbsp;
                                </div>
                                <span className="nav-link-text ms-1">Notifications</span>
                            </span>
                        </li>
                        <li className="nav-item mt-3">
                            <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Account pages</h6>
                        </li>
                        <li className="nav-item">
                            <span onClick={()=>navigate("/profile")}  className="nav-link text-white cursor-pointer">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">person</i>&nbsp;&nbsp;
                                </div>
                                <span className="nav-link-text ms-1">Profile</span>
                            </span>
                        </li>
                        <li className="nav-item">
                            <span onClick={()=>navigate("/sign-in")} className="nav-link text-white cursor-pointer">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">login</i>&nbsp;&nbsp;
                                </div>
                                <span className="nav-link-text ms-1">Sign In</span>
                            </span>
                        </li>
                        <li className="nav-item">
                            <span onClick={()=>navigate("/sign-up")} style={{cursor:"pointer"}} className="nav-link text-white">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">assignment</i>&nbsp;&nbsp;
                                </div>
                                <span className="nav-link-text ms-1">Sign Up</span>
                            </span>
                        </li>                                                
                    </ul>
                </div>               
            </aside>       
    )
}

export default Sidebar


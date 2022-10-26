import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Home from './components/Home'
import Payments from './components/Payments'
import Profile from './components/Profile'
import Stocks from './components/Stocks'
import Products from './components/Products'
import Suppliers from './components/Suppliers'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
        <Route path="/home" element={<Home />} />  
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/customers" element={<Customers />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/payments" element={<Payments />} /> 
        <Route path="/invoices" element={<Invoices />} />    
        <Route path="/create-invoice" element={<CreateInvoice />} />
        <Route path="/orders" element={<Orders />} /> 
        <Route path="/add-order" element={<AddOrder />} /> 
        <Route path="/notifications" element={<Notifications />} />          
        <Route path="/profile" element={<Profile />} />  */}
                  
      </Routes>
    </div>
  )
}
export default App

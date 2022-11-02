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
import Customers from './components/Customers'
import AdminLogin from './pages/AdminLogin'
import Invoices from './components/Invoices'
import Orders from './components/Orders'
import AddInvoices from './components/AddInvoices'
import Notifications from './components/Notifications'

function App() {
  return (     
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-in-admin" element={<AdminLogin />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/invoices" element={<Invoices />} />  
          <Route path="/orders" element={<Orders />} /> 
          <Route path="/create-invoice" element={<AddInvoices />} />             
          <Route path="/notifications" element={<Notifications />} />       
        </Routes>
      </div>
  
  )
}
export default App

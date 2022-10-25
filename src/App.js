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

function App() {
  return (
      <div className="App">                 
            <Routes>
              <Route exact path="/" element={<Login/>} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
              <Route path="/home" element={<Home />} />
              <Route path="/stocks" element={<Stocks />} />                                        
        </Routes>   
      </div>   
  )
}
export default App

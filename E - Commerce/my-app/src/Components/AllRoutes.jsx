import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import SignupPage from '../Pages/SignupPage'
import LoginPage from '../Pages/LoginPage'
import Cart from '../Pages/Cart'
import Allproduct from '../Pages/Allproduct'
import AdminDashboard from '../Pages/AdminPanel/AdminDashboard'
import Checkout from '../Pages/Checkout'
import OrderDone from '../Pages/OrderDone'

export default function AllRoutes() {
  return (
    <>
      <Routes>

        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product' element={<Allproduct />} />
        <Route path='/admin-vendor' element={<AdminDashboard />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/orderDone' element={<OrderDone />} />
        {/*<Route path='' element={} /> */}
        {/*<Route path='' element={} /> */}
        {/*<Route path='' element={} /> */}
        {/*<Route path='' element={} /> */}
      </Routes>
    </>
  )
}
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllRoutes from "./Components/AllRoutes"
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <ToastContainer />
      <Navbar />
      <div style={{ margin: "10px" }} />
      <AllRoutes />
      <div style={{ margin: "10px" }} />
      <Footer />
    </>
  )
}

export default App
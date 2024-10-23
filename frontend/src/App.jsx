import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Verify from './pages/Verify/Verify'
import MyOrder from './pages/MyOrder/MyOrder'

const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
      {showLogin? <Login setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/placeorder' element={<PlaceOrder/>}></Route>
          <Route path="/verify" element={<Verify/>}/>
          <Route path="/myorders" element={<MyOrder/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App


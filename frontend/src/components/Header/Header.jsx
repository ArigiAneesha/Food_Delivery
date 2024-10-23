import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, ea porro omnis magnam quisquam consequatur provident repudiandae dolorem reprehenderit inventore! Quos quaerat, doloremque architecto impedit a veniam molestiae quia culpa?</p>
        <button onClick={()=>window.scrollTo({ top: 500, behavior: "smooth" })}>View Menu</button>
      </div>
      {/* <div className="header-img">
        <img src="./hero1.jpeg" alt="" />
      </div> */}
    </div>
  )
}

export default Header

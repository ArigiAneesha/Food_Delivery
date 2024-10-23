import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
            <i className="fa-solid fa-square-plus"></i>
            <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
            <i className="fa-solid fa-square-check"></i>
            <p>List Items</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
            <i className="fa-solid fa-calendar-check"></i>
            <p>Orders Items</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar

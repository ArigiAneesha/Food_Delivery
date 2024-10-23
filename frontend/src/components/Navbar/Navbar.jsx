import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("home");
    const {getTotalCartAmount,token,setToken,search,setSearch}=useContext(StoreContext);
    
    const navigate=useNavigate();

    const logout=()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate('/');
    }
  
    const [fix,setFix]=useState(false)

    const navfix=()=>{
        if(window.scrollY>=80){
            setFix(true)
        }else{
            setFix(false)
        }
    }
    window.addEventListener("scroll",navfix)


   
  
    return (
    <div className={fix ? 'setnavbar':'navbar'}>
        <Link to='/'><h1 className='logo'>Anee Delivery</h1></Link>
        <ul className="navbar-menu">
            
            <Link to='/' onClick={()=>setMenu('home')} className={menu==='home'?'active':''}>home</Link>
            <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu==='menu'?'active':''}>menu</a>
            <a href='#footer' onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':''}>contact us</a>
        </ul>
        <div className="navbar-right">
            <div className='navbar-search-fields'>
                <input type="text" placeholder='serach food here....' className='serach-input' onChange={(e)=>{setSearch(e.target.value)}}/>
                <i className="fa-solid fa-magnifying-glass" onClick={() => {
                    window.scrollTo({ top: 800, behavior: "smooth" })}}></i>
            </div>
            
            {/* <i class="fa-solid fa-magnifying-glass"></i> */}
            <div className="navbar-search-icon">
                <Link to='/cart'><i class="fa-solid fa-cart-shopping"></i></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>:
            <div className='navbar-profile'>
                <i className="fa-regular fa-user"></i>
                <ul className='nav-profile-dropdown'>
                    <li onClick={()=>navigate('/myorders')}><i className="fa-solid fa-bag-shopping"></i><p>Orders</p></li>
                    <hr/>
                    <li onClick={logout}><i className="fa-solid fa-arrow-right-from-bracket"></i><p>LogOut</p></li>
                </ul>
            </div>}
        </div>
    </div>
  )
}

export default Navbar

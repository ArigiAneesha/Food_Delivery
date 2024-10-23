import React, { useContext, useState } from 'react'
import './Login.css'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios'


const Login = ({setShowLogin}) => {

    const {url,setToken}=useContext(StoreContext)
    const [currState,setCurrState]=useState("sign up");

    const [data,setData]=useState({
      name:"",
      email:"",
      password:""
    })

    const onChangeHandler=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      setData(data=>({...data,[name]:value}))
    }

    const onLogin=async (e)=>{
      e.preventDefault();
      let newUrl=url;
      if(currState==='login'){
        newUrl += '/api/user/login'
      }
      else{
        newUrl += '/api/user/register'
      }
      const response=await axios.post(newUrl,data);
      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setShowLogin(false)
      }else{
        alert(response.data.message)
      }
    }
   

  return (
    <div className='login-popup'>
       <form onSubmit={onLogin} className="login-popup-contanier">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <i onClick={()=>setShowLogin(false)} className="fa-solid fa-xmark"></i>
        </div>
        <div className="login-popup-inputs">
            {currState==="login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required/>}
            
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required/>
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='apply password' required />
        </div>
            <button type='submit'>{currState==="sign up"?"create account":"login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing i agree to terms and conditions</p>
            </div>
            {currState==="login"?<p>Create a new account? <span onClick={()=>setCurrState('sign up')}>Click here</span></p>: <p>Already have an account? <span onClick={()=>setCurrState('login')}>Login Here</span></p>}
       </form>
    </div>
  )
}

export default Login

import React, { useContext, useState} from 'react'
import './FoodItem.css'
import { rate } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({id,name,price,description,image}) => {

    const {cartItems, addToCart,removeFromCart,url}=useContext(StoreContext)


    const [show,setShow]=useState(false)

    
  
    return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={url+"/images/"+image} alt="" className='food-item-img'/>
        {
            !cartItems[id]
                ?<i className="fa-solid fa-circle-plus add" onClick={()=>addToCart(id)}></i>
                // <p className='add' onClick={()=>setItemCount(prev=>prev+1)}>add</p>
                :<div className='food-item-counter'>
                    <i className="fa-solid fa-circle-minus" onClick={()=>removeFromCart(id)}></i>
                    <p>{cartItems[id]}</p>
                    <i className="fa-solid fa-circle-plus" onClick={()=>addToCart(id)}></i>
                </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={rate.rating} alt="" />
        </div>
  
        {/* <i class="fa-solid fa-angle-down" onClick={()=>setShow(true)}></i>
          
        {
          show?<p className="food-item-description">
          {description}
          </p>:setShow(false)
        } */}
        <div className='food-item-des-price'>
          <button onClick={()=>setShow(!show)} className='food-item-description-btn' title='description'>
            {
              !show?<i class="fa-solid fa-angle-down"></i>:<i class="fa-solid fa-angle-up"></i>
            }
          </button>
          

          
          
          <p className="food-item-price">${price}</p>
        </div>
        {
            show?<p className="food-item-description">
            {description}
            </p>:null
        }
        
      </div>
    </div>
  )
}

export default FoodItem

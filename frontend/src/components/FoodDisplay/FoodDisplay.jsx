import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = ({category},{props},ref) => {

    const {food_list,search,setSearch}=useContext(StoreContext)

  return (
    <div className='food_display' id='food_display' >
        <h2>Top Dishes Near You</h2>
        <div className="food_display_list">
            {
                food_list.map((item,index)=>{
                    console.log("item anee---------************",item)
                    if(item.category.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())){
                        if(category==="All" || category===item.category){
                            console.log("item category---->",item.category)
                            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                        }
                    }
                    
                })
            }
        </div>
    </div>
  )
}

export default FoodDisplay

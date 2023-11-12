import React from 'react'
import bag from "../images/bag.png"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useState, useEffect } from 'react' 

const ProductItem = ({title,price,picture,realCount,cart,setCart}) => {



let [count,setCount]=useState(0)
  function handleCart(){
    setCart(...cart,title,price,picture,realCount )
  } 
realCount=0
function handleCount(){
  setCount(count=count+1)
  realCount=count
  

}


  


  return (
   <div >
    <div className=' relative h-[450px]  rounded-lg overflow-hidden  bg-[#802e2e] group px-3  flex justify-center '>
      <div className=' absolute top-[-50%]  left-0 bg-[#FF6B6B] w-[100%] h-[110%] skew-y-[-9deg] group-hover:skew-y-[24deg] duration-300 '></div>
      
      <div className='z-[2] flex flex-col justify-center'>
      <img className=' w-full w-[400px] h-[314px] z-[2] group-hover:drop-shadow-[20px_40px_30px_rgba(0,0,0,1)]' src={picture} alt="" />
      <div className=' relative z-[2] self-center font-bold text-2xl z-[3] pb-1 mt-[-4px]'>{title}</div>
      <div className=' self-center  text-4xl pb-1'>{price}$</div>
      <button onClick={handleCount} className=' mt-1 border-[#FF6B6B] border-2 mb-4 w-fit mx-auto px-2 py-1 rounded-lg translate-y-[100px] group-hover:translate-y-0 transition-all duration-300 text-xl hover:bg-[#FF6B6B] active:scale-[0.9]'>Add to cart</button>
        {count<1 ?(
          
         ""
         ):
         count<10 ?(
          (<div className=' flex items-center justify-center w-8 h-8 bg-[#802e2e] rounded-full text-[#ff8888] absolute top-0 right-0 m-2 '>{count}<AiOutlineShoppingCart className='flex'/></div>)  
        ):
        (<div className=' flex items-center justify-center w-8 h-8 bg-[#802e2e] rounded-full text-[#ff8888] absolute top-0 right-0 m-2 '>{count}</div>)  

        }
     
       </div>
    </div>
    </div>
  )
}

export default ProductItem
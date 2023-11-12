import React from 'react'

import { Link } from "react-router-dom"

import ProductItem from './ProductItem'
import bag from "../images/bag.png"
import threads from "../images/threads-removebg-preview.png"
import chair from "../images/chair.png"
import bearToy from "../images/bear blush toy.png"
 

import {BiStore} from "react-icons/bi"
import {AiOutlineSearch} from "react-icons/ai"

const Products = ({cart,setCart}) => {
  return (
    <div id='Products' className='relative pt-5 pb-3 overflow-hidden' >
      <div>
        <div className=' cursor-pointer relative overflow-hidden text-[#FF6B6B]  px-2 py-2 font-bold   after:absolute after:bottom-0 after:left-0  after:w-full after:h-[2px] after:bg-black after:translate-x-[-100%] hover:after:translate-x-[-50%] after:transition-transform  hover:border-[white] before:absolute before:bottom-0 before:right-0  before:w-full before:h-[2px] before:bg-black before:translate-x-[100%] hover:before:translate-x-[50%] before:transition-transform group rounded-md hover:bg-[#FF6B6B]  w-[min(25vw,50%)] ml-[auto] mr-[auto] text-center  text-[50.1px] max-xl:text-[40px] max-[880px]:text-[33px] max-md:text-[26px] max-sm:text-[25px] max-[550px]:text-[20px]  max-[450px]:px-0 max-[450px]:py-1 max-[450px]:w-[50%]  uppercase duration-300 after:duration-300 before:duration-300  '><BiStore  color='black' className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block text-[90px] max-xl:text-[75px] max-lg:text-[65px] max-md:text-[50px] max-sm:text-[40px]'/>products</div>
      </div>
      <div className=' w-[90%] border-2 border-[#802e2e] min-h-[200px] mt-4 mx-auto rounded-3xl relative overflow-hidden'>
        <div className='flex px-2 min-[1000px]:px-28 mx-auto py-2 items-center justify-between border-b-2 border-[#802e2e] bg-[#802e2e72] '>
<Link to={"/ProductsPage"} className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group mr-2">
<span className="w-48 h-48 rounded rotate-[-40deg] bg-[#802e2e] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span className="relative w-full text-left text-[#FF6B6B] transition-colors duration-300 ease-in-out group-hover:text-white">See all</span>
</Link>
          
          <div className='flex-[1] grow border-[1.5px] rounded-xl border-[#802e2e] bg-[#FF6B6B]  h-[auto] px-4 pt-2 relative overflow-hidden '> 
            <textarea className=' font-semibold text-[#6b2525] caret-[#802e2e] bg-[#FF6B6B] flex-[1] w-[100%] resize-none w=[100%] h-[100%] focus:outline-0  ' name="" id="" rows="1" ></textarea>
            <a href=""><div className=' flex items-center justify-center overflow-hidden absolute  text-center h-full right-0 top-0   border-l-[1.5px] border-[#802e2e] bg-[#802e2e] cursor-pointer '><AiOutlineSearch color='#FF6B6B'  size={30} className=' hover:rotate-[90deg] transition-all duration-300'/></div></a>
          </div>
          
        </div>
        <div className=' mx-auto w-full grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] max-[500px]:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] px-10 max-[400px]:px-3 py-5 gap-6 max-[400px]:px-2 max-[350px]:px-0'>
        <ProductItem title={"bag"} price={75}  picture={bag} realCount={2}/>
        <ProductItem title={"threads"} price={20} picture={threads} />
        <ProductItem title={"chair"} price={40} picture={chair}/>
        <ProductItem title={"bear toy"} price={9.99} picture={bearToy}/>

        </div> 
      </div>
    </div>
  )
}

export default Products
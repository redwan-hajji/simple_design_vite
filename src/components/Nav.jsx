import React from 'react'

import { Link } from 'react-router-dom'

import {AiOutlineMenu,AiOutlineHome} from 'react-icons/ai'
import {IoMdCart} from "react-icons/io"
import {BsPersonVcard} from "react-icons/bs"
import {SlEnvolope} from "react-icons/sl"
import{BiStore} from "react-icons/bi"

import { useState } from 'react'
import Products from './products'

const Nav = () => {


let [nav,setNav]=useState(false)

const handleNav= ()=>{
  setNav(!nav)
}

  return (
    <>
    <div className='px-14 h-[50px] flex justify-between items-center max-md:px-4 bg-[#802e2e] '>
     <div className=' font-bold uppercase cursor-pointer text-2xl'>logo</div>
     <AiOutlineMenu size={25} color='#FF6B6B' className=' md:hidden cursor-pointer z-[99] hover:drop-shadow-xl' onClick={handleNav}/>
     <ul className=' max-md:hidden  capitalize flex justify-between'>
      <Link to={"/"}><li className=' relative overflow-hidden text-[#FF6B6B] ml-5 px-2 py-1 font-semibold  after:absolute after:bottom-0 after:left-0  after:w-full after:h-[2px] after:bg-black after:translate-x-[-100%] hover:after:translate-x-[-50%] after:transition-transform duration-300 hover:border-[white] before:absolute before:bottom-0 before:right-0  before:w-full before:h-[2px] before:bg-black before:translate-x-[100%] hover:before:translate-x-[50%] before:transition-transform group rounded-md hover:bg-[#FF6B6B] text-lg '><AiOutlineHome size={27} color='black' className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block'/>home</li></Link>
      <Link to={"/ProductsPage"}> <li className=' relative overflow-hidden text-[#FF6B6B] ml-5 px-2 py-1 font-semibold   after:absolute after:bottom-0 after:left-0  after:w-full after:h-[2px] after:bg-black after:translate-x-[-100%] hover:after:translate-x-[-50%] after:transition-transform duration-300 hover:border-[white] before:absolute before:bottom-0 before:right-0  before:w-full before:h-[2px] before:bg-black before:translate-x-[100%] hover:before:translate-x-[50%] before:transition-transform group rounded-md hover:bg-[#FF6B6B] text-lg'><BiStore size={27} color='black' className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block'/>products</li></Link>
      <Link to={"/AboutPage"}><li className=' relative overflow-hidden text-[#FF6B6B] ml-5 px-2 py-1 font-semibold   after:absolute after:bottom-0 after:left-0  after:w-full after:h-[2px] after:bg-black after:translate-x-[-100%] hover:after:translate-x-[-50%] after:transition-transform duration-300 hover:border-[white] before:absolute before:bottom-0 before:right-0  before:w-full before:h-[2px] before:bg-black before:translate-x-[100%] hover:before:translate-x-[50%] before:transition-transform group rounded-md hover:bg-[#FF6B6B] text-lg'><BsPersonVcard size={27} color='black' className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block'/>about</li></Link>
      <Link to={"/ContactPage"}><li className=' relative overflow-hidden text-[#FF6B6B] ml-5 px-2 py-1 font-semibold   after:absolute after:bottom-0 after:left-0  after:w-full after:h-[2px] after:bg-black after:translate-x-[-100%] hover:after:translate-x-[-50%] after:transition-transform duration-300 hover:border-[white] before:absolute before:bottom-0 before:right-0  before:w-full before:h-[2px] before:bg-black before:translate-x-[100%] hover:before:translate-x-[50%] before:transition-transform group rounded-md hover:bg-[#FF6B6B] text-lg'><SlEnvolope size={27} color='black' className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block'/>contact</li></Link> 
      {/* <Link to={"/CartPage"}><li className=' relative overflow-hidden text-[#FF6B6B] ml-5 px-2 py-1 font-semibold   after:absolute after:bottom-0 after:left-0  after:w-full after:h-[2px] after:bg-black after:translate-x-[-100%] hover:after:translate-x-[-50%] after:transition-transform duration-300 hover:border-[white] before:absolute before:bottom-0 before:right-0  before:w-full before:h-[2px] before:bg-black before:translate-x-[100%] hover:before:translate-x-[50%] before:transition-transform group rounded-md hover:bg-[#FF6B6B] text-lg'><IoMdCart size={27} color='black' className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block'/>Cart</li></Link>               */}
     </ul>
    </div>
    {nav ?(
      <div id='phoneNav' className=' z-[20] fixed top-0 right-0 w-[min(50%,200px)] h-screen bg-[#ffbebed7] flex items-center justify-center flex-col capitalize animate-menuRight gap-5 '>
        <Link to={"/"} className=' py-1 w-[95%] text-center bg-[#FF6B6B] font-semibold text-lg rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:text-[#FF6B6B] transition-all group  relative hover:scale-[1.02]' onClick={handleNav}> <AiOutlineHome size={30} className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block group-hover:text-[BLACK]'/>home</Link>
        <Link to={"/ProductsPage"} className=' py-1 w-[92%] text-center bg-[#FF6B6B] font-semibold text-lg rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:text-[#FF6B6B] transition-all group  relative hover:scale-[1.02]' onClick={handleNav}> <BiStore size={30} className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block group-hover:text-[BLACK]'/>products</Link>  
        <Link to={"/AboutPage"} className=' py-1 w-[89%] text-center bg-[#FF6B6B] font-semibold text-lg rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:text-[#FF6B6B] transition-all group  relative hover:scale-[1.02]' onClick={handleNav}> <BsPersonVcard size={30} className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block group-hover:text-[BLACK]'/>about</Link>
        <Link to={"/ContactPage"} className=' py-1 w-[86%] text-center bg-[#FF6B6B] font-semibold text-lg rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:text-[#FF6B6B] transition-all group  relative hover:scale-[1.02]' onClick={handleNav}> <SlEnvolope size={30} className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block group-hover:text-[BLACK]'/>contact</Link>
        {/* <Link to={"/Cart"}  className=' py-1 w-[83%] text-center bg-[#FF6B6B] font-semibold text-lg rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:text-[#FF6B6B] transition-all group  relative hover:scale-[1.02]' onClick={handleNav}> <IoMdCart size={30} className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block group-hover:text-[BLACK]'/>cart</Link>       */}
      </div>

    ) : (
''
    )}
    </>
  )
}

export default Nav
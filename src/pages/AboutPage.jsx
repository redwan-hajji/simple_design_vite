import React from 'react'
import Nav from '../components/nav'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div>
    <Nav></Nav>
    <section className="flex items-center py-10 bg-stone-100 xl:h-screen font-poppins dark:bg-[#802e2e] max-h-[calc(100vh-50px)] ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6 ">
            <div className="flex flex-wrap ">
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <div className="relative">
                        <img src="https://i.postimg.cc/QtyYkbxp/pexels-andrea-piacquadio-927022.jpg" alt=""
                            className="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"/>
                        <div
                            className="absolute z-10 hidden w-full h-full bg-[#FF6B6B] rounded-bl-[80px] rounded -bottom-6 right-6 lg:block">
                        </div>
                        <div
                            className="absolute z-50 text-[#FF6B6B] transform -translate-y-1/2 cursor-pointer top-1/2 left-[46%] hover:text-[#e94e4e]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="w-14 h-14 bi bi-play-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                    <div className="relative">
                        <h1
                            className="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-[#FF6B6B] font-bold  dark:text-[#FF6B6B] opacity-5 md:block hidden">
                            About Us
                        </h1>
                        <h1 className="pl-2 text-3xl font-bold border-l-8 border-[#FF6B6B] md:text-5xl dark:text-white">
                            Welcome to our site
                        </h1>
                    </div>
                    <p className="mt-6 mb-10 text-base leading-7  text-[#FF6B6B]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                    <Link to={"/AboutPage"}
                        className="px-4 py-3 text-gray-50 transition-all transform bg-[#FF6B6B] rounded-[80px] hover:[#FF6B6B] dark:hover:text-gray-100 dark:text-gray-100 ">
                        Learn more
                    </Link>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default AboutPage
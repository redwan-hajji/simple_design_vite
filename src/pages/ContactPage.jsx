import React from 'react'
import Nav from '../components/nav'
import { SlEnvolope } from "react-icons/sl"

const ContactPage = () => {
  return (
    <div className=' relative w-full h-screen bg-[#FF6B6B]'>
    <Nav></Nav>
    <div className=" container my-5 mx-auto md:px-6">

  <section className="mb-32 text-center">
    <div className="mx-auto max-w-[700px] md:px-3 bg-[#802e2e] rounded-xl">
      <div className=' mt-4 cursor-pointer relative overflow-hidden text-[#FF6B6B]  px-2 py-2 font-bold   after:absolute after:bottom-0 after:left-0  after:w-full after:h-[2px] after:bg-black after:translate-x-[-100%] hover:after:translate-x-[-50%] after:transition-transform  hover:border-[white] before:absolute before:bottom-0 before:right-0  before:w-full before:h-[2px] before:bg-black before:translate-x-[100%] hover:before:translate-x-[50%] before:transition-transform group rounded-md hover:bg-[#FF6B6B]  w-[min(25vw,50%)] ml-[auto] mr-[auto] text-center  text-[50.1px] max-xl:text-[40px] max-[880px]:text-[33px] max-md:text-[26px] max-sm:text-[25px] max-[550px]:text-[20px]  max-[450px]:px-0 max-[450px]:py-1 max-[450px]:w-[50%]  uppercase duration-300 after:duration-300 before:duration-300  '><SlEnvolope color='black' className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block text-[90px] max-xl:text-[75px] max-lg:text-[65px] max-md:text-[50px] max-sm:text-[40px]'/>Contact</div>
      <form>
        <div className="relative mb-6 " data-te-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInput90"
            placeholder="Name" />
          <label
            className=" pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-[#FF6B6B] dark:peer-focus:text-primary"
            htmlFor="exampleInput90"
            >Name
          </label>
        </div>
        <div className="relative mb-6 " data-te-input-wrapper-init>
          <input
            type="email"
            className=" peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInput91"
            placeholder="Email address" />
          <label
            className="   pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#FF6B6B] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-[#FF6B6B] dark:peer-focus:text-primary"
            htmlFor="exampleInput91"
            >Email address
          </label>
        </div>
        <div className="relative mb-6  " data-te-input-wrapper-init>
          <textarea
            className="  peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Your message"></textarea>
          <label
            htmlFor="exampleFormControlTextarea1"
            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#FF6B6B] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-[#FF6B6B] dark:peer-focus:text-primary"
            >Message</label
          >
        </div>
        <div
          className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
          <input
            className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="checkbox"
            value=""
            id="exampleCheck96"
            defaultChecked />
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="exampleCheck96">
            Send me a copy of this message
          </label>
        </div>
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          className=" bg-[#FF6B6B] mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-lg font-medium uppercase leading-normal text-[#802e2e] shadow-[0_4px_9px_-4px_#FF6B6B] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_#FF6B6B,0_4px_18px_0_#FF6B6B] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_#FF6B6B,0_4px_18px_0_#FF6B6B] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_#FF6B6B,0_4px_18px_0_#FF6B6B] dark:shadow-[0_4px_9px_-4px_#FF6B6B] dark:hover:shadow-[0_8px_9px_-4px_#FF6B6B,0_4px_18px_0_#FF6B6B] dark:focus:shadow-[0_8px_9px_-4px_#FF6B6B,0_4px_18px_0_#FF6B6B] dark:active:shadow-[0_8px_9px_-4px_#FF6B6B,0_4px_18px_0_#FF6B6B]">
          Send
        </button>
      </form>
    </div>
  </section>

</div>

    </div>
  )
}

export default ContactPage
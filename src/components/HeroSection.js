import React from 'react'
import { HiOutlineArrowRight } from "react-icons/hi";
export const HeroSection = () => {
  return (
    // wrapper div
    <div id='hero' className= ' bg-black'>
        {/* maindiv */}
        <div className=' text-white w-full relative z-10 h-[730px]  text-center '>
         <h1 className='text-[42px] font-Roboto animate-fade-in tracking-tight pt-56 '>R.A MOHAMMED HARIS</h1>
         <h3 className='text-[20px]'> Full stack developer</h3>
         {/* button div */}
       <div className='flex  items-center justify-center gap-3 pt-6'>
         <button className='w-[200px] py-2  px-4 pb-0  rounded-[50px] flex items-center justify-items-center justify-center  bg-blue-500  '><a href="#" className='text-[20px]  '>View my Work <HiOutlineArrowRight className='left-[130px] -top-6  relative'/></a></button>
         <button  className='w-[200px] bg-transparent border border-solid py-2  px-4 pb-4 rounded-[50px] hover:bg-white hover:text-black'>
            <a href="#" className='text-[20px]'>
                contact me
            </a>
         </button>
       </div>
        </div>
    </div>





  )
}
export default HeroSection
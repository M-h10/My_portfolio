import React, { useState } from 'react'
import image2 from '../assets/img/imag2.jpg'
import { FaLinkedinIn, } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";

export const Header = () => {
const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <section id='header' className=' fixed w-full backdrop-blur-md bg-black/70 flex mx-0 py-2 items-center  justify-between bg-black '>
            <div className='flex ' >

                <img src={image2} alt="" className='w-[50px] h-[50px] border   object-cover rounded-full' />
                <p className=' font-BebasNeue text-[30px] px-3 text-white'> HARIS </p>

            </div>
            <nav className=' hidden md:block' >
                <ul className='flex   text-white text-[18px] r'>

                    <li > <button className='pr-5 pl-10   hover:text-cyan-600'>About    </button>   </li>
                    <li> <button className=' pr-5 pl-10 hover:text-cyan-600'>projects </button>   </li>
                    <li > <button className='pr-5 pl-10   hover:text-cyan-600 '>Resume   </button>   </li>
                    <li > <button className='pr-5 pl-10   hover:text-cyan-600   '>contact  </button>  </li>
                    <li className='pl-5 w-14 top-1 relative  hover:text-cyan-600'> <button><FaLinkedinIn /></button></li>
                    <li className=' w-14 top-1 relative  hover:text-cyan-600'> <button><BiLogoGmail /></button></li>
                </ul>

            </nav>

            {/* mobile menu */}

           { toggleMenu && <nav className=' mobile_menu' >
                <ul className='flex  flex-col md:hidden gap-3  text-white text-[18px] r'>

                    <li > <button className='pr-5 pl-10   hover:text-cyan-600'>About    </button>   </li>
                    <li> <button className=' pr-5 pl-10 hover:text-cyan-600'>projects </button>   </li>
                    <li > <button className='pr-5 pl-10   hover:text-cyan-600 '>Resume   </button>   </li>
                    <li > <button className='pr-5 pl-10   hover:text-cyan-600   '>contact  </button>  </li>
                    <ul>
                        <li className='flex mt-2'>
                            <li className='pl-10  w-14 t hover:text-cyan-600'> <button><FaLinkedinIn /></button></li>
                            <li className=' pl-3 w-14  hover:text-cyan-600'> <button><BiLogoGmail /></button></li>
                        </li>
                    </ul>
                </ul>


            </nav>}
            <button onClick={()=> setToggleMenu(!toggleMenu)} className='w-[50px] block md:hidden'> <a href="#" className='text-white '> < HiMenu /> </a> </button>
        </section>
    )
}
export default Header
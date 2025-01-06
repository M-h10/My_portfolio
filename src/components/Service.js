import React from 'react'
import { DiCode } from "react-icons/di";
import { FaDatabase } from "react-icons/fa6";
export const Service = () => {
  return (
    <section id='service' className='bg-black pt-16'>
        <div  className=' justify-center justify-items-center'>
        <h1 className='font-Poppins text-[32px]  text-white'>Services</h1>
        </div>
        <div className='grid grid-cols-2 pb-16   mt-11 justify-center justify-items-center'>
            <div className='w-[410px] text-center bg-white h-[250px] rounded-lg  hover:transform hover:-translate-y-2 transition-all duration-300'>
                <h1 className='pl-[160px]'><DiCode className='text-[60px] h-16 text-black ' /></h1>
                <h2 className='text-[30px] font-BebasNeue '>Web Development</h2>
                <p className='text-[20px] font-mono'>Building responsive and performant web <br />applications using modern technologies</p>

            </div>
            <div className='w-[410px] text-center bg-white h-[250px] rounded-lg  hover:transform hover:-translate-y-2 transition-all duration-200 '>
                <h1 className='pl-[180px]'><FaDatabase className='text-[30px] h-16 text-black ' /></h1>
                <h2 className='text-[30px] font-BebasNeue '>Backend</h2>
                <p className='text-[18px] font-mono '>"I specialize in building robust and scalable backend solutions using technologies like Node.js, and SQL databases. With <br /> expertise in API development,and secure architecture, <br /> I deliver efficient and high-performance server-side systems."</p>

            </div>
        </div>
    </section>
  )
}
export default Service

import React, { useState } from 'react';

import { HiPhone, HiMap,  } from "react-icons/hi2";
import { BiLogoGmail,BiSend } from "react-icons/bi";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    return (


        <section id='contact' className='bg-white w-full pt-7 h-[600px] text-black'>
            <div className='justify-center justify-items-center   '>
                <h1 className='text-[32px] font-serif'>Get in Touch</h1>
            </div>
            <div className=' pt-10'>
                <div className='grid  md:grid-cols-2 gap- mx-20 '>
                    <div className='flex flex-col gap-1 w-1/3 '>
                        <h1 className='text-[25px]'>Contact information</h1>
                        <ul className=''>
                            <li className='flex items-center  gap-1 text-[18px]'>
                                <span><BiLogoGmail className='text-[20px] ' /></span> harismohammed1014@gmail.com
                            </li>

                            <li className='flex items-center gap-1 pt-5 text-[18px]'>
                                <span><HiPhone className='text-[20px] ' /></span> 9940350725
                            </li>
                            <li className='flex items-center gap-1  pt-5 text-[18px]'>
                                <span><HiMap className='text-[20px] ' /></span> Chennai
                            </li>
                        </ul>

                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6 w-[600px]">
                        <div>
                            <input
                                type="text"
                                name='name'
                                placeholder='Your Name'
                                onChange= {handleChange}
                                value={formData.name}
                                className='w-full px-4 py-2 rounded-lg bg-black/50 focus:outline-none focus:ring-2 focus:ring-black/50'
                                required
                            />

                        </div>
                        <div>
                            <input
                                type="email"
                                name='email'
                                placeholder='Your Email'
                                onChange={handleChange}
                                value={formData.email}
                                className='w-full px-4 py-2 bg-black/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50'
                                required
                            />

                        </div>
                        <div>
                            <input
                                type="text"
                                name='subject'
                                placeholder='Subject'
                                onChange={handleChange}
                                value={formData.subject}
                                className='w-full px-4 py-2 bg-black/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50'
                                required
                            />

                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder='Message'
                                type='text'
                                className='w-full px-4 py-2 bg-black/50  rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50'
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                            ></textarea>
                        </div>
                        <div>
                            <button
                            
                            className='px-4 text-[20px] hover:bg-white hover:text-black flex items-center gap-2 bg-black text-white  rounded-xl py-2'>
                                Send message <BiSend/>
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    )
}
export default Contact
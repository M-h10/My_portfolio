import React from 'react'
import image2 from '../assets/img/imag2.jpg'
// import resume from ''
export const About = () => {
  return (
    <section id='about'>
    <div className='justify-center items-center justify-items-center'>

        <h1 className=' font-Poppins text-gray-600 pt-[52px] font-extralight text-[42px]'>
            About me
        </h1>

  </div>
  <div className='flex mb-3  mt-10 flex-col mx-4 items-center justify-center md:gap-5 md:flex-row'>
    <p className='font-Poppins w-1/2 text-[20px] font-extralight md:order-2'>
    
   

I am a dedicated and skilled Full-Stack Web Developer with comprehensive 
expertise in designing and developing modern, high-performance web applications. <br />
 Proficient in cutting-edge technologies, including HTML5, Tailwind CSS, JavaScript, <br />
  React.js, Node.js, and database management systems such as PostgreSQL and MySQL, I deliver efficient, <br />
   scalable, and user-centric solutions.

My passion lies in creating intuitive and responsive user interfaces,<br />
 coupled with robust back-end systems that ensure seamless functionality. <br />
  I pride myself on a meticulous approach to problem-solving and a commitment to delivering exceptional results, whether building solutions from the ground up or refining existing applications.

Let’s connect to transform innovative ideas into impactful digital solutions.
    </p>
    <div className='md:order-1 pt-8 w-1/3 hover:grayscale-0 grayscale transition duration-300'>
    <img src={image2} alt="" className=' h-[600px] w-[500px]  object-cover shadow-2xl ' ></img>
    </div>
  </div>
  <button className='relative left-[700px] -top-24'>
  <a 
  href="/resume.pdf" 
  download 
  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
>
  Download My Resume
</a>

  </button>
    </section>
    
  )
}
export default About
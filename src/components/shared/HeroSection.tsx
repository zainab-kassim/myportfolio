import React from 'react'
import Image from 'next/image'
import pacmanl from '../../images/icons/Untitled design (1).png'
import pacman2 from '../../images/icons/Untitled design.png'

export default function HeroSection() {
  return (
    <>
      <div className='flex sticky top-10 z-0 md:justify-evenly md:mx-auto justify-between  items-center  sm:px-6 px-5  border-[0.5px] backdrop-blur-3xl border-[#565151] py-3 rounded-xl '>
        <div className='md:flex md:justify-center  hidden sm:gap-8 gap-6 items-center md:text-md text-[16px] font-sans '>
          <div><a href="">About me</a></div>
          <div><a href="">Project</a></div>
          <div><a href="">Contact</a></div>
        </div>
        <div className='md:hidden'>
          <Image width={40} height={40} alt='icon' className=' md:w-14 md:h-14 w-8 h-8 invert-100' src='https://cdn-icons-png.flaticon.com/512/2549/2549900.png' />
        </div>


        <div className='md:hidden pl-5'>
          <Image width={40} height={40} alt='icon' className=' md:w-8 md:h-8 w-5 h-5' src='https://cdn-icons-png.flaticon.com/512/7915/7915462.png' />
        </div>

        {/* icon and button */}
        <div className='md:flex hidden  justify-around px-2 lg:w-[24%] md:w-[30%]  items-center border-r-[0.5px]   border-l-[0.5px] border-[#565151]'>
          <a href='#'><Image width={40} height={40} alt='icon' className=' w-9.5 h-9' src='https://cdn-icons-png.flaticon.com/512/2504/2504923.png' /></a>
          <a href='#'><Image width={40} height={40} alt='icon' className=' w-9.5 h-9' src='https://cdn-icons-png.flaticon.com/512/2504/2504911.png' /></a>
          <a href='#'><Image width={40} height={40} alt='icon' className=' w-9.5 h-9' src='https://cdn-icons-png.flaticon.com/512/831/831306.png' /></a>
        </div>

        <div className='md:block hidden'>
          <button className='px-7 py-3 font-sans rounded-xl font-semibold border-[0.5px] border-[#565151]'> Get in touch </button>
        </div>
      </div>




      <div className='flex md:flex-row flex-col justify-center items-center gap-12 py-5 mt-[30px] md:mt-36'>
        <div className='md:block hidden'>
          <Image width={1300} height={400} alt='pacman-largescreen' className='mx-auto' src={pacmanl} />
        </div>

        <div className='md:mx-auto mb-8 mt-28 md:hidden block'>
          <Image width={500} height={280} alt='pacman-smallscreen' className='mx-auto' src={pacman2} />
        </div>

        <div className=''>
          <h2 className='text-4xl font-bold '>Hey, I’m <span className=''> 𝒁𝑨𝑰𝑵𝑨𝑩. </span> </h2>
          <h2 className='lg:text-4xl text-3xl font-extrabold pb-8 bg-gradient-to-r from-[#eb3349] to-[#9733ee] bg-clip-text text-transparent'>Fullstack Software Engineer</h2>
          I enjoy turning frameworks and designs into well driven philosophy art that can be gone,with 3+ Years of experience in the field. designs into well driven philosophy art that can be gone, with 3+ Years of experience in the field.
        </div>

      </div>
    </>
  )
}

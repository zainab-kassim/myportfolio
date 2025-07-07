import React from 'react'
import Image from 'next/image'
import pacmanl from '../../images/icons/Untitled design (1).png'
import pacman2 from '../../images/icons/Untitled design.png'

export default function HeroSection() {
  return (
    <>
      <div className='flex md:justify-evenly md:mx-auto justify-between  items-center  sm:px-6 px-5  border-[0.5px] bg-[#0F0D0D] border-[#565151] py-3 rounded-xl '>
        <div className='flex justify-center sm:gap-8 gap-6 items-center md:text-md text-sm italic font-sans'>
          <div><a href="">About me</a></div>
          <div><a href="">Project</a></div>
          <div><a href="">Contact</a></div>
        </div>

        <div className='md:hidden border-l-[0.5px] sm:pl-5  pl-2 border-[#565151]'>
          <Image width={40} height={40} alt='icon' className=' md:w-8 md:h-8 w-5 h-5' src='https://cdn-icons-png.flaticon.com/512/7915/7915462.png' />
        </div>

        {/* icon and button */}
        <div className='md:flex hidden gap-7   px-8  items-center border-r-[0.5px]   border-l-[0.5px] border-[#565151]'>
          <a href='#'><Image width={40} height={40} alt='icon' className=' w-9.5 h-9' src='https://cdn-icons-png.flaticon.com/512/2504/2504923.png' /></a>
          <a href='#'><Image width={40} height={40} alt='icon' className=' w-9.5 h-9' src='https://cdn-icons-png.flaticon.com/512/2504/2504911.png' /></a>
          <a href='#'><Image width={40} height={40} alt='icon' className=' w-9.5 h-9' src='https://cdn-icons-png.flaticon.com/512/831/831306.png' /></a>
        </div>

        <div className='hidden md:flex'>
          <button className='px-6 py-3 font-sans rounded-2xl font-semibold border-[0.5px] border-[#565151]'> Get in touch </button>
        </div>
      </div>

      <div className='flex md:flex-row flex-col items-center mt-[30px] md:mt-36 max-w-6xl  mx-auto'>
        <div className='md:mx-auto xl:px-8 my-10 md:block hidden'>
          <Image width={540} height={300} alt='pacman-largescreen' className='mx-auto' src={pacmanl} />
        </div>

         <div className='md:mx-auto my-8 md:hidden block'>
          <Image width={280} height={280} alt='pacman-smallscreen' className='mx-auto' src={pacman2} />
        </div>

        <div className='md:px-10 mx-auto'>
          <p className='xl:text-5xl lg:text-4xl text-3xl font-extrabold'>Hey, I’m Zainab.</p>
          <p className='lg:text-4xl text-3xl font-extrabold pb-8'>Full stack Software Engineer</p>
          <p>I enjoy turning frameworks and designs into well driven philosophy art that can be gone,with 3+ Years of experience <br/> in the field.d designs into well driven philosophy art that can be gone, with 3+ Years of experience in the field.</p>
        </div>

      </div>
    </>
  )
}

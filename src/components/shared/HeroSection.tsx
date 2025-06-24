import React from 'react'
import icon1 from '../../images/icons/cat (1).png'
import Image from 'next/image'
import icon2 from '../../images/icons/linkedin.png'
import icon3 from '../../images/icons/mail (1).png'
import icon4 from '../../images/icons/github (2).png'

export default function HeroSection() {
  return (
    <div className='rounded-b-[20px] border-b-[0.2px] border-b-neutral-700  pt-28 pb-12 px-5 bg-black -z-0 relative'>
      {/* navbar */}
      <div className='relative max-w-2xl sm:mx-auto mx-3 shadow-sm shadow-neutral-700 rounded-2xl  py-4 px-8 text-md text-white tracking-tight bg-black'>
        <Image
          className='absolute bottom-10  left-1/2 -translate-x-1/2 -z-50'
          src={icon1}
          alt='nav-icon'
          width={80}
          height={70}
        />
        <div className='flex justify-evenly items-center relative  bg-black gap-3.5'>
          <a href='#'>About me</a>
          <a href='#'>Project</a>
          <a href='#'>Contact</a>
        </div>
      </div>

      {/* intro section */}
      <div className='max-w-7xl mx-auto px-3'>
        <div className='max-w-7xl mx-auto sm:my-16 my-10 rounded-xl'>
          <div className='flex justify-start items-center rounded-tr-xl rounded-tl-xl  space-x-3.5  px-5 py-5 bg-[#1b1b1b]'>
            <div className='rounded-full w-7 h-7 bg-[#DD4444]'></div>
            <div className='rounded-full w-7 h-7 bg-[#3D466F]'></div>
            <div className='rounded-full w-7 h-7 bg-[#3BD079]'></div>
          </div>
          <div className='px-10 pt-20 pb-14 bg-[#2e2e2e]  rounded-b-xl'>
            <p className="text-5xl tracking-tight font-extrabold flex flex-wrap  items-center italic pb-3">
              Hi 
               <img  src="/72.png" alt="waving hand" className="w-12 h-12 flex align-middle mx-3 waving-hand" />,  
              <span className="sm:ml-5">
                I am Zainab
              </span>
            </p>

            <p className='text-5xl tracking-tight font-extrabold italic'>Fullstack <span className='bg-gradient-to-r font-medium from-[#D93030] via-[#DC8888] via-54% to-[#E0E0E0] to-93% bg-clip-text text-transparent'>Software Engineer</span></p>
            <div className='text-[20px] pt-8 italic tracking-wide'>I focus on building <span className='font-extrabold'>user friendly</span> and  <span className='font-extrabold'>visually appealing</span><br /> site which make you and i both happy</div>

            <div className="flex justify-start items-center gap-x-5 w-full pt-12 group">
              {/* Left Icon */}
              <div className="transition-all duration-500 hover:-translate-y-5 hover:scale-110 rounded-full flex items-center justify-center w-14 h-14 bg-[#3791FF]">
                <Image className="w-11 h-11" src={icon3} alt="icon2" />
              </div>

              {/* Center Icon */}
              <div className="transition-all duration-500 hover:-translate-y-5 hover:scale-110 rounded-full flex items-center justify-center w-14 h-14 bg-[#FFFFFF]">
                <Image className="w-8 h-8" src={icon2} alt="icon3" />
              </div>

              {/* Right Icon */}
              <div className="transition-all duration-500 hover:-translate-y-5 hover:scale-110 rounded-full flex items-center justify-center w-14 h-14 bg-[#430090]">
                <Image className="w-9 h-9" src={icon4} alt="icon4" />
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

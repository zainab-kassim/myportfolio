import React from 'react'
import Image from 'next/image'
import pacmanl from '../../images/icons/Untitled design (1).png'
import pacman2 from '../../images/icons/Untitled design.png'

export default function HeroSection() {
  return (
    <>
      <div className='flex sticky top-10 z-2 md:justify-evenly md:mx-auto justify-between  items-center  sm:px-6 px-5  border-[0.5px] inset-shadow-sm shadow-xl/30 backdrop-blur-3xl border-[#565151] py-3 rounded-xl '>
        <div className='md:flex md:justify-center  hidden sm:gap-8 gap-6 items-center md:text-md text-[16px] font-sans '>
          <div><a href="">About me</a></div>
          <div><a href="">Project</a></div>
          <div><a href="">Contact</a></div>
        </div>
        <div className='md:hidden'>
          <Image width={40} height={40} alt='icon' className=' w-6 h-6 invert-100' src='https://cdn-icons-png.flaticon.com/512/2549/2549900.png' />
        </div>


        <div className='md:hidden pl-5'>
          <Image width={40} height={40} alt='icon' className=' md:w-8 md:h-8 w-5 h-5' src='https://cdn-icons-png.flaticon.com/512/7915/7915462.png' />
        </div>

        {/* icon and button */}
        <div className="relative hidden md:flex items-center justify-center border-x border-[#565151]  md:px-[0.5px] lg:w-[24%] md:w-[25%] group">
          <a href='#'><Image width={50} height={40} alt='icon' className=' w-9 h-9 -rotate-12 relative left-4 transition-all duration-600 group-hover:-translate-x-8 group-hover:rotate-0' src='https://cdn-icons-png.flaticon.com/512/2504/2504923.png' /></a>
          <a href='#'><Image width={50} height={40} alt='icon' className=' w-9 h-9 relative z-10  rotate-0 transition-all duration-600 group-hover:-translate-x-0' src='https://cdn-icons-png.flaticon.com/512/2504/2504911.png' /></a>
          <a href='#'><Image width={50} height={40} alt='icon' className=' w-9 h-9 relative -left-4 rotate-12 transition-all duration-600 group-hover:translate-x-8 group-hover:rotate-0' src='https://cdn-icons-png.flaticon.com/512/831/831306.png' /></a>
        </div>



        <div className="md:flex hidden items-center justify-center relative">
          <span className="absolute translate-y-0.4 top-[17.8px] right-4 flex size-3.5 ">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75"></span>
            <span className="relative inline-flex size-3.5 rounded-full bg-green-500"></span>
          </span>


          <button className="pl-5  pr-10 inset-shadow-sm shadow-xl/30 py-3 font-sans relative rounded-xl font-semibold border border-[#565151]">
            Get in touch
          </button>
        </div>

      </div>




      <div className='flex md:flex-row flex-col justify-center items-center relative md:gap-16 lg:gap-24 py-5 mt-[40px] md:mt-36'>
        <div className='md:block hidden'>
          <Image width={1520} height={400} alt='pacman-largescreen' className='mx-auto animate-vertical-bounce animate-range-rapid animate-iteration-count-infinite' src={pacmanl} />
        </div>

        <div className='md:mx-auto mb-3 mt-16 md:hidden block'>
          <Image width={500} height={280} alt='pacman-smallscreen' className='mx-auto animate-jump animate-range-rapid animate-iteration-count-infinite' src={pacman2} />
        </div>

        <div className=''>
          <h2 className='lg:text-3xl text-2xl font-bold '>Hey, I’m <span className=''> ZAINAB. </span> </h2>
          <h2 className='lg:text-[40px] md:text-[28px] text-3xl font-black pb-8 bg-gradient-to-r from-[#eb3349] to-[#9733ee] bg-clip-text text-transparent'>Fullstack Software Engineer</h2>
          <p className='lg:text-lg md:text-[14px] text-md'>
            With 3+ years of hands-on experience, I specialize in building functional, responsive websites that look great and feel intuitive. I find real joy in bringing designs to life and creating smooth user experiences that leave a lasting impression. It’s something I truly enjoy and find purpose in doing
          </p>

          <div className='flex w-auto gap-3 flex-row '>
            <button className="relative  mt-6 inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-[#9733ee] focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute w-auto inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#eb3349_0%,#393BB2_50%,#eb3349_100%)]" />
              <span className="inline-flex text-md  h-full w-full cursor-pointer items-center justify-center rounded-xl bg-gray-900 sm:px-10 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                resume
              </span>
            </button>


            <div className="md:hidden  mt-6 items-center relative">
              <span className="absolute translate-y-0.4 top-[17.8px] left-31 flex size-3.5 ">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75"></span>
                <span className="relative inline-flex size-3.5 rounded-full bg-green-500"></span>
              </span>

              <button className="pl-5  inset-shadow-sm shadow-xl/30 pr-10 py-3 font-sans relative rounded-xl font-semibold border border-[#565151]">
                Get in touch
              </button>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

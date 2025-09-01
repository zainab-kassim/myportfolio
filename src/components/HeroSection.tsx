import React from 'react'
import Image from 'next/image'
import githublogo from '../images/icons/github (3).png'
import memoji from '../images/icons/Me-moji.png'
import ScrollReveal from './ui/ScrollReveal'

export default function HeroSection() {
  return (
    <>
      <div className='sm:px-14 px-5 sticky top-8 z-20 '>
        <div className='flex  mx-auto max-w-sm sm:max-w-3xl sm:justify-between justify-center  justify-items-center px-3   sm:px-5 items-center bg-[#121212]/67  border-[0.5px] inset-shadow-sm shadow-xl/30 backdrop-blur-3xl  border-[#8f8f8f4c] py-2 rounded-full '>
          <Image height={40} width={40} className='w-8 h-8 sm:flex hidden' alt='logo' src='https://img.icons8.com/?size=100&id=a1I0W_J1dvei&format=png&color=ffffff' />
          <div className='flex flex-row lg:gap-12 md:gap-9 gap-6  justify-center  text-white tracking-wide items-center lg:text-[13px] text-sm'>
            <div><a href="#Projects">Projects</a></div>
            <div><a href="#Aboutme">About</a></div>
            <a href="https://docs.google.com/document/d/1lVQgfJbiybqjRakxfJUksAl2DdnFSI1YKD6itd8YFQM/edit?usp=sharing" target='_blank'>
              <div className="p-[0.5px] bg-white rounded-3xl cursor-pointer shadow-[0_0_7px_rgba(225,225,225,0.8)]">
                <div className="rounded-full py-2 px-4 md:py-3 md:px-6 text-black text-xs   backdrop-blur-2xl">
                  resume
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>


      <div className='flex flex-col sm:px-14 px-5  justify-center items-center pt-5 mt-20 sm:mt-36'>
        <Image height={170} width={170} className='animate-fade-in-up w-21 h-21 ' quality={100} alt='memoji' src={memoji} />
        <div className='text-center text-white animate-fade-in-up font-bold font-sans mt-2  text-xl md:text-3xl lg:text-[41px]'>
          <h2 className='flex'>Zainab is a Software Developer </h2>
          <h2 className=''>From Lagos, <span className='text-green-700'>Nig</span>e<span className='text-green-700'>ria</span></h2>
        </div>

        <ScrollReveal animation='animate-expand-horizontally' duration='800'>
          <div className='flex justify-items-center mt-8 gap-3 relative mb-14  '>
            <a href="https://x.com/TemiDevtips" target='_blank' className='cursor-pointer'><Image height={70} width={70} className='bg-[#292929]  sm:w-14 sm:h-12 w-13 h-11 rounded-md px-4 py-3 -rotate-3 relative top-1' alt='twitter logo' src='https://img.icons8.com/?size=100&id=A4DsujzAX4rw&format=png&color=ffffff' /></a>
            <a href="https://github.com/zainab-kassim" target='_blank' className='cursor-pointer'><Image height={70} width={70} className='bg-[#292929] sm:w-14 sm:h-12 w-13 h-11 rounded-md px-4 py-3 -rotate-2' alt='githublogo' src={githublogo} /></a>
            <a href="https://www.linkedin.com/in/zainab-kassim/" target='_blank' className='cursor-pointer'><Image height={70} width={70} className='bg-[#292929] sm:w-14 sm:h-12 w-13 h-11 rounded-md px-4 py-3' alt='linkedinlogo' src='https://img.icons8.com/?size=100&id=2EqeH19eMd3a&format=png&color=ffffff' /></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kassimzainab11@gmail.com" target="_blank" rel="noopener noreferrer"><Image height={70} width={70} className='bg-[#292929] sm:w-14 sm:h-12 w-13 h-11 rounded-md px-4 py-3 rotate-2' alt='maillogo' src='https://img.icons8.com/?size=100&id=Y2GfpkgYNp42&format=png&color=ffffff' /></a>
            <a href="https://www.instagram.com/zainab_temi_/" target='_blank' className='cursor-pointer'><Image height={70} width={70} className='bg-[#292929] sm:w-14 sm:h-12 w-13 h-11 rounded-md px-4 py-3 rotate-3 relative top-1' alt='instagram logo' src='https://img.icons8.com/?size=100&id=32320&format=png&color=FFFFFF' /></a>
          </div>
        </ScrollReveal>

      </div>
    </>
  )
}

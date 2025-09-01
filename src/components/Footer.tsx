import React from 'react'
import Image from 'next/image'
import githublogo from '../images/icons/github (3).png'
import ScrollReveal from './ui/ScrollReveal'


export default function Footer() {
  return (
    <div className='max-w-6xl mx-auto pt-16 pb-12 sm:px-14 px-5'>
      <div className='flex flex-col border-[#ececec] shadow-[0_0_40px_rgb(242,242,242)]  border-[0.5px] rounded-2xl py-12 bg-[#1C1C1C] justify-center items-center'>
        <div className='flex flex-row items-center text-white font-bold text-lg md:text-xl'>
          Let&apos;s get in touch
          <span className="relative ml-3 flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
          </span>
        </div>

        <ScrollReveal animation='animate-expand-horizontally' duration='800'>
          <div className='flex justify-items-center mt-2 md:mt-4 mb-8 gap-1 md:gap-3 relative  animate-expand-horizontally animate-iteration-count-once animate-duration-800 '>
            <a href="https://x.com/TemiDevtips" className='cursor-pointer' target='_blank'><Image height={70} width={70} className='bg-[#292929]  sm:w-14 sm:h-12 w-11 h-9 rounded-md px-4 py-3 -rotate-3 relative top-1' alt='twitter logo' src='https://img.icons8.com/?size=100&id=A4DsujzAX4rw&format=png&color=ffffff' /></a>
            <a href="https://github.com/zainab-kassim" target='_blank' className='cursor-pointer'><Image height={70} width={70} className='bg-[#292929] sm:w-14 sm:h-12 w-11 h-9 rounded-md px-4 py-3 -rotate-2' alt='githublogo' src={githublogo} /></a>
            <a href="https://www.linkedin.com/in/zainab-kassim/" target='_blank' className='cursor-pointer'><Image height={70} width={70} className='bg-[#292929] sm:w-14 sm:h-12 w-11 h-9 rounded-md px-4 py-3' alt='linkedinlogo' src='https://img.icons8.com/?size=100&id=2EqeH19eMd3a&format=png&color=ffffff' /></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kassimzainab11@gmail.com" target="_blank" rel="noopener noreferrer"
              className='cursor-pointer'><Image height={70} width={70} className='bg-[#292929] sm:w-14 sm:h-12 w-11 h-9 rounded-md px-4 py-3 rotate-2' alt='maillogo' src='https://img.icons8.com/?size=100&id=Y2GfpkgYNp42&format=png&color=ffffff' /></a>
            <a href="https://www.instagram.com/zainab_temi_/" target='_blank' className='cursor-pointer'> <Image height={70} width={70} className='bg-[#292929] sm:w-14 sm:h-12 w-11 h-9 rounded-md px-4 py-3 rotate-3 relative top-1' alt='instagram logo' src='https://img.icons8.com/?size=100&id=32320&format=png&color=FFFFFF' /></a>
          </div>
        </ScrollReveal>

        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kassimzainab11@gmail.com" target="_blank" rel="noopener noreferrer" className='cursor-pointer'> <h4 className='md:text-sm text-[10px] underline-offset-[0.5px] underline text-white'>kassimzainab11@gmail.com</h4></a>

      </div>
    </div>
  )
}

import React from 'react'



export default function Footer() {
  return (
    <div className='max-w-6xl border-t-[0.5px] bottom-0 mx-auto mt-24 pb-12 sm:px-14 px-5'>
      <div className=' flex flex-row items-center text-black justify-between border-t-[0.5px] py-8 border-[#989898]'>
        <div className=' flex flex-row items-center font-bold text-[10px] sm:text-lg md:text-xl'>
          Let&apos;s Get In Touch
          <span className="relative ml-2 sm:ml-3 flex size-2 sm:size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex size-2 sm:size-3 rounded-full bg-green-500"></span>
          </span>
        </div>
        <div className='flex flex-row flex-wrap gap-1 sm:gap-2 text-[8px] sm:text-sm  items-center'>
          <a href="https://www.instagram.com/zainab_temi_/" target='_blank' className='cursor-pointer hover:text-gray-800 hover:underline '><h2>Instagram .</h2></a>
          <a href="https://www.linkedin.com/in/zainab-kassim/"  target='_blank' className='cursor-pointer hover:text-gray-800 hover:underline '><h2>LinkedIn .</h2></a>
          <a href="https://github.com/zainab-kassim"  target='_blank' className='cursor-pointer hover:text-gray-800 hover:underline '><h2>Github .</h2></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kassimzainab11@gmail.com"  target='_blank' className='cursor-pointer hover:text-gray-800 hover:underline '><h2>Gmail</h2></a>
        </div>
      </div>
    </div>
  )
}

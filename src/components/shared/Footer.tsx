import React from 'react'
import coloredHr from '../../images/icons/pichr2.jpg'
import Image from 'next/image'



export default function Footer() {
    return (
        <div>
            <p className='text-3xl font-extrabold'>Get In Touch 👋🏼</p>
            <h6 className='text-sm pt-1 text-[#949494]'>Reach Out to me if you want to collab or build something magnificent , i am one call away !</h6>
            <div className='px-8 py-6 my-5 bg-[#191919] rounded-xl'>
                <h6 className='text-sm pt-1 text-[#949494] text-center'>Reach out to me →</h6>
                <Image width={1500} height={900} className='h-[8px] max-w-full mt-2' alt='coloredHr' src={coloredHr} />
                <h5 className='text-md font-bold pt-5 text-center'>kassimzainab11@gmail.com</h5>
                <div className='items-center flex justify-center md:gap-6 gap-5 pb-3 pt-6'>
                          <a href='#'><Image width={50} height={40} alt='icon' className=' w-13 h-13 -rotate-12' src='https://cdn-icons-png.flaticon.com/512/2504/2504923.png' /></a>
                           <a href='#'><Image width={50} height={40} alt='icon' className=' w-13 h-13 rotate-12' src='https://cdn-icons-png.flaticon.com/512/2504/2504911.png' /></a>
                           <a href='#'><Image width={50} height={40} alt='icon' className=' w-13 h-13 -rotate-12' src='https://cdn-icons-png.flaticon.com/512/831/831306.png' /></a>
                      
                </div>
            </div>

            
                <h6 className='text-md pt-7 text-[#949494] text-center'>Copyright @2025  Zainab Kassim</h6>
                <h6 className='text-md   text-[#949494] text-center'>All rights reserved</h6>

        </div>
    )
}

import React from 'react'
import Image from 'next/image'
import icon2 from '../../images/icons/linkedin.png'
import icon3 from '../../images/icons/mail (1).png'
import icon4 from '../../images/icons/github (2).png'
import footericon from '../../images/icons/cat (1).png'

export default function Footer() {
    return (
        <div className='max-w-7xl mx-auto rounded-4xl relative md:px-10 px-5 py-6 my-20 bg-gradient-to-b from-10% from-[#303030] via-70% via-[#3D3D3D] to-90% to-[#4B4A4A] shadow shadow-stone-300'>
            <Image
                className='absolute md:bottom-21 bottom-17 -left-0 -z-10 -rotate-10'
                src={footericon}
                alt='project-icon'
                width={70}
                height={70}
            />
            <div className='flex justify-between items-center'>
                <h2 className='md:text-xl text-md tracking-wider'>
                    Let’s get in touch 
                </h2>

                <div className='flex md:gap-x-6.5 gap-x-3.5'>
                    <div className='mx-0 rounded-full transition-all  duration-300 hover:scale-125 hover:mx-4 flex relative items-center justify-center md:w-13 md:h-13 w-10 h-10 bg-[#3791FF]'>
                        <Image className='md:w-10 md:h-10 w-8 h-8 absolute' src={icon3} alt='icon2' />
                    </div>
                    <div className='mx-0 rounded-full transition-all  duration-300 hover:scale-125 hover:mx-4 flex relative items-center justify-center md:w-13 md:h-13 w-10 h-10 bg-[#FFFFFF]'>
                        <Image className='md:w-8 md:h-8 w-7 h-7  absolute' src={icon2} alt='icon3' />
                    </div>
                    <div className='mx-0 rounded-full transition-all  duration-300 hover:scale-125 hover:mx-4 flex relative items-center justify-center md:w-13 md:h-13 w-11 h-11 bg-[#430090]'>
                        <Image className='md:w-8 md:h-8 w-7 h-7  absolute' src={icon4} alt='icon4' />
                    </div>
                </div>

            </div>
        </div>
    )
}

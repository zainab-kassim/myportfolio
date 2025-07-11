import React from 'react'
import proj1 from '../../images/icons/pichr2.jpg'
import icon1 from '../../images/icons/cat (1).png'
import Image from 'next/image'

export default function Aboutme() {
    return (
        <div className='my-16'>

            <p className='text-3xl font-extrabold flex items-center gap-3'>About us <Image width={50} height={50} src={icon1} alt='icon1' className='w-12 h-12' /></p>
            <h6 className='text-sm pt-1 text-[#949494]'>More about me and what i have to offer</h6>
            <Image width={1500} height={900} className='h-[8px] max-w-full mt-3' alt='project1' src={proj1} />
            <div className='mt-8  text-lg traking-wide'>
                <p className='pb-4'>
                    I’m passionate about building things that matter. Whether it’s a sleek website or a functional platform, I love bringing ideas to life through clean code and thoughtful design.
                </p>
                <p className='pb-20'>
                    What drives me most is the ability to solve real-world problems through technology, turning concepts into tools that people can actually use. I enjoy the process of creating, improving, and iterating until things not only work but feel right.
                </p>
                <p className='text-xl font-medium'>
                  For me,
                  </p>
                  <h3 className='md:text-[50px] text-5xl pt-4 font-extrabold bg-gradient-to-t from-[#f2709c] to-[#ff9472] bg-clip-text text-transparent'>𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙢𝙚𝙣𝙩 𝙞𝙨𝙣’𝙩 𝙟𝙪𝙨𝙩 𝙖𝙗𝙤𝙪𝙩 𝙬𝙧𝙞𝙩𝙞𝙣𝙜 𝙘𝙤𝙙𝙚. 𝙄𝙩’𝙨 𝙖𝙗𝙤𝙪𝙩 𝙢𝙖𝙠𝙞𝙣𝙜 𝙞𝙙𝙚𝙖𝙨 𝙩𝙖𝙣𝙜𝙞𝙗𝙡𝙚, 𝙝𝙚𝙡𝙥𝙛𝙪𝙡, 𝙖𝙣𝙙 𝙞𝙢𝙥𝙖𝙘𝙩𝙛𝙪𝙡.</h3>
            
            </div>

        </div>
    )
}

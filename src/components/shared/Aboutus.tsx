import React from 'react'
import proj1 from '../../images/icons/pichr2.jpg'
import icon1 from '../../images/icons/cat (1).png'
import Image from 'next/image'

export default function Aboutus() {
    return (
        <div className='my-16'>

            <p className='text-3xl font-extrabold flex items-center gap-6'>About us <Image width={50} height={50} src={icon1} alt='icon1' className='w-10 h-10'/></p>
            <h6 className='text-sm pt-1 text-[#949494]'>More about me and what i have to offer</h6>
            <Image width={1500} height={900} className='h-[8px] max-w-full mt-3' alt='project1' src={proj1} />
            <div className='mt-8  text-lg traking-wide'>
                <p className='pb-4'>
                    Hi, i am zainab kassim I enjoy turning frameworks and designs into well driven philosophy art that can be gone, with 3+ Years of experience in the field, I thrive in making automation and believe that there  I enjoy turning frameworks and designs into well driven philosophy art that can be gone, with 3+ Years of experience in the field, I thrive in making automation and believe that there.
                </p>
                <p className='pb-4'>
                    I enjoy turning frameworks and designs into well driven philosophy art that can be gone, with 3+ Years of experience 3
                    in the field, I thrive in making automation and believe that there I enjoy turning frameworks and designs into well driven
                    philosophy art that can be gone, with 3+ Years of experience in the field, I thrive in making.
                </p>
                
            </div>

        </div>
    )
}

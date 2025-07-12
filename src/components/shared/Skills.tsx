import React from 'react'
import Image from 'next/image'
import coloredHr from '../../images/icons/pichr2.jpg'


export default function Skills() {
    return (
        <div className='mb-12 py-16'>
            <p className='text-3xl font-extrabold'>Skills  🧠</p>
            <h6 className='text-sm pt-[0.5px] text-[#949494]'>More about me and what i have to offer</h6>
            <Image width={1500} height={900} className='h-[7px] md:h-[8px] max-w-full mt-5' alt='coloredHr' src={coloredHr} />
            <div className='flex flex-wrap gap-6 items-center max-w-full my-12'>
                <div className='flex items-center justify-center h-12  w-auto gap-3 px-8 py-2  rounded-lg border-[0.5px] border-[#ffffff50] bg-[#363535]'>
                    <Image alt='Next-icon' width={25} height={25} className='w-8 h-8' src='https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000' />
                    <div className='text-[14px] tracking-wide'>Next Js</div>
                </div>

                <div className='flex items-center justify-center h-12  w-auto gap-3 px-8 py-2  rounded-lg border-[0.5px] border-[#ffffff50] bg-[#363535]'>
                    <Image alt='Next-icon' width={25} height={25} className='w-5 h-5' src='https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000' />
                    <div className='text-[14px] tracking-wide'>Express</div>
                </div>

                <div className='flex items-center justify-center  h-12  w-auto gap-3 px-8 py-2  rounded-lg border-[0.5px] border-[#ffffff50] bg-[#363535]'>
                    <Image alt='Next-icon' width={25} height={25} className='w-6 h-6' src='https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000' />
                    <div className='text-[14px] tracking-wide'>Tailwind</div>
                </div>

                <div className='flex items-center justify-center h-12  w-auto gap-3 px-8 py-2  rounded-lg border-[0.5px] border-[#ffffff50] bg-[#363535]'>
                    <Image alt='Next-icon' width={25} height={25} className='w-6 h-6' src='https://img.icons8.com/?size=100&id=B403GJErHZpx&format=png&color=000000' />
                    <div className='text-[14px] tracking-wide'>Mongo Db</div>
                </div>

                <div className='flex items-center justify-center h-12 w-auto gap-3 px-8 py-2  rounded-lg border-[0.5px] border-[#ffffff50] bg-[#363535]'>
                    <Image alt='Next-icon' width={25} height={25} className='w-5 h-5' src='https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000' />
                    <div className='text-[14px] tracking-wide'>Postman</div>
                </div>

                <div className='flex items-center justify-center h-12 w-auto gap-3 px-8 py-2  rounded-lg border-[0.5px] border-[#ffffff50] bg-[#363535]'>
                    <Image alt='Next-icon' width={25} height={25} className='w-5 h-5' src='https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000' />
                    <div className='text-[14px] tracking-wide'>React</div>
                </div>

                <div className='flex items-center justify-center h-12 w-auto gap-3 px-8 py-2  rounded-lg border-[0.5px] border-[#ffffff50] bg-[#363535]'>
                    <Image alt='Next-icon' width={25} height={25} className='w-7 h-7' src='https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000' />
                    <div className='text-[14px] tracking-wide'>Typescript</div>
                </div>

                <div className='flex items-center justify-center h-12 w-auto gap-3 px-8 py-2  rounded-lg border-[0.5px] border-[#ffffff50] bg-[#363535]'>
                    <Image alt='Next-icon' width={25} height={25} className='w-5 h-5' src='https://cdn-icons-png.flaticon.com/512/5968/5968322.png' />
                    <div className='text-[14px] tracking-wide'>Node Js</div>
                </div>

                <div className='flex items-center justify-center h-12 w-auto gap-3 px-8 py-2  rounded-lg border-[0.5px] border-[#ffffff50] bg-[#363535]'>
                    <Image alt='Next-icon' width={25} height={25} className='w-7 h-7' src='https://img.icons8.com/?size=100&id=QSjnrUKYMnxO&format=png&color=000000' />
                    <div className='text-[14px] tracking-wide'>SQL</div>
                </div>

            </div>
        </div>
    )
}

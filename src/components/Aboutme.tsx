import React from 'react'
import Image from 'next/image'
import bluepushpin from '../images/icons/BluePushPin.png'
import yellowpushpin from '../images/icons/YellowPushPin.png'
import orangepushpin from '../images/icons/OrangePuhPin.png'
import pinkpushpin from '../images/icons/PinkPushPin.png'
import pacmanpng from '../images/icons/Pacman.png'
import { Caveat } from 'next/font/google'
import ScrollReveal from './ui/ScrollReveal'



const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400', '700'],
})



export default function Aboutme() {
    return (
        <>
            <div id='Aboutme' className='relative w-full   bg-white overflow-hidden'>

                <svg
                    className="absolute top-0 left-0 w-full h-11 md:h-24 block rotate-180"
                    viewBox="0 0 1200 180"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        d="M0,40 
                       C75,40 75,160 150,160 
                       C225,160 225,40 300,40 
                       C375,40 375,170 450,170 
                       C525,170 525,40 600,40 
                       C675,40 675,150 750,150 
                       C825,150 825,40 900,40 
                       C975,40 975,160 1050,160 
                       C1125,160 1125,40 1200,40 
                       L1200,200 L0,200 Z"

                        className="fill-current text-[#101010]"
                    />


                </svg>



                <div className='mx-auto max-w-6xl sm:px-14 px-5 pt-28 md:pt-40 '>


                    <div className="font-extrabold text-center w-[280px] sm:w-[320px] md:w-fit mx-auto relative flex flex-col md:flex-row items-center   text-black text-2xl md:text-3xl">
                        Everything you need to know
                        <div className="absolute right-6 top-13 sm:right-14 sm:top-12 md:-right-22 md:top-5 -rotate-12 w-32 bg-[#42E3FF] text-[#226A82] text-base font-normal rounded-full px-5 py-1">
                            About me
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-11 md:gap-y-10 lg:gap-y-12 mt-16">

                        {/* Card 1 */}
                        <div className="border border-[#ececec] shadow-[0_0_40px_rgb(242,242,242)]  rounded-xl px-4 py-3 flex flex-col">
                            <Image
                                width={41}
                                height={41}
                                className="mx-auto    drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]  my-2 md:my-4 z-10"
                                src={orangepushpin}
                                alt="orange pushpin"
                            />
                            <div className="bg-orange-100 border border-orange-200 px-5 py-6 rounded-xl flex-1 flex flex-col">
                                <h2 className={`${caveat.className} text-orange-400 text-4xl`}>01</h2>
                                <div className="py-8 flex-1">
                                    <h2 className="text-[#262626] font-semibold text-xl">Who I Am</h2>
                                    <p className="text-md tracking-wide  text-[#717372] pt-2">
                                       I’m Zainab, a passionate full-stack software engineer and student. 
                                       Alongside coding, I also run my fashion brand, Zayelle, where I design and create stylish pieces for women.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="border border-[#ececec] shadow-[0_0_40px_rgb(242,242,242)]  rounded-xl px-4 py-3 flex flex-col">
                            <Image
                                width={41}
                                height={41}
                                className="mx-auto drop-shadow-[0_0_10px_rgba(157,23,77,0.8)] my-2 md:my-4 z-10"
                                src={pinkpushpin}
                                alt="pink pushpin"
                            />
                            <div className="bg-pink-100 border border-pink-200 px-5 py-6 rounded-xl flex-1 flex flex-col">
                                <h2 className={`${caveat.className} text-pink-400 text-4xl`}>02</h2>
                                <div className="py-8 flex-1">
                                    <h2 className="text-[#262626] font-semibold text-xl">What I Do</h2>
                                    <p className="text-md  tracking-wide text-[#717372] pt-2">
                                      I design and develop full-stack web applications with a strong focus on functionality, performance,
                                     and seamless user experiences. 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Image
                            width={42}
                            height={42}
                            alt="pacman"
                            src={pacmanpng}
                            className="hidden md:block absolute md:top-[60.3%] lg:top-[61.5%] -translate-x-1/4 -translate-y-1/2 z-10"
                        />
                        {/* Card 3 */}
                        <div className="border border-[#ececec] shadow-[0_0_40px_rgb(242,242,242)]  rounded-xl px-4 py-3 flex flex-col">
                            <Image
                                width={41}
                                height={41}
                                className="mx-auto drop-shadow-[0_0_10px_rgba(254,240,138,0.8)] my-2 md:my-4 z-10"
                                src={yellowpushpin}
                                alt="yellow pushpin"
                            />
                            <div className="bg-yellow-100 border border-yellow-200 px-5 py-6 rounded-xl flex-1 flex flex-col">
                                <h2 className={`${caveat.className} text-yellow-400 text-4xl`}>03</h2>
                                <div className="py-8 flex-1">
                                    <h2 className="text-[#262626] font-semibold text-xl">Why I Do It</h2>
                                    <p className="text-md  tracking-wide text-[#717372] pt-2">
                                      I believe in using creativity and technology to make a meaningful impact. Whether 
                                      through  responsive websites or scalable web applications, I aim to build solutions that empower people.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="border border-[#ececec] shadow-[0_0_40px_rgb(242,242,242)] rounded-xl px-4 py-3 flex flex-col">
                            <Image
                                width={40}
                                height={40}
                                className="mx-auto drop-shadow-[0_0_10px_rgba(147,197,253,0.8)] my-2 md:my-4 z-10"
                                src={bluepushpin}
                                alt="blue pushpin"
                            />
                            <div className="bg-blue-100 border border-blue-200 px-5 py-6 rounded-xl flex-1 flex flex-col">
                                <h2 className={`${caveat.className}  text-blue-400 text-4xl`}>04</h2>
                                <div className="pt-5 flex-1">
                                    <h2 className="text-[#262626] font-semibold text-xl">How I Do It</h2>
                                    <div className="grid grid-cols-2 sm:grid-cols-2   lg:grid-cols-3 gap-3 text-black pt-5">
                                        <ScrollReveal animation='animate-fade-in' delay='100' >
                                            <div className='flex items-center justify-center h-11  w-auto gap-x-2 rounded-xl   sm:rounded-full bg-white '>
                                                <Image alt='Express-icon' width={25} height={25} className='h-5 w-5' src='https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000' />
                                                <div className='sm:text-sm md:text-md text-[13px] tracking-wide'>Express</div>
                                            </div>
                                        </ScrollReveal>

                                        <ScrollReveal animation='animate-fade-in' delay='200' >
                                            <div className='flex items-center justify-center h-11  w-auto gap-x-2 rounded-xl   sm:rounded-full bg-white'>
                                                <Image alt='Tailwind-icon' width={25} height={25} className='h-5 w-5 md:w-6 md:h-6' src='https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000' />
                                                <div className='sm:text-sm md:text-md text-[12px] tracking-wide'>Tailwind</div>
                                            </div>
                                        </ScrollReveal>

                                        <ScrollReveal animation='animate-fade-in' delay='400' >
                                            <div className='flex items-center justify-center h-11  w-auto gap-2  rounded-xl   sm:rounded-full bg-white'>
                                                <Image alt='Next-icon' width={25} height={25} className='h-6 w-6 md:w-7 md:h-7' src='https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000' />
                                                <div className='sm:text-sm md:text-md text-[12px] tracking-wide'>Next js</div>
                                            </div>
                                        </ScrollReveal>

                                        <ScrollReveal animation='animate-fade-in' delay='500' >
                                            <div className='flex items-center justify-center h-11  w-auto gap-1  rounded-xl   sm:rounded-full bg-white'>
                                                <Image alt='Mongo-icon' width={25} height={25} className='h-5 w-5 md:w-6 md:h-6' src='https://img.icons8.com/?size=100&id=B403GJErHZpx&format=png&color=000000' />
                                                <div className='sm:text-sm md:text text-[12px] tracking-wide'>MongoDb</div>
                                            </div>
                                        </ScrollReveal>

                                        <ScrollReveal animation='animate-fade-in' delay='700' >
                                            <div className='flex items-center justify-center h-11  w-auto gap-2  rounded-xl   sm:rounded-full bg-white'>
                                                <Image alt='React-icon' width={25} height={25} className='h-5 w-5 md:w-6 md:h-6' src='https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000' />
                                                <div className='sm:text-sm md:text-md text-[12px] tracking-wide'>React js</div>
                                            </div>
                                        </ScrollReveal>

                                        <ScrollReveal animation='animate-fade-in' delay='900' >
                                            <div className='flex items-center justify-center h-11  w-auto gap-2  rounded-xl   sm:rounded-full bg-white '>
                                                <Image alt='Node-icon' width={25} height={25} className='h-5 w-5 md:w-6 md:h-6' src='https://cdn-icons-png.flaticon.com/512/5968/5968322.png' />
                                                <div className='sm:text-sm md:text-md text-[12px] tracking-wide'>Node js</div>
                                            </div>
                                        </ScrollReveal>

                                        <ScrollReveal animation='animate-fade-in' delay='1000' >
                                            <div className='flex items-center justify-center h-11   w-auto gap-2 rounded-xl   sm:rounded-full bg-white '>
                                                <Image alt='Postman-icon' width={25} height={25} className='h-5 w-5 md:w-6 md:h-6' src='https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000' />
                                                <div className='sm:text-sm md:text-md text-[12px] tracking-wide'>Postman</div>
                                            </div>
                                        </ScrollReveal>

                                        <ScrollReveal animation='animate-fade-in' delay='1000' >
                                            <div className='flex items-center justify-center h-11   w-auto gap-2 rounded-xl   sm:rounded-full bg-white '>
                                                <Image alt='Typescript-icon' width={25} height={25} className='h-5 w-5 md:w-6 md:h-6' src='https://img.icons8.com/?size=100&id=wpZmKzk11AzJ&format=png&color=000000' />
                                                <div className='sm:text-sm md:text-md text-[12px] tracking-wide'>Typescript</div>
                                            </div>
                                        </ScrollReveal>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

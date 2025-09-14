import React from 'react'
import Image from 'next/image'
import celestique from '../images/icons/Celestique.jpg'
import appvarsity from '../images/icons/Appvarsity.jpg'
import brobl from '../images/icons/Brobl.jpg'



export default function Project() {
    return (
        <div id='Projects' className='mx-auto max-w-6xl sm:px-14 px-5 py-24'>
            <div className="font-extrabold  text-center w-[280px] sm:w-[340px] md:w-fit mx-auto relative flex flex-col md:flex-row items-center justify-center   text-2xl sm:text-3xl">
                Here&apos;s some things I have built
                <div className="absolute right-1 top-13 sm:right-2 sm:top-15 md:-right-22 md:top-6 -rotate-12 w-32 bg-[#FF8B42] text-[#90440D] text-sm font-normal rounded-full px-4 py-1.5">
                    2023 - 2025
                </div>
            </div>

            <div className='flex flex-col gap-8 md:gap-14 max-w-3xl xl:max-w-4xl mx-auto mt-24'>
                <div className='bg-transparent border-[#605c5c97] border-[0.5px]  pt-10 relative  pb-8 rounded-lg'>
                    <div className='text-[#a7a7a7] border-l-[0.5px] absolute text-md md:text-2xl pl-2 left-3 top-3 md:left-5 md:top-6 font-extralight z-10'>01</div>
                    <div className="w-full md:h-1/2 overflow-hidden rounded-tl-lg">
                        <Image
                            src={celestique}
                            alt="cropped"
                            width={800}
                            height={600}
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                    <div className='sm:px-5 px-3'>
                        <Image height={70} width={70} className=' w-10 h-10 mt-5 mb-3' alt='githublogo' src='https://img.icons8.com/?size=100&id=fmFqQmR0UdsR&format=png&color=480891' />
                        <h2 className='md:text-2xl text-xl text-white mt-5 inline items-center font-bold'>Celestique </h2>
                        <p className='sm:text-[14px] text-xs text-[#949494]'>Celstique is an e-commerce platform built to provide a seamless online shopping experience. It features a modern, responsive, and user-friendly interface that allows customers to easily browse products, manage their carts, and complete secure checkouts.</p>
                        <div className='flex flex-wrap gap-4 items-center max-w-2xl mt-4'>
                            <div className='flex items-center h-10 justify-center gap-2 px-3 py-1 w-auto rounded-lg border-[0.5px] border-[#292828] bg-[#191919]'>
                                <Image alt='Next-icon' width={25} height={25} className='w-6.5 h-6.5' src='https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000' />
                                <div className='text-[12px]'>Next Js</div>
                            </div>

                            <div className='flex items-center h-10 justify-center gap-2 px-3 py-1 w-auto rounded-lg border-[0.5px] border-[#292828] bg-[#191919]'>
                                <Image alt='Express-icon' width={25} height={25} className='w-5 h-5' src='https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000' />
                                <div className='text-[12px]'>Express</div>
                            </div>

                            <div className='flex items-center h-10 justify-center gap-2 px-3 py-1 w-auto rounded-lg border-[0.5px] border-[#292828] bg-[#191919]'>
                                <Image alt='Tailwind-icon' width={25} height={25} className='w-5 h-5' src='https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000' />
                                <div className='text-[12px]'>Tailwind</div>
                            </div>

                            <div className='flex items-center h-10 justify-center gap-2 px-3 py-1 w-auto rounded-lg border-[0.5px] border-[#292828] bg-[#191919]'>
                                <Image alt='MONGO DB-icon' width={25} height={25} className='w-5.5 h-5.5' src='https://img.icons8.com/?size=100&id=B403GJErHZpx&format=png&color=000000' />
                                <div className='text-[12px]'>Mongo Db</div>
                            </div>

                            <div className='flex items-center h-10 justify-center gap-2 px-3 py-1 w-auto rounded-lg border-[0.5px] border-[#292828] bg-[#191919]'>
                                <Image alt='Postman-icon' width={25} height={25} className='w-4.5 h-4.5' src='https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000' />
                                <div className='text-[12px]'>Postman</div>
                            </div>

                            <div className='flex items-center h-10 justify-center gap-2 px-3 py-1 w-auto rounded-lg border-[0.5px] border-[#292828] bg-[#191919]'>
                                <Image alt='Postman-icon' width={25} height={25} className='w-5 h-5' src='https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000' />
                                <div className='text-[12px]'>Typescript</div>
                            </div>
                        </div>
                        <a href='https://celestique.vercel.app/' className='flex flex-row-reverse gap-3 px-4 justify-center hover:underline  py-2 items-center w-40 mt-8 rounded-lg text-white font-normal text-sm  bg-white/10'>
                            Live Preview →
                            <span className="relative  flex size-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                            </span>
                        </a>

                    </div>
                </div>


                <div className='bg-transparent border-[#605c5c97] border-[0.5px]  pt-10 relative  pb-8 rounded-lg'>
                    <div className='text-[#a7a7a7] border-l-[0.5px] absolute text-md md:text-2xl pl-2 left-3 top-3 md:left-5 md:top-6 font-extralight z-10'>02</div>
                    <div className="w-full md:h-1/2 overflow-hidden rounded-tl-lg">
                        <Image
                            src={appvarsity}
                            alt="cropped"
                            width={800}
                            height={600}
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                    <div className='sm:px-5 px-3'>
                        <Image height={70} width={70} className=' w-10 h-10 mt-5 mb-3' alt='githublogo' src='https://img.icons8.com/?size=100&id=fmFqQmR0UdsR&format=png&color=480891' />
                        <h2 className='md:text-2xl text-xl text-white mt-5 inline items-center font-bold'>Appvarsity</h2>
                        <p className='sm:text-[14px] text-xs text-[#949494]'>Appvarsity is a learning platform designed to support Aptech students in their academic journey. It provides access to study materials, exam preparation resources, and essential information about Aptech courses.</p>
                        <div className='flex flex-wrap gap-4 items-center max-w-3xl mt-4'>
                            <div className='flex items-center h-10 justify-center gap-2 px-3 py-1 w-auto rounded-lg border-[0.5px] border-[#292828] bg-[#191919]'>
                                <Image alt='Next-icon' width={25} height={25} className='w-6.5 h-6.5' src='https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000' />
                                <div className='text-[12px]'>Next Js</div>
                            </div>

                            <div className='flex items-center h-10 justify-center gap-2 px-3 py-1 w-auto rounded-lg border-[0.5px] border-[#292828] bg-[#191919]'>
                                <Image alt='Express-icon' width={25} height={25} className='w-5 h-5' src='https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000' />
                                <div className='text-[12px]'>Express</div>
                            </div>

                            <div className='flex items-center h-10 justify-center gap-2 px-3 py-1 w-auto rounded-lg border-[0.5px] border-[#292828] bg-[#191919]'>
                                <Image alt='Tailwind-icon' width={25} height={25} className='w-5 h-5' src='https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000' />
                                <div className='text-[12px]'>Tailwind</div>
                            </div>

                            <div className='flex items-center h-10 justify-center gap-2 px-3 py-1 w-auto rounded-lg border-[0.5px] border-[#292828] bg-[#191919]'>
                                <Image alt='MONGO DB-icon' width={25} height={25} className='w-5.5 h-5.5' src='https://img.icons8.com/?size=100&id=B403GJErHZpx&format=png&color=000000' />
                                <div className='text-[12px]'>Mongo Db</div>
                            </div>

                            <div className='flex items-center h-10 justify-center gap-2 px-3 py-1 w-auto rounded-lg border-[0.5px] border-[#292828] bg-[#191919]'>
                                <Image alt='Postman-icon' width={25} height={25} className='w-4.5 h-4.5' src='https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000' />
                                <div className='text-[12px]'>Postman</div>
                            </div>

                            <div className='flex items-center h-10 justify-center gap-2 px-3 py-1 w-auto rounded-lg border-[0.5px] border-[#292828] bg-[#191919]'>
                                <Image alt='Postman-icon' width={25} height={25} className='w-5 h-5' src='https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000' />
                                <div className='text-[12px]'>Typescript</div>
                            </div>
                        </div>
                        <a href='https://appvarsity.vercel.app/' className='flex flex-row-reverse gap-3 px-4 justify-center hover:underline  py-2 items-center w-40 mt-8 rounded-lg text-white font-normal text-sm  bg-white/10'>
                            Live Preview →
                            <span className="relative  flex size-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                            </span>
                        </a>

                    </div>
                </div>


                <div className='bg-transparent border-[#605c5c97] border-[0.5px]  pt-10 relative  pb-8 rounded-lg'>
                    <div className='text-[#a7a7a7] border-l-[0.5px] absolute text-md md:text-2xl pl-2 left-3 top-3 md:left-5 md:top-6 font-extralight z-10'>03</div>
                    <div className="w-full md:h-1/2 overflow-hidden rounded-tl-lg">
                        <Image
                            src={brobl}
                            alt="cropped"
                            width={800}
                            height={600}
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                    <div className='sm:px-5 px-3'>
                        <Image height={70} width={70} className=' w-10 h-10 mt-5 mb-3' alt='githublogo' src='https://img.icons8.com/?size=100&id=fmFqQmR0UdsR&format=png&color=480891' />
                        <h2 className='md:text-2xl text-xl text-white mt-5 inline items-center font-bold'>Brobl </h2>
                        <p className='sm:text-[14px] text-xs text-[#949494]'>Brobl is a modern blog platform built for sharing ideas, stories, and knowledge in a clean and engaging way. It features a simple, responsive design that makes content easy to read and navigate across all devices. The site is structured for scalability, allowing future integration of features like user accounts, comments, and content categorization.</p>
                        <div className='flex flex-wrap gap-4 items-center max-w-2xl mt-4'>
                            <div className='flex items-center h-10 justify-center gap-2 px-3 py-1 w-auto rounded-lg border-[0.5px] border-[#292828] bg-[#191919]'>
                                <Image alt='Next-icon' width={25} height={25} className='w-6.5 h-6.5' src='https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000' />
                                <div className='text-[12px]'>Next Js</div>
                            </div>

                            <div className='flex items-center h-10 justify-center gap-2 px-3 py-1 w-auto rounded-lg border-[0.5px] border-[#292828] bg-[#191919]'>
                                <Image alt='Express-icon' width={25} height={25} className='w-5 h-5' src='https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000' />
                                <div className='text-[12px]'>Express</div>
                            </div>

                            <div className='flex items-center h-10 justify-center gap-2 px-3 py-1 w-auto rounded-lg border-[0.5px] border-[#292828] bg-[#191919]'>
                                <Image alt='Tailwind-icon' width={25} height={25} className='w-5 h-5' src='https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000' />
                                <div className='text-[12px]'>Tailwind</div>
                            </div>

                            <div className='flex items-center h-10 justify-center gap-2 px-3 py-1 w-auto rounded-lg border-[0.5px] border-[#292828] bg-[#191919]'>
                                <Image alt='MONGO DB-icon' width={25} height={25} className='w-5.5 h-5.5' src='https://img.icons8.com/?size=100&id=B403GJErHZpx&format=png&color=000000' />
                                <div className='text-[12px]'>Mongo Db</div>
                            </div>

                            <div className='flex items-center h-10 justify-center gap-2 px-3 py-1 w-auto rounded-lg border-[0.5px] border-[#292828] bg-[#191919]'>
                                <Image alt='Postman-icon' width={25} height={25} className='w-4.5 h-4.5' src='https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000' />
                                <div className='text-[12px]'>Postman</div>
                            </div>
                        </div>
                        <a href='https://brobl-client.vercel.app/' className='flex flex-row-reverse gap-3 px-4 justify-center hover:underline  py-2 items-center w-40 mt-8 rounded-lg text-white font-normal text-sm  bg-white/10'>
                            Live Preview →
                            <span className="relative  flex size-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                            </span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

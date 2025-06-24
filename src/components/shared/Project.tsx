import React from 'react'
import Image from 'next/image'
import projicon from '../../images/icons/imagination.png'
import pic2 from '../../images/icons/Macbook-Air-appvarsity.vercel.app.png'
import pic1 from '../../images/icons/celestique.png'
import pic3 from '../../images/icons/Macbook-Air-brobl-client.vercel.app.png'

export default function () {
    return (
        <>
            <div className='max-w-[220px]  text-white bg-[#252121]  relative mx-auto px-3  rounded-tl-2xl rounded-br-2xl py-3.5' >
                <Image
                    className='absolute bottom-5.5  left-1/2 -translate-x-1/2 -z-10'
                    src={projicon}
                    alt='project-icon'
                    width={70}
                    height={70}
                />
            </div >
            <h2 className='font-black text-center  pt-3 text-2xl lg:text-4xl italic'>Selected <span className='text-[#E45858]'>Projects</span></h2>

            <div className='max-w-7xl mx-auto  mt-20'>
                <p className='rounded-4xl max-w-[130px] custom-md-shadow   text-center bg-[#FF3838] px-5 py-2'>Jan. 2025 </p>
                <h3 className='sm:text-4xl text-2xl font-extrabold pt-8'>Celestique . Ecommerce platform </h3>
                <p className='text-lg text-[#C0B8B8] tracking-wide font-[15px] pt-5'>Celestique is an e-commerce website built with Next.js, Tailwind CSS, and JavaScript. It features a responsive design, a product database with size variations, server-side logic with API routes and authentication, and payment integration. The project was developed in collaboration with a colleague, focusing on simplicity and functionality.</p>
                <div className="flex flex-wrap  gap-6 py-8 mx-auto ">
                    <div className="shadow-md bg-[#474747] flex gap-2 items-center justify-center rounded-xl text-md font-sans px-3 py-2 w-auto">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
                            alt="Typescript Icon"
                            width={40}
                            height={40}
                            className="w-5 h-5"
                        />
                        Typescript
                    </div>

                    <div className="shadow-md bg-[#474747] flex gap-2 items-center justify-center rounded-xl text-md font-sans px-3 py-2 w-auto">
                        <Image
                            src="https://img.icons8.com/?size=100&id=B4UIxQoMYIGD&format=png&color=000000"
                            alt="express Icon"
                            width={40}
                            height={40}
                            className="w-5 h-5"
                        />
                        Express
                    </div>

                    <div className="shadow-md bg-[#474747] flex gap-2 items-center justify-center rounded-xl text-md font-sans px-3 py-2 w-auto">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
                            alt="node Icon"
                            width={40}
                            height={40}
                            className="w-5 h-5"
                        />
                        Nodejs
                    </div>

                    <div className="shadow-md bg-[#474747] flex gap-2 items-center justify-center rounded-xl text-md font-sans px-3 py-2 w-auto">
                        <Image
                            src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000"
                            alt="Tailwind Icon"
                            width={40}
                            height={40}
                            className="w-5 h-5"
                        />
                        Tailwind
                    </div>

                    <div className="shadow-md bg-[#474747] flex gap-2 items-center justify-center rounded-xl text-md  font-sans px-3 py-2 w-auto">
                        <Image
                            src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
                            alt="Mongo Icon"
                            width={40}
                            height={40}
                            className="w-6 h-6"
                        />
                        Mongo DB
                    </div>

                    <div className="shadow-md bg-[#474747] flex gap-2 items-center justify-center rounded-xl text-md font-sans px-3 py-2 w-auto">
                        <Image
                            src="https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000"
                            alt="Next Icon"
                            width={40}
                            height={40}
                            className="w-7 h-7"
                        />
                        Next Js
                    </div>
                </div>
                <hr className='mb-8' />
                <a href='https://celestique.vercel.app/' target='_blank' className='text-sm flex  text-[#eae6e6] shadow-text  tracking-wider font-[18px]  cursor-pointer  hover:text-[#E45858] hover:underline'>VISIT SITE <div className='pl-2'> →</div></a>
                <Image className='mx-auto w-auto  rounded-xl lg:h-[600px] sm:h-[300px] mt-10 bg-none' alt='img' width={1000} height={1000} src={pic1} />

            </div>

            <div className='max-w-7xl mx-auto py-6 mt-40'>
                <p className='rounded-4xl max-w-[130px] custom-md-shadow   text-center bg-[#FF3838] px-5 py-2'>Aug. 2024 </p>
                <h3 className='sm:text-4xl text-2xl font-extrabold pt-8'>Appvarsity . Educational Platform </h3>
                <p className='text-lg text-[#C0B8B8] tracking-wide font-[15px] pt-5'>This is a learning platform designed to help Aptech students study more effectively by providing access to past questions.It allows students to review and practice exam questions at their own pace, with a focus on improving academic preparation through organized and accessible content.</p>
                <div className="flex flex-wrap  gap-6 py-8 mx-auto ">
                    <div className="shadow-md bg-[#474747] flex gap-2 items-center justify-center rounded-xl text-md font-sans px-3 py-2 w-auto">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
                            alt="Typescript Icon"
                            width={40}
                            height={40}
                            className="w-5 h-5"
                        />
                        Typescript
                    </div>

                    <div className="shadow-md bg-[#474747] flex gap-2 items-center justify-center rounded-xl text-md font-sans px-3 py-2 w-auto">
                        <Image
                            src="https://img.icons8.com/?size=100&id=B4UIxQoMYIGD&format=png&color=000000"
                            alt="express Icon"
                            width={40}
                            height={40}
                            className="w-5 h-5"
                        />
                        Express
                    </div>

                    <div className="shadow-md bg-[#474747] flex gap-2 items-center justify-center rounded-xl text-md font-sans px-3 py-2 w-auto">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
                            alt="node Icon"
                            width={40}
                            height={40}
                            className="w-5 h-5"
                        />
                        Nodejs
                    </div>

                    <div className="shadow-md bg-[#474747] flex gap-2 items-center justify-center rounded-xl text-md font-sans px-3 py-2 w-auto">
                        <Image
                            src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000"
                            alt="Tailwind Icon"
                            width={40}
                            height={40}
                            className="w-5 h-5"
                        />
                        Tailwind
                    </div>

                    <div className="shadow-md bg-[#474747] flex gap-2 items-center justify-center rounded-xl text-md  font-sans px-3 py-2 w-auto">
                        <Image
                            src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
                            alt="Mongo Icon"
                            width={40}
                            height={40}
                            className="w-6 h-6"
                        />
                        Mongo DB
                    </div>

                    <div className="shadow-md bg-[#474747] flex gap-2 items-center justify-center rounded-xl text-md font-sans px-3 py-2 w-auto">
                        <Image
                            src="https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000"
                            alt="Next Icon"
                            width={40}
                            height={40}
                            className="w-7 h-7"
                        />
                        Next Js
                    </div>
                </div>
                <hr className='mb-8' />
                <a href='https://appvarsity.vercel.app/' target='_blank' className='text-sm text-[#eae6e6] shadow-text  tracking-wider font-[18px]  cursor-pointer  hover:text-[#E45858] hover:underline'>VISIT SITE <span className='pl-2'>→</span></a>
                <Image className='mx-auto w-auto  rounded-xl lg:h-[600px] sm:h-[300px] mt-10 bg-none' alt='img' width={1000} height={1000} src={pic2} />

            </div>


            <div className='max-w-7xl mx-auto py-6 my-40'>
                <p className='rounded-4xl max-w-[130px] custom-md-shadow   text-center bg-[#FF3838] px-5 py-2'> June. 2024 </p>
                <h3 className='sm:text-4xl text-2xl font-extrabold pt-8'>Brobl . social Platform </h3>
                <p className='text-lg text-[#C0B8B8] tracking-wide font-[15px] pt-5'>Brobl is a blogging platform built with Next.js, Tailwind CSS, and JavaScript. It allows users to read posts, leave comments, and interact with content in a clean, responsive layout. The platform supports dynamic routing for individual posts, organized content display, and basic interactivity. Designed for simplicity and usability, Brobl provides a straightforward blogging experience across devices.
</p>
                <div className="flex flex-wrap    gap-6 py-8 mx-auto ">
                    <div className="shadow-md bg-[#474747] flex gap-2 items-center justify-center rounded-xl text-md font-sans px-3 py-2 w-auto">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
                            alt="Typescript Icon"
                            width={40}
                            height={40}
                            className="w-5 h-5"
                        />
                        Typescript
                    </div>

                    <div className="shadow-md bg-[#474747] flex gap-2 items-center justify-center rounded-xl text-md font-sans px-3 py-2 w-auto">
                        <Image
                            src="https://img.icons8.com/?size=100&id=B4UIxQoMYIGD&format=png&color=000000"
                            alt="express Icon"
                            width={40}
                            height={40}
                            className="w-5 h-5"
                        />
                        Express
                    </div>

                    <div className="shadow-md bg-[#474747] flex gap-2 items-center justify-center rounded-xl text-md font-sans px-3 py-2 w-auto">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
                            alt="node Icon"
                            width={40}
                            height={40}
                            className="w-5 h-5"
                        />
                        Nodejs
                    </div>

                    <div className="shadow-md bg-[#474747] flex gap-2 items-center justify-center rounded-xl text-md font-sans px-3 py-2 w-auto">
                        <Image
                            src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000"
                            alt="Tailwind Icon"
                            width={40}
                            height={40}
                            className="w-5 h-5"
                        />
                        Tailwind
                    </div>

                    <div className="shadow-md bg-[#474747] flex gap-2 items-center justify-center rounded-xl text-md  font-sans px-3 py-2 w-auto">
                        <Image
                            src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
                            alt="Mongo Icon"
                            width={40}
                            height={40}
                            className="w-6 h-6"
                        />
                        Mongo DB
                    </div>

                    <div className="shadow-md bg-[#474747] flex gap-2 items-center justify-center rounded-xl text-md font-sans px-3 py-2 w-auto">
                        <Image
                            src="https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000"
                            alt="Next Icon"
                            width={40}
                            height={40}
                            className="w-7 h-7"
                        />
                        Next Js
                    </div>
                </div>
                <hr className='mb-8' />
                <a href='https://brobl-client.vercel.app/' target='_blank' className='text-sm text-[#eae6e6] shadow-text  tracking-wider font-[18px]  cursor-pointer  hover:text-[#E45858] hover:underline'>VISIT SITE <span className='pl-2'>→</span></a>
                <Image className='mx-auto w-auto  rounded-xl lg:h-[600px] sm:h-[300px] mt-10 bg-none' alt='img' width={1000} height={1000} src={pic3} />

            </div>


        </>

    )
}

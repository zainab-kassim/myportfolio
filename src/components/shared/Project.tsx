import React from 'react'
import Image from 'next/image'
import proj1 from '../../images/icons/celestiqueimg.jpg'
import proj2 from '../../images/icons/aptechimg.jpg'
import pic1 from '../../images/icons/pichr2.jpg'

export default function Project() {
    return (
        <div className='my-48 '>
            <p className='text-3xl font-extrabold'>Here’s some things i have built 🥳</p>
            <h6 className='text-sm text-[#949494]'>During the span of 2023 - 2025</h6>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>

                <div className='border-[1px] border-[#292828] pt-8 pb-20 px-6 rounded-xl'>
                    <Image width={900} height={900} className='rounded-md max-w-full' alt='project1' src={proj1} />
                    <div className='pt-8 '>
                        <h2 className='text-2xl font-bold'>Celestique</h2>
                        <Image width={1000} height={1000} className='h-[7px] mt-2  w-full' alt='hr-rule' src={pic1} />
                        <div className='text-md max-w-xl tracking-wide mt-4 text-[#949494]'>
                            I enjoy turning frameworks and designs into well driven philosophy art that can be gone, with 3+ Years of experience in the field, I thrive in making automation and believe that there
                        </div>
                        <div className='flex flex-wrap gap-4 items-center max-w-xl my-12'>
                            <div className='flex justify-center h-9 w-auto items-center gap-2 px-4 py-2  rounded-lg border-[0.5px] border-[#292828] bg-[#363535]'>
                                <Image alt='Next-icon' width={25} height={25} className='w-7 h-7' src='https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000' />
                                <div className='text-[12px]'>Next Js</div>
                            </div>

                            <div className='flex justify-center h-9 w-auto items-center gap-2 px-4 py-2  rounded-lg border-[0.5px] border-[#292828] bg-[#363535]'>
                                <Image alt='Next-icon' width={25} height={25} className='w-5 h-5' src='https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000' />
                                <div className='text-[12px]'>Express</div>
                            </div>

                            <div className='flex justify-center h-9 w-auto items-center gap-2 px-4 py-1  rounded-lg border-[0.5px] border-[#292828] bg-[#363535]'>
                                <Image alt='Next-icon' width={25} height={25} className='w-6 h-6' src='https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000' />
                                <div className='text-[12px]'>Tailwind</div>
                            </div>

                            <div className='flex justify-center h-9 w-auto items-center gap-2 px-4 py-1  rounded-lg border-[0.5px] border-[#292828] bg-[#363535]'>
                                <Image alt='Next-icon' width={25} height={25} className='w-6 h-6' src='https://img.icons8.com/?size=100&id=B403GJErHZpx&format=png&color=000000' />
                                <div className='text-[12px]'>Mongo Db</div>
                            </div>

                            <div className='flex justify-center h-9 gap-2 w-auto items-center  px-4 py-1  rounded-lg border-[0.5px] border-[#292828] bg-[#363535]'>
                                <Image alt='Next-icon' width={25} height={25} className='w-5 h-5' src='https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000' />
                                <div className='text-[12px]'>Postman</div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className='border-[1px] border-[#292828] pt-8 pb-20 px-8 rounded-xl'>
                    <Image width={900} height={900} className='rounded-md' alt='project2' src={proj2} />
                    <div className='pt-8'>
                        <h2 className='text-2xl font-bold'>Appvarsity</h2>
                        <Image width={1000} height={1000} className='h-[7px] mt-2  w-full' alt='hr-rule' src={pic1} />
                        <div className='text-md max-w-xl tracking-wide mt-4 text-[#949494]'>
                            I enjoy turning frameworks and designs into well driven philosophy art that can be gone, with 3+ Years of experience in the field, I thrive in making automation and believe that there
                        </div>

                        <div className='flex flex-wrap gap-4 max-w-xl items-center my-12'>
                            <div className='flex justify-center h-9 w-auto items-center gap-2 px-4 py-2  rounded-lg border-[0.5px] border-[#292828] bg-[#363535]'>
                                <Image alt='Next-icon' width={25} height={25} className='w-7 h-7' src='https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000' />
                                <div className='text-[12px]'>Next Js</div>
                            </div>

                            <div className='flex justify-center h-9 w-auto items-center gap-2 px-4 py-2  rounded-lg border-[0.5px] border-[#292828] bg-[#363535]'>
                                <Image alt='Next-icon' width={25} height={25} className='w-5 h-5' src='https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000' />
                                <div className='text-[12px]'>Express</div>
                            </div>

                            <div className='flex justify-center h-9 w-auto items-center gap-2 px-4 py-1  rounded-lg border-[0.5px] border-[#292828] bg-[#363535]'>
                                <Image alt='Next-icon' width={25} height={25} className='w-6 h-6' src='https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000' />
                                <div className='text-[12px]'>Tailwind</div>
                            </div>

                            <div className='flex justify-center h-9 w-auto items-center gap-2 px-4 py-1  rounded-lg border-[0.5px] border-[#292828] bg-[#363535]'>
                                <Image alt='Next-icon' width={25} height={25} className='w-5 h-5' src='https://cdn-icons-png.flaticon.com/512/5968/5968322.png' />
                                <div className='text-[12px]'>Node Js</div>
                            </div>

                            <div className='flex justify-center h-9 w-auto items-center gap-2 px-4 py-1  rounded-lg border-[0.5px] border-[#292828] bg-[#363535]'>
                                <Image alt='Next-icon' width={25} height={25} className='w-6 h-6' src='https://img.icons8.com/?size=100&id=B403GJErHZpx&format=png&color=000000' />
                                <div className='text-[12px]'>Mongo Db</div>
                            </div>

                            <div className='flex justify-center h-9 gap-2 w-auto items-center  px-4 py-1  rounded-lg border-[0.5px] border-[#292828] bg-[#363535]'>
                                <Image alt='Next-icon' width={25} height={25} className='w-5 h-5' src='https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png' />
                                <div className='text-[12px]'>Postman</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='border-[1px] border-[#292828] pt-8 pb-20 px-8 rounded-xl'>
                    <Image width={900} height={900} className='rounded-md' alt='project2' src={proj2} />
                    <div className='pt-8'>
                        <h2 className='text-2xl font-bold'>Appvarsity</h2>
                        <Image width={1000} height={1000} className='h-[7px] mt-2  w-full' alt='hr-rule' src={pic1} />
                        <div className='text-md max-w-xl tracking-wide mt-4 text-[#949494]'>
                            I enjoy turning frameworks and designs into well driven philosophy art that can be gone, with 3+ Years of experience in the field, I thrive in making automation and believe that there
                        </div>

                        <div className='flex flex-wrap gap-4 max-w-xl items-center my-12'>
                            <div className='flex justify-center h-9 w-auto items-center gap-2 px-4 py-2  rounded-lg border-[0.5px] border-[#292828] bg-[#363535]'>
                                <Image alt='Next-icon' width={25} height={25} className='w-7 h-7' src='https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000' />
                                <div className='text-[12px]'>Next Js</div>
                            </div>

                            <div className='flex justify-center h-9 w-auto items-center gap-2 px-4 py-2  rounded-lg border-[0.5px] border-[#292828] bg-[#363535]'>
                                <Image alt='Next-icon' width={25} height={25} className='w-5 h-5' src='https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000' />
                                <div className='text-[12px]'>Express</div>
                            </div>

                            <div className='flex justify-center h-9 w-auto items-center gap-2 px-4 py-1  rounded-lg border-[0.5px] border-[#292828] bg-[#363535]'>
                                <Image alt='Next-icon' width={25} height={25} className='w-6 h-6' src='https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000' />
                                <div className='text-[12px]'>Tailwind</div>
                            </div>

                            <div className='flex justify-center h-9 w-auto items-center gap-2 px-4 py-1  rounded-lg border-[0.5px] border-[#292828] bg-[#363535]'>
                                <Image alt='Next-icon' width={25} height={25} className='w-5 h-5' src='https://cdn-icons-png.flaticon.com/512/5968/5968322.png' />
                                <div className='text-[12px]'>Node Js</div>
                            </div>

                            <div className='flex justify-center h-9 w-auto items-center gap-2 px-4 py-1  rounded-lg border-[0.5px] border-[#292828] bg-[#363535]'>
                                <Image alt='Next-icon' width={25} height={25} className='w-6 h-6' src='https://img.icons8.com/?size=100&id=B403GJErHZpx&format=png&color=000000' />
                                <div className='text-[12px]'>Mongo Db</div>
                            </div>

                            <div className='flex justify-center h-9 gap-2 w-auto items-center  px-4 py-1  rounded-lg border-[0.5px] border-[#292828] bg-[#363535]'>
                                <Image alt='Next-icon' width={25} height={25} className='w-5 h-5' src='https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png' />
                                <div className='text-[12px]'>Postman</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

import React from 'react'
import Image from 'next/image'

export default function Skills() {
    return (
        <div className='mx-auto max-w-7xl mt-30 mb-36'>
            <h2 className='pb-3 text-xl italic font-serif'>Skills</h2>
            <div className="rounded-xl flex flex-wrap  gap-6 py-10 px-5 mx-auto bg-[#303030]">
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
                        src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
                        alt="Typescript Icon"
                        width={40}
                        height={40}
                        className="w-6 h-6"
                    />
                    Javascript
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


                <div className="shadow-md bg-[#474747] flex gap-2 items-center justify-center rounded-xl text-md font-sans px-3 py-2 w-auto">
                    <Image
                        src="https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000"
                        alt="postman Icon"
                        width={40}
                        height={40}
                        className="w-5 h-5"
                    />
                    Postman
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

                <div className="shadow-md bg-[#474747] flex gap-2 items-center justify-center rounded-xl text-md font-sans px-3 py-2 w-auto">
                    <Image
                        src="https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000"
                        alt="React Icon"
                        width={40}
                        height={40}
                        className="w-6 h-6"
                    />
                    React Js
                </div>


            </div>
        </div>
    )
}

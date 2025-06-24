import React from 'react'
import Image from 'next/image'

export default function Experience() {
  return (
    <div className='mx-auto max-w-7xl my-20 '>
      <h2 className='pb-3 italic text-xl font-serif'>Experience</h2>
      <div className='rounded-xl py-10 px-5  bg-[#3d3c3c]'>
        <div className='flex justify-between items-center pb-2'>
          <h2 className='sm:text-3xl text-2xl font-bold tracking-tight italic'>Appvarsity  (<span className='texxt-sm italic'>startup</span>)</h2>
          <h5 className='text-md italic'>March 2024<span className='px-2'>-</span>Sept. 2025</h5>
        </div>
        <hr className='border-2 border-[#FF3838]' />
        <p className='text-lg pt-10 pb-10 font-[15px]'>
          Worked on building a responsive learning platform for students. Helped design the UI, implement interactive features, and style components. Gathered data such as past questions, organized content, and contributed to planning, debugging, API testing, and improving overall performance and mobile responsiveness.
        </p>
        <div className="rounded-xl flex flex-wrap  gap-6 py-8 px-5 mx-auto bg-[#303030]">
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

      </div>
    </div>

  )
}

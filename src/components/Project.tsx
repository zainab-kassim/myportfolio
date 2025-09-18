import React from 'react'
import Image from 'next/image'




export default function Project() {
    const projects = [
        {
            title: "Celestique",
            description:
                "Celstique is an e-commerce platform built to provide a seamless online shopping experience. It features a modern, responsive, and user-friendly interface that allows customers to easily browse products, manage their carts, and complete secure checkouts.",
            techStacks: ["React", "Next.js", "Tailwind", "Mongo Db", "Postman", "Typescript", "Express"],
            link: "https://celestique.vercel.app/",
        },
        {
            title: "Appvarsity",
            description:
                "Appvarsity is a learning platform designed to support Aptech students in their academic journey. It provides access to study materials, exam preparation resources, and essential information about Aptech courses.",
            techStacks: ["React", "Next.js", "Tailwind", "Mongo Db", "Postman", "Typescript", "Express"],
            link: "https://appvarsity.vercel.app/",
        },
    ]
    return (
        <div id='Projects' className='mx-auto max-w-6xl sm:px-14 px-5 py-24'>
            <div className="font-extrabold  text-center w-[280px] sm:w-[340px] md:w-fit mx-auto relative flex flex-col md:flex-row items-center justify-center   text-2xl sm:text-3xl">
                Here&apos;s some things I have built
                <div className="absolute right-1 top-13 sm:right-2 sm:top-15 md:-right-22 md:top-6 -rotate-12 w-32 bg-[#FF8B42] text-[#90440D] text-sm font-normal rounded-full px-4 py-1.5">
                    2023 - 2025
                </div>
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-8 items-center mt-24'>
                {projects.map((project, index) => (
                    <div key={index} className='bg-[#151515] border-[0.5px] px-8 pt-4 pb-8 rounded-lg border-[#313030]'>
                        <div className='flex flex-row justify-between items-center'>
                            <h2 className='text-2xl'>{project.title}</h2>
                            <a href=""><Image height={70} width={70} className=' w-10 h-10 mt-5' alt='githublogo' src='https://img.icons8.com/?size=100&id=fmFqQmR0UdsR&format=png&color=480891' /></a>
                        </div>
                        <hr className='mb-5 mt-2' />
                        <div className='text-[#ACA6A6] text-sm'>
                            {project.description}
                        </div>
                        <div className='flex flex-row flex-wrap gap-2 text-sm mt-4 mb-5 items-center'>
                            {project.techStacks.map((techStack, i) => (
                                <h2 key={i}>{techStack}.</h2>
                            ))}

                        </div>

                        <a href={project.link} className='text-[#ACA6A6] text-md mb-14'>View Project{' '}🚀</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

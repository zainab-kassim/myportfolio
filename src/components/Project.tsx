import React from 'react'
import Image from 'next/image'
import githublogo from '../images/icons/github (3).png'
import Notebook from './ui/Notebook'
import { caveat } from '@/fonts/caveat'


type ProjectItem = {
    title: string
    tagline: string
    url: string
    image: string
    description: string
    techStacks: string[]
    link?: string
    github: string
    highlights?: string[]
    status?: string
    coverColor: string
}

const featured: ProjectItem = {
    title: "Byzayelle",
    coverColor: "#1c1c1e",
    tagline: "Fashion e-commerce with made-to-order pieces",
    url: "byzayelle.com",
    image: "/projects/zayelle.jpg",
    description:
        "Byzayelle is the full-stack e-commerce platform for my fashion brand, with made-to-order custom pieces and checkout in USD, GBP, CAD and NGN.",
    highlights: [
        "Rotating refresh tokens per device",
        "Webhooks that never oversell stock",
        "Fixed iOS Safari login drops",
    ],
    techStacks: ["Next.js", "TypeScript", "Tailwind", "Zustand", "Node.js", "Express", "Supabase", "PostgreSQL", "Stripe", "Paystack"],
    link: "https://byzayelle.com/",
    github: "https://github.com/zainab-kassim/zayelle-frontend",
}

const projects: ProjectItem[] = [
    {
        title: "Zayelle Photo Pipeline",
        coverColor: "#3f9b46",
        tagline: "Serverless product-photo resizing on AWS",
        url: "zayelle-photo-pipeline",
        image: "/projects/photo-pipeline.jpg",
        description:
            "Turns 3–10 MB product photos for the Byzayelle store into two web-ready WebPs (1200px and 400px) with one Sharp resize function. Uploading a photo to S3 triggers an AWS Lambda that saves both sizes in about a second, deployed with AWS SAM; the same function also runs locally and behind a Next.js upload UI.",
        techStacks: ["TypeScript", "Node.js", "Sharp", "Next.js", "AWS Lambda", "Amazon S3", "AWS SAM"],
        github: "https://github.com/zainab-kassim/zayelle-photo-pipeline",
    },
    {
        title: "Celestique",
        coverColor: "#b4553f",
        tagline: "Modern e-commerce storefront",
        url: "celestique.vercel.app",
        image: "/projects/celestique.jpg",
        description:
            "Celestique is an e-commerce platform built to provide a seamless online shopping experience. It features a modern, responsive, and user-friendly interface that allows customers to easily browse products, manage their carts, and complete secure checkouts.",
        techStacks: ["React", "Next.js", "Tailwind", "MongoDB", "Postman", "TypeScript", "Express"],
        link: "https://celestique.vercel.app/",
        github: "https://github.com/somkenemuscle/Celestique",
    },
    {
        title: "Appvarsity",
        coverColor: "#4f46c8",
        tagline: "Learning hub for Aptech students",
        url: "appvarsity.vercel.app",
        image: "/projects/appvarsity.jpg",
        description:
            "Appvarsity is a learning platform designed to support Aptech students in their academic journey. It provides access to study materials, exam preparation resources, and essential information about Aptech courses.",
        techStacks: ["React", "Next.js", "Tailwind", "MongoDB", "Postman", "TypeScript", "Express"],
        link: "https://appvarsity.vercel.app/",
        github: "https://github.com/somkenemuscle/AppVarsity",
    },
]

// Screenshot taped onto the notebook cover like a photo.
function CoverPhoto({ project, priority = false }: { project: ProjectItem, priority?: boolean }) {
    return (
        <div className='relative -rotate-2 bg-white p-2 pb-3 shadow-[0_10px_20px_-8px_rgba(0,0,0,0.6)]'>
            <span className='absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 rotate-3 bg-[#fdf3c4]/80 shadow-sm' aria-hidden='true' />
            <Image src={project.image} alt={`${project.title} preview`} width={1200} height={750} priority={priority} className='w-full h-auto' />
        </div>
    )
}

function TechChips({ techStacks }: { techStacks: string[] }) {
    return (
        <ul className='flex flex-wrap gap-2'>
            {techStacks.map((tech) => (
                <li key={tech} className='rounded-full border border-[#2a2a2a]/25 bg-white/60 px-3 py-1 text-xs text-[#2a2a2a]'>{tech}</li>
            ))}
        </ul>
    )
}

function ProjectLinks({ project }: { project: ProjectItem }) {
    return (
        <div className='flex items-center gap-3'>
            {project.link && (
                <a href={project.link} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-1 rounded-full bg-[#1c1c1e] hover:bg-[#333] px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300'>
                    Visit site <span aria-hidden='true'>↗</span>
                </a>
            )}
            <a href={project.github} target='_blank' rel='noopener noreferrer' aria-label={`${project.title} on GitHub`} title='View code on GitHub' className='flex items-center justify-center w-10 h-10 rounded-full bg-[#1c1c1e] hover:bg-[#333] transition-colors duration-300'>
                <Image height={40} width={40} className='w-5 h-5' alt='' src={githublogo} />
            </a>
        </div>
    )
}

// slight, alternating tilt so the notebooks look casually laid out
const tilts = ['-rotate-2', 'rotate-1', 'rotate-2', '-rotate-1']

function Sticker({ children, className }: { children: React.ReactNode, className: string }) {
    return (
        <span className={`absolute top-5 right-12 rotate-6 rounded-full px-3 py-1 text-xs font-semibold shadow-md ${className}`}>
            {children}
        </span>
    )
}

export default function Project() {
    return (
        <div id='Projects' className='mx-auto max-w-7xl sm:px-14 px-5 pt-16 md:pt-20 pb-28 scroll-mt-24 overflow-x-clip relative'>
            <div className="font-semibold  text-center w-[280px] sm:w-[340px] md:w-fit mx-auto relative flex flex-col md:flex-row items-center justify-center   text-2xl sm:text-3xl">
                Here&apos;s some things I have built
                <div className={`${caveat.className} absolute right-1 top-13 sm:right-2 sm:top-15 md:-right-22 md:top-6 -rotate-12 w-32 bg-[#FF8B42] text-[#90440D] text-lg font-semibold text-center rounded-full px-4 py-0.5`}>
                    2023 - 2026
                </div>
            </div>

            {/* 2 x 2 grid of notebooks: hover (or tap) one to open it */}
            <div className='relative grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-14 md:gap-y-16 items-stretch mt-16 md:mt-20'>
                {[featured, ...projects].map((project, i) => (
                    <Notebook
                        key={project.title}
                        className={`min-h-[440px] md:min-h-[560px] ${tilts[i % tilts.length]} transition-transform duration-500 hover:rotate-0`}
                        coverColor={project.coverColor}
                        cover={
                            <div className='flex h-full flex-col'>
                                {project === featured && <Sticker className='bg-[#FF8B42] text-[#4a1f04]'>★ Featured</Sticker>}
                                {project.status && <Sticker className='bg-[#FACC15] text-[#4a3a04]'>{project.status}</Sticker>}
                                <div className='mt-6'><CoverPhoto project={project} priority={i === 0} /></div>
                                <div className='mt-auto rounded-md bg-[#fbf7ee] px-4 py-3 text-[#2a2a2a] shadow-[0_6px_14px_-6px_rgba(0,0,0,0.6)]'>
                                    <h3 className={`${caveat.className} font-semibold text-3xl leading-none`}>{project.title}</h3>
                                    <p className='mt-1 text-xs text-[#555]'>{project.tagline}</p>
                                </div>
                                <p className='mt-4 text-xs text-white/60'>
                                    <span className='[@media(hover:none)]:hidden'>Hover to open ↗</span>
                                    <span className='hidden [@media(hover:none)]:inline'>Tap to open ↗</span>
                                </p>
                            </div>
                        }
                        page={
                            <div className='flex h-full flex-col'>
                                <h3 className={`${caveat.className} font-semibold text-4xl leading-none`}>{project.title}</h3>
                                {project.status && (
                                    <span className='mt-3 self-start rounded-full bg-[#FACC15]/30 border border-[#c9a20a]/40 px-3 py-0.5 text-xs font-medium text-[#6b5306]'>{project.status}</span>
                                )}
                                <p className='mt-4 text-sm leading-7'>{project.description}</p>
                                {project.highlights && (
                                    <ul className='mt-3 space-y-1'>
                                        {project.highlights.map((point) => (
                                            <li key={point} className='flex gap-2.5 text-sm leading-7'>
                                                <span className='text-[#FF8B42]' aria-hidden='true'>✓</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <p className={`${caveat.className} font-semibold mt-5 mb-2 text-xl text-[#555]`}>Built with</p>
                                <TechChips techStacks={project.techStacks} />
                                <div className='mt-auto pt-7'><ProjectLinks project={project} /></div>
                                {/* phones only: notebooks open by themselves there, so explain how to see the cover */}
                                <p className='hidden [@media(hover:none)]:block mt-4 text-xs text-[#888]'>↺ Tap the page to close it and see the cover</p>
                            </div>
                        }
                    />
                ))}
            </div>
        </div>
    )
}

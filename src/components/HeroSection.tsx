import React from 'react'
import Image from 'next/image'
import githublogo from '../images/icons/github (3).png'
import memoji from '../images/icons/Me-moji.png'
import photo from '../images/zainab.jpg'
import ScrollReveal from './ui/ScrollReveal'
import Link from 'next/link'
import { BotAvatar } from './ui/Avatars'

type Tile = {
  content: React.ReactNode
  label: string
  bg: string
  rotate: string
  position: string
  size: string
  shape: string
  delay: string
  hideOnMobile?: boolean
}

// Tiles floating around the headline. `position` is relative to the hero
// container, `shape` mixes circles and blobs to echo the photo, and `delay`
// staggers the bobbing so the tiles don't move in sync.
const tiles: Tile[] = [
  { content: <Image src={memoji} alt='' className='w-[85%] h-[85%] object-contain mt-2' />, label: 'Zainab memoji', shape: 'rounded-[42%_58%_63%_37%/41%_44%_56%_59%]', bg: 'bg-[#FFB86B]', rotate: '-rotate-8', position: 'left-[4%] top-[6%] md:left-[5%] md:top-[14%]', size: 'w-14 h-14 md:w-20 md:h-20', delay: '0s' },
  { content: '🐈', label: 'cat', shape: 'rounded-full', bg: 'bg-[#7C5CFF]', rotate: 'rotate-12', position: 'left-[30%] top-[1%]', size: 'w-12 h-12', delay: '1.2s', hideOnMobile: true },
  { content: '😴', label: 'sleeping', shape: 'hero-blob', bg: 'bg-[#2563EB]', rotate: '-rotate-6', position: 'right-[26%] top-0 md:right-[28%] md:top-[4%]', size: 'w-11 h-11 md:w-14 md:h-14', delay: '2.1s' },
  { content: <BotAvatar />, label: 'robot avatar', shape: 'rounded-[38%]', bg: 'bg-[#A7F3D0]', rotate: 'rotate-6', position: 'right-[4%] top-[10%] md:right-[4%] md:top-[20%]', size: 'w-14 h-14 md:w-[72px] md:h-[72px]', delay: '0.6s' },
  { content: '☕', label: 'coffee', shape: 'rounded-[60%_40%_30%_70%/60%_30%_70%_40%]', bg: 'bg-[#FF8B42]', rotate: '-rotate-12', position: 'left-[15%] top-[42%]', size: 'w-14 h-14', delay: '1.7s', hideOnMobile: true },
  { content: '🎨', label: 'palette', shape: 'rounded-[50%_50%_50%_50%/60%_60%_40%_40%]', bg: 'bg-[#F472B6]', rotate: 'rotate-12', position: 'right-[16%] top-[46%]', size: 'w-16 h-16', delay: '2.6s', hideOnMobile: true },
  { content: '📖', label: 'reading', shape: 'hero-blob', bg: 'bg-[#7DD3FC]', rotate: '-rotate-6', position: 'left-[8%] bottom-[8%] md:left-[3%] md:bottom-[16%]', size: 'w-14 h-14 md:w-[76px] md:h-[76px]', delay: '0.9s' },
  { content: '🧵', label: 'sewing thread', shape: 'rounded-full', bg: 'bg-[#FACC15]', rotate: 'rotate-6', position: 'left-[27%] bottom-[2%]', size: 'w-11 h-11', delay: '2.4s', hideOnMobile: true },
  { content: '🛼', label: 'roller skate', shape: 'rounded-[70%_16px_70%_16px]', bg: 'bg-[#312E81]', rotate: '-rotate-3', position: 'right-[10%] bottom-[4%] md:right-[5%] md:bottom-[12%]', size: 'w-12 h-12 md:w-16 md:h-16', delay: '1.4s' },
]


const navLinks = [
  { label: 'Projects', href: '#Projects', dot: 'bg-[#7C5CFF]' },
  { label: 'About', href: '#Aboutme', dot: 'bg-[#F472B6]' },
]

const socials = [
  { label: 'X (Twitter)', href: 'https://x.com/TemiDevtips', icon: 'https://img.icons8.com/?size=100&id=A4DsujzAX4rw&format=png&color=ffffff', bg: 'bg-[#262626]', rotate: '-rotate-6' },
  { label: 'GitHub', href: 'https://github.com/zainab-kassim', icon: githublogo, bg: 'bg-[#7C5CFF]', rotate: 'rotate-3' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zainab-kassim/', icon: 'https://img.icons8.com/?size=100&id=2EqeH19eMd3a&format=png&color=ffffff', bg: 'bg-[#2563EB]', rotate: '-rotate-2' },
  { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=kassimzainab11@gmail.com&su=Hello%20Temi&body=I%20would%20like%20to%20get%20in%20touch%20with%20you.', icon: 'https://img.icons8.com/?size=100&id=Y2GfpkgYNp42&format=png&color=ffffff', bg: 'bg-[#FF8B42]', rotate: 'rotate-6' },
  { label: 'Instagram', href: 'https://www.instagram.com/zainab_temi_/', icon: 'https://img.icons8.com/?size=100&id=32320&format=png&color=FFFFFF', bg: 'bg-[#F472B6]', rotate: '-rotate-3' },
]

export default function HeroSection() {
  return (
    <>
      {/* background: dotted grid plus soft white glows, clipped so it can't cause sideways scroll */}
      <div className='absolute inset-x-0 top-0 h-[1000px] overflow-hidden pointer-events-none' aria-hidden='true'>
        <div className='hero-pattern absolute inset-0' />
        <div className='absolute top-40 left-1/2 -translate-x-[110%] w-80 h-80 rounded-full bg-white/[0.07] blur-3xl' />
        <div className='absolute top-72 left-1/2 translate-x-[10%] w-80 h-80 rounded-full bg-white/[0.05] blur-3xl' />
      </div>

      <div className='sm:px-14 px-5 sticky top-6 z-20'>
        <nav className='flex mx-auto max-w-md sm:max-w-3xl justify-between items-center pl-4 pr-2 sm:pl-5 py-2 bg-[#141414]/70 border border-white/10 shadow-xl/30 backdrop-blur-2xl rounded-full'>
          <Link href="/" aria-label='Zainab Kassim, home' className='flex transition-transform duration-300 hover:-rotate-6 hover:scale-110'>
            {/* ZK monogram: chunky rounded strokes to match the photo blob, with an orange leg on the K */}
            <svg viewBox='0 0 46 32' className='h-7 sm:h-8 w-auto' aria-hidden='true'>
              <g fill='none' stroke='white' strokeWidth='5' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M5 7 H17 Q20 7 18.4 9.6 L7.6 22.4 Q6 25 9 25 H21' />
                <path d='M27 7 V25' />
                <path d='M39 7 Q34 12 28.5 16' />
                <path d='M31.5 15.5 Q36 19 40 25' stroke='#FF8B42' />
              </g>
            </svg>
          </Link>
          <div className='flex items-center gap-1 sm:gap-2 text-sm text-white/80'>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className='group flex items-center gap-1.5 rounded-full px-3 sm:px-4 py-2 transition-colors duration-300 hover:bg-white/10 hover:text-white'>
                <span className={`w-1.5 h-1.5 rounded-full ${link.dot} scale-0 transition-transform duration-300 group-hover:scale-100`} aria-hidden='true' />
                {link.label}
              </a>
            ))}
            <a href="https://docs.google.com/document/d/11y7HC65kxaP5NEw_uptxc9U-Td4Uf2MkB9OAuz6y55o/edit?usp=sharing" target='_blank' rel='noopener noreferrer' className='ml-1 flex items-center gap-1 rounded-full bg-[#262626] hover:bg-[#2f2f2f] text-white font-medium px-4 sm:px-5 py-2 sm:py-2.5 border border-white/15 shadow-[3px_3px_0_rgba(0,0,0,0.55)] transition-colors duration-300'>
              Resume <span aria-hidden='true'>↗</span>
            </a>
          </div>
        </nav>
      </div>


      <div className='relative flex flex-col sm:px-14 px-5 justify-center items-center mx-auto max-w-5xl mt-20 sm:mt-24 pt-24 pb-20 md:pt-28 md:pb-20'>
        {tiles.map((tile) => (
          <div
            key={tile.label}
            className={`hero-float absolute ${tile.position} ${tile.hideOnMobile ? 'hidden md:block' : ''}`}
            style={{ animationDelay: tile.delay }}
          >
            <div
              role='img'
              aria-label={tile.label}
              className={`${tile.size} ${tile.bg} ${tile.rotate} ${tile.shape} flex items-center justify-center overflow-hidden soft-lift text-2xl md:text-3xl select-none transition-transform duration-300 hover:rotate-0 hover:scale-110`}
            >
              {tile.content}
            </div>
          </div>
        ))}

        <div className='relative animate-fade-in-up'>
          <div className='hero-blob w-28 h-28 md:w-36 md:h-36 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]'>
            <Image src={photo} alt='Zainab Kassim' quality={90} priority className='hero-blob w-full h-full object-cover object-[50%_30%]' />
          </div>
          <span className='absolute top-1 -left-12 md:-left-10 -rotate-6 z-10 bg-white text-black text-xs md:text-sm font-medium rounded-full px-3 py-1 shadow-lg whitespace-nowrap'>hi there 👋</span>
          <span className='absolute bottom-3 right-3 w-4 h-4 rounded-full bg-[#34D399] border-2 border-[#1a1a1a]' />
        </div>

        <div className='flex flex-col items-center text-center text-white animate-fade-in-up font-sans mt-7 relative z-10'>
          <h1 className='font-extrabold tracking-tight leading-[1.1] text-2xl md:text-[28px] lg:text-[32px]'>
            Zainab is a<br />
            <span className='relative inline-block'>
              Software Developer
              {/* hand-drawn squiggle under the role */}
              <svg viewBox='0 0 300 12' preserveAspectRatio='none' className='absolute left-0 -bottom-2 w-full h-2.5' aria-hidden='true'>
                <path d='M3 8 Q 20 2 37 7 T 75 7 T 112 7 T 150 7 T 187 7 T 225 7 T 262 7 T 297 6' fill='none' stroke='#FF8B42' strokeWidth='4' strokeLinecap='round' />
              </svg>
            </span>
          </h1>
          <p className='mt-6 md:mt-9 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-white/80'>
            <span aria-hidden='true'>📍</span>
            Based in Ottawa, <span className='-ml-1'><span className='text-red-500'>Ca</span>na<span className='text-red-500'>da</span></span>
          </p>
        </div>

        <ScrollReveal animation='animate-expand-horizontally'>
          <div className='flex justify-center mt-7 gap-3 relative mb-4'>
            {socials.map((social) => (
              <a key={social.label} href={social.href} target='_blank' rel='noopener noreferrer' aria-label={social.label} title={social.label}>
                <span className={`${social.bg} ${social.rotate} flex items-center justify-center w-12 h-12 rounded-xl border border-white/10 shadow-[0_8px_18px_-6px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:rotate-0 hover:-translate-y-1.5 hover:scale-110`}>
                  <Image height={70} width={70} className='w-5 h-5 object-contain' alt='' src={social.icon} />
                </span>
              </a>
            ))}
          </div>
        </ScrollReveal>

        

      </div>
    </>
  )
}

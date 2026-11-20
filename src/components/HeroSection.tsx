import React from 'react'
import Image from 'next/image'
import githublogo from '../images/icons/github (3).png'
import photo from '../images/zainab.jpg'
import ScrollReveal from './ui/ScrollReveal'
import Link from 'next/link'
import { caveat } from '@/fonts/caveat'


// Faint chalk scribbles scattered around the board, kept away from the photo and headline.
const chalk = [
  { text: 'E = mc²', position: 'left-[6%] top-[14%]', rotate: '-rotate-6', size: 'text-2xl' },
  { text: 'a² + b² = c²', position: 'left-[18%] top-[26%]', rotate: 'rotate-3', size: 'text-xl', hideOnMobile: true },
  { text: '∫ eˣ dx = eˣ + C', position: 'left-[4%] top-[44%]', rotate: 'rotate-2', size: 'text-xl', hideOnMobile: true },
  { text: 'O(n log n)', position: 'left-[20%] top-[58%]', rotate: '-rotate-3', size: 'text-2xl', hideOnMobile: true },
  { text: 'f(x) = x² + 2x + 1', position: 'left-[7%] top-[74%]', rotate: '-rotate-2', size: 'text-xl', hideOnMobile: true },
  { text: 'π ≈ 3.14159', position: 'left-[28%] top-[86%]', rotate: 'rotate-6', size: 'text-lg', hideOnMobile: true },
  { text: '</>', position: 'left-[33%] top-[11%]', rotate: 'rotate-12', size: 'text-3xl', hideOnMobile: true },
  { text: 'Σ 1/n²', position: 'right-[30%] top-[9%]', rotate: '-rotate-6', size: 'text-2xl', hideOnMobile: true },
  { text: 'λx. x + 1', position: 'right-[6%] top-[13%]', rotate: 'rotate-3', size: 'text-xl' },
  { text: 'y = mx + b', position: 'right-[18%] top-[30%]', rotate: '-rotate-3', size: 'text-2xl', hideOnMobile: true },
  { text: 'if (sleep < 8) coffee++', position: 'right-[3%] top-[45%]', rotate: 'rotate-2', size: 'text-lg', hideOnMobile: true },
  { text: '√2 ≈ 1.414', position: 'right-[22%] top-[60%]', rotate: 'rotate-6', size: 'text-xl' },
  { text: 'n! = n·(n−1)!', position: 'right-[5%] top-[76%]', rotate: '-rotate-6', size: 'text-xl', hideOnMobile: true },
  { text: 'Δx → 0', position: 'right-[30%] top-[88%]', rotate: '-rotate-2', size: 'text-lg', hideOnMobile: true },
  { text: '{ }', position: 'left-[46%] top-[94%]', rotate: 'rotate-12', size: 'text-2xl', hideOnMobile: true },
]

// Chalk doodles drawn on the board: a graph, a triangle, a circle, arrows and stars.
const doodles = [
  {
    position: 'left-[3%] top-[56%]', size: 'w-36 h-28', rotate: '-rotate-3', viewBox: '0 0 140 110',
    content: <><path d='M12 98 V10 M12 98 H132 M8 16 L12 8 L16 16 M126 94 L134 98 L126 102' /><path d='M14 80 C 34 20, 50 20, 66 56 S 100 96, 128 26' /></>,
  },
  {
    position: 'right-[4%] top-[24%]', size: 'w-28 h-24', rotate: 'rotate-6', viewBox: '0 0 120 100',
    content: <><path d='M14 88 L106 88 L14 14 Z' /><path d='M14 74 H28 V88' /><path d='M84 88 A 22 22 0 0 0 88 74' /><path d='M60 46 l 6 -4' /></>,
    hideOnMobile: true,
  },
  {
    position: 'left-[30%] top-[38%]', size: 'w-20 h-20', rotate: 'rotate-0', viewBox: '0 0 100 100',
    content: <><path d='M50 8 C 76 6, 94 26, 92 52 C 90 78, 70 94, 46 92 C 22 90, 6 70, 8 46 C 10 24, 28 10, 52 10' /><path d='M50 50 L 88 44' /><circle cx='50' cy='50' r='2' /></>,
    hideOnMobile: true,
  },
  {
    position: 'right-[30%] top-[46%]', size: 'w-24 h-12', rotate: '-rotate-6', viewBox: '0 0 120 60',
    content: <path d='M6 40 C 30 10, 70 10, 104 30 M92 18 L106 31 L88 38' />,
    hideOnMobile: true,
  },
  {
    position: 'left-[40%] top-[6%]', size: 'w-10 h-10', rotate: 'rotate-12', viewBox: '0 0 50 50',
    content: <path d='M25 4 L30 19 L46 19 L33 29 L38 45 L25 35 L12 45 L17 29 L4 19 L20 19 Z' />,
    hideOnMobile: true,
  },
  {
    position: 'right-[12%] top-[88%]', size: 'w-8 h-8', rotate: '-rotate-12', viewBox: '0 0 50 50',
    content: <path d='M25 4 L30 19 L46 19 L33 29 L38 45 L25 35 L12 45 L17 29 L4 19 L20 19 Z' />,
  },
  {
    position: 'left-[12%] top-[90%]', size: 'w-32 h-6', rotate: 'rotate-2', viewBox: '0 0 160 20',
    content: <path d='M4 12 C 20 4, 30 18, 46 10 S 74 4, 90 12 S 120 18, 156 8' />,
    hideOnMobile: true,
  },
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
      {/* background: a chalkboard with faint chalk equations, clipped so it can't cause sideways scroll */}
      <div className='chalkboard absolute inset-x-0 top-0 h-[1000px] overflow-hidden pointer-events-none select-none' aria-hidden='true'>
        {/* eraser swipes: wide, soft strokes where the board was wiped */}
        <svg className='absolute inset-0 w-full h-full' viewBox='0 0 1000 1000' preserveAspectRatio='none'>
          <g fill='none' stroke='rgba(255,255,255,0.035)' strokeWidth='60' strokeLinecap='round' style={{ filter: 'blur(14px)' }}>
            <path d='M60 210 C 220 160, 330 250, 470 190' />
            <path d='M560 700 C 700 640, 820 740, 960 680' />
            <path d='M120 860 C 260 820, 380 900, 520 850' />
          </g>
        </svg>

        {/* chalk layer: everything inside is roughened by the #chalk filter so it looks scribbled */}
        <div className='absolute inset-0' style={{ filter: 'url(#chalk)' }}>
          {chalk.map((note) => (
            <span
              key={note.text}
              className={`${caveat.className} absolute whitespace-nowrap text-white/[0.24] ${note.size} ${note.rotate} ${note.position} ${note.hideOnMobile ? 'hidden md:block' : ''}`}
            >
              {note.text}
            </span>
          ))}
          {doodles.map((doodle) => (
            <svg key={doodle.position} viewBox={doodle.viewBox} className={`absolute ${doodle.position} ${doodle.size} ${doodle.rotate} ${doodle.hideOnMobile ? 'hidden md:block' : ''}`} fill='none' stroke='rgba(255,255,255,0.22)' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
              {doodle.content}
            </svg>
          ))}
        </div>
      </div>

      {/* chalk texture: wobbles the edges and breaks the strokes up with dusty gaps */}
      <svg width='0' height='0' className='absolute' aria-hidden='true'>
        <filter id='chalk' x='-10%' y='-10%' width='120%' height='120%'>
          <feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' seed='3' result='wobble' />
          <feDisplacementMap in='SourceGraphic' in2='wobble' scale='3' xChannelSelector='R' yChannelSelector='G' result='rough' />
          <feTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='1' seed='8' result='grain' />
          <feColorMatrix in='grain' type='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -2.6 0 0 0 1.9' result='dust' />
          <feComposite in='rough' in2='dust' operator='in' />
        </filter>
      </svg>

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


      <div className='relative flex flex-col sm:px-14 px-5 justify-center items-center mx-auto max-w-7xl mt-20 sm:mt-24 pt-24 pb-16 md:pt-28 md:pb-16'>
        <div className='relative animate-fade-in-up'>
          <div className='hero-blob w-28 h-28 md:w-36 md:h-36 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]'>
            <Image src={photo} alt='Zainab Kassim' quality={90} priority className='hero-blob w-full h-full object-cover object-[50%_30%]' />
          </div>
          <span className='absolute top-1 -left-12 md:-left-10 -rotate-6 z-10 bg-white text-black text-xs md:text-sm font-medium rounded-full px-3 py-1 shadow-lg whitespace-nowrap'>hi there 👋</span>
          <span className='absolute bottom-3 right-3 w-4 h-4 rounded-full bg-[#34D399] border-2 border-[#1a1a1a]' />
        </div>

        <div className='flex flex-col items-center text-center text-white animate-fade-in-up font-sans mt-5 relative z-10'>
          <h1 className={`${caveat.className} font-medium leading-[1.1] text-3xl md:text-4xl lg:text-[42px]`}>
            I build things for the web<br />
            and the wardrobe.
          </h1>
          <p className='mt-2 text-sm md:text-base text-white/70'>
            Full-stack developer <span className='text-white/30' aria-hidden='true'>·</span> founder of Byzayelle
          </p>
          <p className='mt-5 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-white/80'>
            <span aria-hidden='true'>📍</span>
            Based in Ottawa, Canada
          </p>
        </div>

        <ScrollReveal animation='animate-expand-horizontally'>
          <div className='flex justify-center mt-5 gap-3 relative mb-4'>
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

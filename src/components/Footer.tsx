import React from 'react'
import Image from 'next/image'

const links = [
  { label: 'Instagram', href: 'https://www.instagram.com/zainab_temi_/', icon: 'https://img.icons8.com/?size=100&id=32320&format=png&color=000000' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zainab-kassim/', icon: 'https://img.icons8.com/?size=100&id=2EqeH19eMd3a&format=png&color=000000' },
  { label: 'GitHub', href: 'https://github.com/zainab-kassim', icon: 'https://img.icons8.com/?size=100&id=fmFqQmR0UdsR&format=png&color=000000' },
  { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=kassimzainab11@gmail.com', icon: 'https://img.icons8.com/?size=100&id=Y2GfpkgYNp42&format=png&color=000000' },
]

export default function Footer() {
  return (
    <footer className='max-w-7xl mx-auto mt-8 sm:px-14 px-5'>
      {/* one row at every size: icon buttons on phones, labelled pills from tablet up */}
      <div className='flex items-center justify-between gap-4 border-t border-black/10 py-8 sm:py-10 text-black'>
        <div className='flex items-center gap-2.5 text-base sm:text-xl font-bold whitespace-nowrap'>
          Let&apos;s get in touch
          <span className='relative flex size-2.5'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75' />
            <span className='relative inline-flex size-2.5 rounded-full bg-green-500' />
          </span>
        </div>
        <ul className='flex items-center gap-1.5 sm:gap-2'>
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={link.label}
                title={link.label}
                className='group inline-flex items-center justify-center gap-1 rounded-full border border-black/10 w-9 h-9 sm:w-auto sm:h-auto sm:px-4 sm:py-2 text-sm transition-colors duration-300 hover:bg-black hover:text-white'
              >
                <Image src={link.icon} alt='' width={20} height={20} className='w-4 h-4 sm:hidden group-hover:invert' />
                <span className='hidden sm:inline'>{link.label} <span aria-hidden='true'>↗</span></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

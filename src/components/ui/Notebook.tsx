'use client'
import React, { useEffect, useRef, useState } from 'react'

type NotebookProps = {
  cover: React.ReactNode
  page: React.ReactNode
  coverColor: string
  className?: string
}

const RINGS = 14

// A spiral-bound notebook whose cover swings open from the spine to show the page underneath.
// Opens on hover (mouse), tap (touch), or when something inside gets keyboard focus.
// On touch screens it also opens by itself while it's in the middle of the screen.
export default function Notebook({ cover, page, coverColor, className = '' }: NotebookProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !window.matchMedia('(hover: none)').matches) return
    const observer = new IntersectionObserver(
      ([entry]) => setOpen(entry.isIntersecting),
      { rootMargin: '-40% 0px -40% 0px' }, // a band across the middle 20% of the screen
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`notebook group relative cursor-pointer ${open ? 'is-open' : ''} ${className}`}
      onClick={(e) => {
        // let links on the page work without closing the notebook
        if ((e.target as HTMLElement).closest('a')) return
        setOpen((o) => !o)
      }}
    >
      {/* stacked page edges peeking out on the right */}
      <div className='absolute inset-y-1.5 -right-1.5 left-4 rounded-r-2xl bg-[#e8e0cf] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.9)]' aria-hidden='true' />
      <div className='absolute inset-y-1 -right-0.5 left-4 rounded-r-2xl bg-[#f1ebdd]' aria-hidden='true' />

      {/* the page */}
      <div className='nb-paper relative h-full rounded-r-2xl rounded-l-md pl-14 pr-6 sm:pr-8 py-8 text-[#2a2a2a]'>
        {page}
      </div>

      {/* the cover */}
      <div className='nb-cover absolute inset-0'>
        <div className='absolute inset-0 rounded-r-2xl rounded-l-md overflow-hidden shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),inset_0_-40px_80px_-40px_rgba(0,0,0,0.35)]' style={{ background: coverColor }}>
          {/* soft light across the cover */}
          <div className='absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),transparent_45%,rgba(0,0,0,0.18))]' aria-hidden='true' />
          {/* punched holes for the spiral */}
          <div className='absolute inset-y-6 left-2 flex flex-col justify-between' aria-hidden='true'>
            {Array.from({ length: RINGS }, (_, i) => <span key={i} className='block w-2 h-2 rounded-full bg-black/45' />)}
          </div>
          <div className='relative h-full pl-10 pr-12 py-7'>{cover}</div>
        </div>
      </div>

      {/* spiral rings sit over both the cover and the page */}
      <div className='absolute inset-y-6 -left-2.5 flex flex-col justify-between pointer-events-none' aria-hidden='true'>
        {Array.from({ length: RINGS }, (_, i) => (
          <span key={i} className='block w-6 h-2.5 rounded-full border-2 border-[#c9ccd1] shadow-[0_1px_1px_rgba(0,0,0,0.4)] -rotate-6' />
        ))}
      </div>
    </div>
  )
}

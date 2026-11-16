import React from 'react'

// Hand-drawn avatars for the hero tiles. Each fills a square viewBox so it
// drops straight into a tile.

export function BotAvatar() {
  return (
    <svg viewBox='0 0 100 100' className='w-full h-full' aria-hidden='true'>
      <rect width='100' height='100' fill='#A7F3D0' />
      {/* antenna */}
      <line x1='50' y1='14' x2='50' y2='26' stroke='#1F2937' strokeWidth='3' />
      <circle cx='50' cy='12' r='5' fill='#EF4444' />
      {/* head */}
      <rect x='22' y='26' width='56' height='46' rx='12' fill='#E5E7EB' stroke='#1F2937' strokeWidth='3' />
      <rect x='30' y='36' width='40' height='24' rx='7' fill='#111827' />
      <circle cx='41' cy='48' r='4.5' fill='#34D399' />
      <circle cx='59' cy='48' r='4.5' fill='#34D399' />
      <rect x='16' y='42' width='6' height='14' rx='3' fill='#1F2937' />
      <rect x='78' y='42' width='6' height='14' rx='3' fill='#1F2937' />
      {/* body */}
      <path d='M28 100 V84 Q28 76 36 76 H64 Q72 76 72 84 V100 Z' fill='#60A5FA' stroke='#1F2937' strokeWidth='3' />
      <text x='50' y='93' textAnchor='middle' fontSize='11' fontFamily='monospace' fontWeight='bold' fill='#1F2937'>{'</>'}</text>
    </svg>
  )
}

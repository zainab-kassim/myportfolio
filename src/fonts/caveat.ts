import localFont from 'next/font/local'

// Caveat (handwritten), self-hosted so builds never depend on fetching it from
// Google Fonts. One variable font file covers weights 400–700.
export const caveat = localFont({
  src: './Caveat-latin.woff2',
  weight: '400 700',
  display: 'swap',
})

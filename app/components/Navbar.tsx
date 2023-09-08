import React from 'react'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className='w-full text-green-text flex justify-center gap-8 md:gap-12 py-3 font-jomhuria text-3xl'>
        <div>Home</div>
        <div>Media</div>
        <div>Producer</div>
        <div>Biography</div>
    </nav>
  )
}
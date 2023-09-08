import React from 'react'

type Props = {}

export default function Navbar({ }: Props) {
  return (
    <nav className='bg-white fixed bottom-0  md:static z-10 w-full text-green-text grid grid-cols-4 md:grid-cols-8 md:gap-12 py-3 font-jomhuria text-3xl'>
      <div className='grid grid-cols-4 col-span-4 md:col-start-3'>
        <div className='flex justify-center'>Home</div>
        <div className='flex justify-center'>Media</div>
        <div className='flex justify-center'>Producer</div>
        <div className='flex justify-center'>Biography</div>
      </div>
    </nav>
  )
}
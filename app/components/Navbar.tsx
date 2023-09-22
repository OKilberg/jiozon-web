import React from 'react'
import NavLink from './ui/NavLink'

type Props = {}

export default function Navbar({ }: Props) {
  return (
    <nav className='bg-green-dark md:bg-transparent border-t-2 md:border-t-0 text-green-light uppercase fixed bottom-0  md:static z-10 w-full grid grid-cols-4 md:grid-cols-8 md:gap-12 py-3 font-interactive text-xl'>
      <div className='grid grid-cols-4 col-span-4 md:col-start-3'>
        <NavLink label='Home' url='/'/>
        <NavLink label='Media' url='/media'/>
        <NavLink label='Producer' url='/producer'/>
        <NavLink label='About' url='/about'/>
      </div>
    </nav>
  )
}
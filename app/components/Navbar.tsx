import React from 'react'
import NavLink from './ui/NavLink'

type Props = {}

export default function Navbar({ }: Props) {
  return (
    <nav className='bg-white md:bg-none text-green-light fixed bottom-0  md:static z-10 w-full grid grid-cols-4 md:grid-cols-8 md:gap-12 py-3 font-jomhuria text-3xl'>
      <div className='grid grid-cols-4 col-span-4 md:col-start-3'>
        <NavLink label='Home' url='/'/>
        <NavLink label='Media' url='/media'/>
        <NavLink label='Producer' url='/producer'/>
        <NavLink label='About' url='/about'/>
      </div>
    </nav>
  )
}
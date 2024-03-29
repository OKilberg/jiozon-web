import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { TextButton } from '@/components/text/Text'
import NavItem from '@/components/nav/NavItem'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>
        <header className='hidden md:flex fixed top-3 z-20 w-full justify-center'>
          <nav className='flex gap-6 px-5 py-2 w-fit bg-orange-tint bg-opacity-20 backdrop-blur-lg rounded-full shadow-md'>
            <NavItem label='Home' href={'#home'} selectedColor='text-red-juicy outline-1 outline-white drop-shadow-stroke' hoverColor='hover:text-red-juicy'></NavItem>
            <NavItem label='About' href={'#about'} selectedColor='text-red-juicy outline-1 outline-white drop-shadow-stroke' hoverColor='hover:text-red-juicy'></NavItem>
            <NavItem label='Contact' href={'#contact'} selectedColor='text-red-juicy outline-1 outline-white drop-shadow-stroke' hoverColor='hover:text-red-juicy'></NavItem>
          </nav>
        </header>
        {children}
        <footer className='h-screen-3/4 bg-orange-doorhinge'>Footer</footer>
      </body>
    </html>
  )
}


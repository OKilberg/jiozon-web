import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

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
    <html lang="en">
      <body className={"flex flex-col bg-gradient2 mb-10 md:mb-0 " + inter.className}>
        <Navbar />
        {children}
        <footer className='w-full h-[200px] text-white bg-green-dark'>
          <div className='flex items-end w-full h-full pb-10 px-12'>
            <h1 className='opacity-70'>Website by frontoship</h1>
          </div>
        </footer>
      </body>
    </html>
  )
}

import React from 'react'
import H from '../ui/H'
import { dir } from 'console'

type Props = {}

export default function Contact({ }: Props) {
  return (
    <section className='px-6 py-6 md:px-0 '>
      <div className='bg-mint-background border-2 border-mint-border rounded-md flex justify-center pt-3 pb-6'>
        <div className='flex flex-col justify-center'>
          <H size={2} bold text='Contact' gradient='bg-gradient-to-tl from-mint-border to-white text-center' />
          <ul className='flex flex-col gap-6 mt-6'>
            <li className='flex items-center gap-6'>
              <H size={3} bold text='Email' color='text-mint-border' />
              <p className='text-white'>email@jiozon.com</p>
            </li>
            <li className='flex items-center gap-6'>
              <H size={3} bold text='Email' color='text-mint-border' />
              <p className='text-white'>email@jiozon.com</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
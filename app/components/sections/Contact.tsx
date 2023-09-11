import React from 'react'
import H from '../ui/H'

type Props = {}

export default function Contact({}: Props) {
  return (
    <section className='px-6 py-6 md:px-0'>
        <H size={2} bold text='Contact'/>
        <ul className='flex flex-col gap-6 mt-6'>
            <li>
                <H size={3} bold text='Email'/>
                <p>email@jiozon.com</p>
            </li>
            <li>
                <H size={3} bold text='Email'/>
                <p>email@jiozon.com</p>
            </li>
        </ul>
    </section>
  )
}
import React from 'react'
import Image from 'next/image'
import Header from '../ui/H'

type Props = {}

export default function Tour({ }: Props) {
    return (
        <section className='flex flex-col gap-6 px-6 md:px-0'>
            <Header size={2} bold text='Tour Schedule'/>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-12'>
                <figure className='relative h-[30vh] md:h-full'>
                    <Image className='' src={'/space.jpg'} alt='space' fill style={{ objectFit: "cover" }} />
                </figure>
                <ul className='col-span-2 grid grid-rows-3 gap-6'>
                    <TourItem/>
                    <TourItem/>
                    <TourItem/>
                </ul>
            </div>
        </section>
    )
}

type TourItem = {}

function TourItem({}: TourItem) {
  return (
    <li className='flex gap-6 justify-start px-6 py-3 bg-green rounded-md text-white'>
        <div className='flex flex-col justify-center items-center font-bold'>
            <div>
                17
            </div>
            <div>
                AUG
            </div>
        </div>
        <div className='flex flex-col justify-between'>
            <Header bold size={3} text='Event Name'/>
            <p>Location</p>
        </div>
    </li>
  )
}
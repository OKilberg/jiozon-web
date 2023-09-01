import React from 'react'
import Image from 'next/image'
import Header from '../ui/Header'

type Props = {}

export default function Tour({ }: Props) {
    return (
        <div className='flex flex-col gap-6'>
            <Header size={2} bold text='Tour Schedule'/>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-12'>
                <div className='relative'>
                    <Image className='rounded-t-lg md:rounded-none' src={'/space.jpg'} alt='space' fill style={{ objectFit: "cover" }} />
                </div>
                <div className='col-span-2 grid grid-rows-3 gap-6'>
                    <div className='p-6 bg-green-text'>Event 1</div>
                    <div className='p-6 bg-green-text'>Event 1</div>
                    <div className='p-6 bg-green-text'>Event 1</div>
                </div>
            </div>
        </div>
    )
}
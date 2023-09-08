import React from 'react'
import H from '../ui/H'

type VideoListProps = {}

export default function VideoList({ }: VideoListProps) {
    return (
        <section className='h-fit p-6 md:px-0'>
            <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10'>
                <VideoItem />
                <VideoItem />
            </ul>
        </section>
    )
}

type VideoItemProps = {}

function VideoItem({ }: VideoItemProps) {
    return (
        <li className='text-green-text'>
            <H bold text='Video Item' size={2} py={2}/>
            <div className='aspect-video bg-green-text rounded-lg'>
                
            </div>
        </li>
    )
}
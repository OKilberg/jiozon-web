import React from 'react'
import VideoItem from '../ui/VideoItem'

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


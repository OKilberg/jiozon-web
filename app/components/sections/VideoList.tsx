import React from 'react'
import Header from '../ui/Header'

type VideoListProps = {}

export default function VideoList({ }: VideoListProps) {
    return (
        <div className='h-fit p-6 md:px-0'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10'>
                <VideoItem />
                <VideoItem />
            </div>
        </div>
    )
}

type VideoItemProps = {}

function VideoItem({ }: VideoItemProps) {
    return (
        <div className='text-green-text'>
            <Header bold text='Video Item' size={3} py={2}/>
            <div className='aspect-video bg-green-text rounded-lg'>
                
            </div>
        </div>
    )
}
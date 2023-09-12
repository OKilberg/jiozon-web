'use client'

import YouTube from "react-youtube"
import H from "./H"

type VideoItemProps = {}

export default function VideoItem({ }: VideoItemProps) {
    return (
        <li className=''>
            <H bold text='Video Item' size={2} py={2} color={{color: 'green', light:''}}/>
            <div className='aspect-video bg-green rounded-lg mt-3'>
                <YouTube className='h-full w-full rounded-lg' iframeClassName='h-full w-full rounded-lg' videoId='jfKfPfyJRdk'/>
            </div>
        </li>
    )
}
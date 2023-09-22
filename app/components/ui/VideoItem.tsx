'use client'

import YouTube from "react-youtube"
import H from "./H"

type VideoItemProps = {}

export default function VideoItem({ }: VideoItemProps) {
    return (
        <li className=''>
            <H bold text='Video Item' size={2} py={2} gradient='bg-gradient-to-br from-brown-border to-white'/>
            <div className='aspect-video bg-brown-background border-2 border-brown-border rounded-lg mt-3'>
                <YouTube className='h-full w-full rounded-lg' iframeClassName='h-full w-full rounded-lg' videoId='jfKfPfyJRdk'/>
            </div>
        </li>
    )
}
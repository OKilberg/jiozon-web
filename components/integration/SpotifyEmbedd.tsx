'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import { Spotify } from 'react-spotify-embed'

type Props = {
    link: string,
    className?: string,
    fallback?: ReactNode
}

/**
 * 
 * This Spotify component uses third-party cookies.
 * 
 */
export default function SpotifyEmbedd({ link, className, fallback }: Props) {

    const [isLoading, setLoading] = useState(true);

    //Since the iframe seems to be cached, loading is never false after first page load.
    useEffect(() => {
        console.log('Spotify Iframe Is Loading: ', isLoading)
    }, [isLoading])

    function onIframeLoad() {
        setLoading(false)
    }
   
    return (
        <Spotify onLoad={onIframeLoad} className={className} link={link} />
    )
}
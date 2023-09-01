import React from 'react'
import Image from 'next/image'

type Props = { imageUrl: string, text?: string }

export default function ImageContainer({ text, imageUrl }: Props) {
  return (
    <div className='h-full relative'>
      {text && <h1 className='font-bold text-6xl text-center top-1/4 h-full w-full text-white absolute z-10'>{text}</h1>}
      <Image src={imageUrl} alt='space' fill style={{ objectFit: "cover" }} />
    </div>
  )
}
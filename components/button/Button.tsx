import React from 'react'
import { TextButton } from '../text/Text'

type ButtonProps = {
    size?: number,
    text: string
}

export default function ButtonCTA({text}: ButtonProps) {
  return (
    <button className='p-2 bg-emerald-500 rounded-md w-fit'>
        <TextButton text={text} noMargin />
    </button>
  )
}
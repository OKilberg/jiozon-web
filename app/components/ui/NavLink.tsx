'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

type Props = { label: string, url: string }

export default function NavLink({ label, url }: Props) {
    const pathName = usePathname();
    const stateStyle = () => {
        return pathName === url ? 'bg-green text-white' : 'text-green';
    }

    return (
        <Link className={'flex justify-center '+stateStyle()} href={url}>{label}</Link>
    )
}
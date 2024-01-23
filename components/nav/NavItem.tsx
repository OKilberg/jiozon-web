'use client'

import React, { ReactNode, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { TextButton } from '../text/Text'

type Props = {
    children?: ReactNode,
    href: string,
    label: string,
    selectedColor?: string,
    hoverColor?: string
}

export default function NavItem({ children, href, label, selectedColor, hoverColor }: Props) {
    const path = usePathname();
    const [inView, setInView] = useState(false)

    const handleScroll = (el: any) => {
        checkInView(el) ? setInView(true) : setInView(false)
    }

    useEffect(() => {
        // get target id element
        const documentEl = document?.getElementById(href.replace('/#', ''))
        // add on scroll event
        window.addEventListener("scroll", () => handleScroll(documentEl));
        return () => window.removeEventListener("scroll", () => handleScroll(documentEl));
        console.log('Something happened')
        //depend on path and the function
    }, [path, handleScroll])

    const checkInView = (el: any | undefined) => {
        if (!el) return false;
        const { top, left, bottom, right } = el.getBoundingClientRect()
        const { innerHeight, innerWidth } = window;
        
        return (
            top>-1 && bottom <= (innerHeight / 2)
        );
    }

    console.log(path, href)
    //const itemColor = (path === href ? selectedColor : 'text-white');
    const itemColor = (inView ? selectedColor : 'text-white');
    const style = [itemColor, hoverColor].join(' ')

    return (
        <Link href={href}>
            <TextButton fontSize={24} textStyle={`${style} font-trade-winds`} noMargin text={label} />
        </Link>
    )
}

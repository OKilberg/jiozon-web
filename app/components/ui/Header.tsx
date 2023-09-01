import React from 'react'

type Props = { size?: number, text: string, bold?: boolean, py?:number }

export default function Header({ size, text, bold, py }: Props) {

    const hStyle = () => {
        let tw = '';
        if (bold) tw += 'font-bold ';
        if(py) tw += 'py-'+py+' '
        return tw;
    }

    if (size === 1) return (
        <h1 className={hStyle() + 'text-6xl'}>{text}</h1>
    )
    else if (size === 2) return (
        <h2 className={hStyle() + 'text-3xl'}>{text}</h2>
    )
    else if (size === 3) return (
        <h3 className={hStyle() + 'text-2xl'}>{text}</h3>
    )
    else return (
        <h1>Header1</h1>
    )
}
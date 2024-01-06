import React, { ReactNode } from 'react'
import {startVariants, spanVariants, colVariants} from './layoutUtils';

type Props = {
    type: 'grid' | 'row' | 'col',

}

type ClassNameType = {
    className?: string;
}

type GridProps = ClassNameType & {
    cols?: number,
    children: React.ReactNode | React.ReactNode[];
}

type GridItem = ClassNameType & {
    start?: number,
    span?: number,
    children?: ReactNode
}

export default function Layout({ }: Props) {
    return (
        <div>Layout</div>
    )
}

export function GridItem({ start, span, children }: GridItem) {
    const useStart = start !== undefined ? start : 1
    const useSpan = span !== undefined ? span : 1
    return (
        <div className={`${startVariants[useStart]} ${spanVariants[useSpan]}`}>
            {children}
        </div>
    )
}

export function Grid({ cols, children }: GridProps) {
    const useCols = cols !== undefined ? cols : 6

    return (
        <div className={`grid ${colVariants[useCols]}`}>
            {children}
        </div>
    )
}

import React from 'react'
import { FontSizes, fontSizeVariants, useFontSize, useMarginBottom } from './textUtils'

type TextProps = {
    fontSize?: FontSizes
    noMargin?: boolean,
    text: string
}

export function TextDisplay({ text, fontSize, noMargin }: TextProps) {
    const defaultFontSize = 96;
    return (
        <h1 className={`${useFontSize(fontSize, defaultFontSize)} ${useMarginBottom(fontSize, defaultFontSize, noMargin)} font-trade-winds`}>
            {text}
        </h1>
    )
}

export function TextHeading({ text, fontSize, noMargin }: TextProps) {
    const defaultFontSize = 36;
    return (
        <h2 className={`${useFontSize(fontSize, 36)} ${useMarginBottom(fontSize, defaultFontSize, noMargin)} font-yeseva-one`}>
            {text}
        </h2>
    )
}

export function TextSubheading({ text, fontSize, noMargin }: TextProps) {
    const defaultFontSize = 24;
    return (
        <h3 className={`${useFontSize(fontSize, 24)} ${useMarginBottom(fontSize, defaultFontSize, noMargin)} font-bold font-libre-baskerville`}>
            {text}
        </h3>
    )
}

export function TextBody({ text, fontSize, noMargin }: TextProps) {
    const defaultFontSize = 16;
    return (
        <p className={`${useFontSize(fontSize, 16)} ${useMarginBottom(fontSize, defaultFontSize, noMargin)} font-libre-baskerville`}>
            {text}
        </p>
    )
}

export function TextButton({ text, fontSize, noMargin }: TextProps) {
    const defaultFontSize = 16;
    return (
        <p className={`${useFontSize(fontSize, 16)} ${useMarginBottom(fontSize, defaultFontSize, noMargin)} font-reem-kufi`}>
            {text}
        </p>
    )
}


/* TODO
export function TextSmall({ }: TextProps) {
    return (
        <small>

        </small>
    )
}

export function TextCaption({ }: TextProps) {
    return (
        <h1>

        </h1>
    )
}

export function TextQuote({ }: TextProps) {
    return (
        <h1>

        </h1>
    )
}
*/




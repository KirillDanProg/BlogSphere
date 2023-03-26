import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Text.module.scss'

export const TextVariant = {
    DEFAULT: 'default',
    ERROR: 'error'
} as const

export const TextAlign = {
    RIGHT: 'right',
    LEFT: 'left',
    CENTER: 'center'
} as const

export const TextSize = {
    M: 'size_m',
    L: 'size_l'
} as const

type TextVariantType = 'primary' | 'error'
type TextAlignType = 'left' | 'right' | 'center'
type TextSizeType = 'size_m' | 'size_l'

interface TextProps {
    className?: string
    title?: string
    text?: string
    center?: boolean
    variant?: TextVariantType
    align?: TextAlignType
    size?: TextSizeType
}

export const Text: FC<TextProps> = (props) => {
    const {
        className = '',
        text,
        title,
        variant = TextVariant.DEFAULT,
        align = TextAlign.LEFT,
        size = TextSize.M
    } = props

    const additionalClasses = [
        className,
        s[variant],
        s[align],
        s[size]
    ]
    return (
        <div className={ classNames(s.Text, {}, additionalClasses) }>
            {title && <p className={ s.title }>{title}</p>}
            {text && <p className={ s.text }>{text}</p>}
        </div>
    )
}

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

type TextVariantType = 'primary' | 'error'
type TextAlignType = 'left' | 'right' | 'center'

interface TextProps {
    className?: string
    title?: string
    text?: string
    center?: boolean
    variant?: TextVariantType
    align?: TextAlignType
}

export const Text: FC<TextProps> = (props) => {
    const {
        className = '',
        text,
        title,
        variant = TextVariant.DEFAULT,
        align = TextAlign.LEFT
    } = props

    const additionalClasses = [
        className,
        s[variant],
        s[align]
    ]
    return (
        <div className={ classNames(s.Text, {}, additionalClasses) }>
            {title && <p className={ s.title }>{title}</p>}
            {text && <p className={ s.text }>{text}</p>}
        </div>
    )
}

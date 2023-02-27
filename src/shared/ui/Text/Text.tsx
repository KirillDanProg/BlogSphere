import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Text.module.scss'

export const TextVariant = {
    DEFAULT: 'default',
    ERROR: 'error'
} as const

type TextVariantType = 'primary' | 'error'

interface TextProps {
    className?: string
    title?: string
    text?: string
    center?: boolean
    variant?: TextVariantType
}

export const Text: FC<TextProps> = (props) => {
    const {
        className = '',
        text,
        title,
        center,
        variant = TextVariant.DEFAULT
    } = props

    return (
        <div className={ classNames(s.Text, { [s.center]: center }, [className, s[variant]]) }>
            {title && <p className={ s.title }>{title}</p>}
            {text && <p className={ s.text }>{text}</p>}
        </div>
    )
}

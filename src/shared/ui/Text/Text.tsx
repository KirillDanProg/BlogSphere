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
    S: 'size_s',
    M: 'size_m',
    L: 'size_l'
} as const

type TextVariantType = 'primary' | 'error'
type TextAlignType = 'left' | 'right' | 'center'
type TextSizeType = 'size_s' | 'size_m' | 'size_l'

interface TextProps {
    className?: string
    title?: string
    text?: string
    center?: boolean
    variant?: TextVariantType
    align?: TextAlignType
    size?: TextSizeType
    ['data-testid']?: string
}

export const Text: FC<TextProps> = (props) => {
    const {
        className = '',
        text,
        title,
        variant = TextVariant.DEFAULT,
        align = TextAlign.LEFT,
        size = TextSize.M,
        'data-testid': testId = 'Text'
    } = props

    type HeaderTagType = 'h1' | 'h2' | 'h3'

    const mapSizeToHeaderTag: Record<TextSizeType, HeaderTagType> = {
        [TextSize.S]: 'h3',
        [TextSize.M]: 'h2',
        [TextSize.L]: 'h1'
    }

    const HeaderTag = mapSizeToHeaderTag[size]

    const additionalClasses = [
        className,
        s[variant],
        s[align],
        s[size]
    ]
    return (
        <div className={ classNames(s.Text, {}, additionalClasses) }>
            {title &&
                <HeaderTag data-testid={ `${testId}.HEADER` } className={ s.title }>{title}</HeaderTag>}
            {text && <p data-testid={ `${testId}.PARAGRAPH` } className={ s.text }>{text}</p>}
        </div>
    )
}

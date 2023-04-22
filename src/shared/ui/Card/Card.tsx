import { type FC, type HTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    style?: Record<string, string>
}

export const Card: FC<CardProps> = (props) => {
    const {
        className,
        children,
        style
    } = props
    return (
        <div
            style={ style }
            className={ classNames(s.Card, {}, [className]) }>
            {children}
        </div>
    )
}

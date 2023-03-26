import { type FC, type HTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
}

export const Card: FC<CardProps> = (props) => {
    const {
        className,
        children
    } = props
    return (
        <div className={ classNames(s.Card, {}, [className]) }>
            {children}
        </div>
    )
}
